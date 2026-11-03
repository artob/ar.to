import { defineCollection, type SchemaContext } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields shared by all collections. Unknown keys are rejected, so typos in
// frontmatter fail the build.
const base = ({ image }: SchemaContext) =>
  z
    .object({
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      lang: z.string().optional(),
      authors: z.array(z.string()).optional(),
      categories: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      projects: z.array(z.string()).default([]),
      summary: z.string().optional(),
      links: z.array(z.object({ name: z.string(), url: z.url() })).default([]),
      image: image().optional(),
      // Where a republished entry first appeared, and an archived copy of
      // it if the original is gone; shown in a notice after the content.
      // `label` replaces the "Originally published at" that precedes the
      // URL, e.g. for a transcript of a recording.
      original: z
        .object({
          url: z.url(),
          archive: z.url().optional(),
          label: z.string().optional(),
        })
        .optional(),
      // An editorial note for that notice (inline Markdown), e.g. on what
      // was lost in the move.
      notice: z.string().optional(),
      // My post on X announcing the entry, shown atop it as social proof:
      // its text (inline Markdown, paragraphs separated by blank lines) and
      // a snapshot of its metrics.
      tweet: z
        .object({
          url: z.url(),
          date: z.coerce.date(),
          text: z.string(),
          replies: z.number().int().optional(),
          reposts: z.number().int().optional(),
          likes: z.number().int().optional(),
          bookmarks: z.number().int().optional(),
          views: z.number().int().optional(),
        })
        .optional(),
    })
    .strict();

// Dated entries live at `<collection>/YYYY/MM/<slug>.md`, published at
// `/YYYY/MM/<slug>`.
const dated = (name: string) =>
  glob({
    pattern: '[0-9][0-9][0-9][0-9]/[0-9][0-9]/*.md',
    base: `./src/content/${name}`,
  });

const essays = defineCollection({
  loader: dated('essays'),
  schema: (context) =>
    base(context).extend({
      // Features an essay atop `/essays` (lowest first).
      order: z.number().int().optional(),
    }),
});

const reviews = defineCollection({
  loader: dated('reviews'),
  schema: base,
});

const talks = defineCollection({
  loader: dated('talks'),
  schema: (context) =>
    base(context).extend({
      dateEnd: z.coerce.date().optional(),
      allDay: z.boolean().default(false),
      event: z.string().optional(),
      eventUrl: z.url().optional(),
      location: z.string().optional(),
      abstract: z.string().optional(),
      video: z.url().optional(),
      slides: z.url().optional(),
      pdf: z.url().optional(),
      code: z.url().optional(),
    }),
});

const projects = defineCollection({
  // The file name is the slug verbatim (the default slugger would turn
  // `rdf.rs` into `rdfrs`).
  loader: glob({
    pattern: '*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: (context) =>
    base(context).extend({
      homepage: z.url().optional(),
      // Pins a project ahead of the rest on `/projects` (lowest first).
      order: z.number().int().optional(),
    }),
});

// Undated reference notes, published at `/notes/<name>`. The title is
// inline Markdown, and `weight` (0-5) sets its prominence on `/notes`.
const notes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/notes' }),
  schema: z
    .object({
      title: z.string(),
      weight: z.number().int().min(0).max(5).default(0),
    })
    .strict(),
});

// Papers, in one data file. `date` is a full date, or just the year when
// that is all that is known.
const publications = defineCollection({
  loader: file('./src/content/publications.yaml'),
  schema: z
    .object({
      id: z.string(), // kept in the data by the `file()` loader
      title: z.string(),
      authors: z.array(z.string()).min(1),
      date: z.union([z.date(), z.number().int()]),
      venue: z.string().optional(),
      url: z.url(),
    })
    .strict(),
});

export const collections = {
  essays,
  reviews,
  talks,
  projects,
  notes,
  publications,
};
