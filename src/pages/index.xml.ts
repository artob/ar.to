import type { APIRoute } from 'astro';
import { allEntries } from '../lib/content';
import { rss } from '../lib/rss';

export const GET: APIRoute = async () =>
  rss('Arto Bendiken', '/index.xml', await allEntries());
