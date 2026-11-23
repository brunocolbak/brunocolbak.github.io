# Carnet

Mon site de projets, d'idées et de notes : https://brunocolbak.github.io

Chaque push sur `main` reconstruit et publie le site (GitHub Actions → GitHub Pages).

## Ajouter un projet ou une idée

Créer `src/content/projets/<nom>.md` :

```markdown
---
titre: Mon projet
resume: Une phrase.
statut: idee        # idee | en-cours | en-ligne | en-pause
date: 2026-11-23
lien: /mon-projet/  # facultatif : l'appli
code: https://github.com/brunocolbak/mon-projet  # facultatif
---

Texte libre en Markdown.
```

Un projet `idee` apparaît dans la liste « Idées », les autres dans « Projets ».

## Ajouter une note

Créer `src/content/notes/2026-11-23-sujet.md` avec `titre`, `date` et le texte. `brouillon: true` la garde hors ligne.

## Ajouter une appli

Chaque appli vit dans **son propre dépôt**, avec sa propre technologie.

- **Appli statique** (HTML/JS, Astro, Vite…) : dépôt public, *Settings → Pages* activé. Elle s'affiche automatiquement à `https://brunocolbak.github.io/<nom-du-depot>/`. Attention aux chemins absolus (`/data.json`) : utiliser des chemins relatifs (`data.json`) ou la `base` de l'outil de build.
- **Appli avec serveur** (Express, Python, base de données) : héberger ailleurs (Railway, Render…) et mettre son adresse dans `lien`.

Puis ajouter sa fiche dans `src/content/projets/`.

## En local

```bash
npm install
npm run dev
```

(À faire hors du dossier Dropbox : la synchro casse `node_modules`.)
