import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un fichier .md par projet dans src/content/projets/
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),
    // idee : pas encore commencé · en-cours : on y travaille · en-ligne : utilisable · en-pause
    statut: z.enum(['idee', 'en-cours', 'en-ligne', 'en-pause']),
    date: z.coerce.date(),
    lien: z.string().optional(),   // l'appli elle-même (ex. /lectures-babelio/)
    code: z.string().optional(),   // le dépôt GitHub, si public
    tags: z.array(z.string()).default([]),
  }),
});

// Un fichier .md par note dans src/content/notes/
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    resume: z.string().optional(),
    brouillon: z.boolean().default(false), // true = pas publié
  }),
});

export const collections = { projets, notes };
