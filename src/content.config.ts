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
  schema: base,
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
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: base,
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
