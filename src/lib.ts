export const STATUTS: Record<string, string> = {
  'en-ligne': 'En ligne',
  'en-cours': 'En cours',
  'en-pause': 'En pause',
  idee: 'Idée',
};

export function dateFr(d: Date) {
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
