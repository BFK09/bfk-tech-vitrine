# Leçon 06 — Eleventy : écrire l'en-tête et le pied de page une seule fois

## Le problème
Les 4 pages contenaient chacune le même `<head>`, le même menu et le même pied de page.
Changer un numéro de téléphone = 4 modifications, et un oubli donne un site incohérent.

## L'idée à retenir
Image : un **publipostage** dans Word. On écrit **une** lettre type avec des champs (`«Nom»`),
une liste de données, et Word fabrique toutes les lettres. Eleventy fait pareil avec les pages :

| Publipostage | Eleventy |
|---|---|
| Lettre type | `src/_includes/base.njk` (le gabarit) |
| Champs `«Nom»` | `{{ title }}`, `{{ description }}`… |
| Fichier de données | `src/_data/site.json`, `menu.json`, et l'en-tête `--- … ---` de chaque page |
| Lettres fusionnées | le dossier `_site/` |

**Important** : Eleventy travaille **avant** la mise en ligne. Le visiteur et Google reçoivent des pages
HTML complètes, comme avant. Aucun JavaScript n'est nécessaire chez le visiteur.

## Ce qu'on a fait
1. `npm install --save-dev @11ty/eleventy@3` : installe l'outil dans `node_modules/` et l'inscrit dans `package.json`
2. Les fichiers du site sont rangés dans `src/` ; les leçons et la source de l'image d'aperçu restent dehors (non publiées)
3. Gabarit `base.njk` : tout ce qui est commun aux 4 pages
4. Chaque page ne garde que son contenu de `<main>`, précédé d'un **front matter** :
   ```
   ---
   layout: base.njk
   permalink: contact.html
   title: "Contact | BFK-TECH"
   description: "…"
   script: js/contact.js
   ---
   ```
5. Vérification : les 4 pages fabriquées sont **identiques** aux anciennes (comparaison ligne à ligne avec `diff`)
6. Publication automatique : `.github/workflows/publier.yml` (GitHub Actions) assemble et publie à chaque `git push`

## Notions
- **Générateur de site statique** : programme qui fabrique des pages HTML à partir de sources
- **Gabarit** (template, langage Nunjucks) : `{{ variable }}` affiche une valeur ; `{% if %}` et `{% for %}` décident et répètent
- **Front matter** : le bloc `--- … ---` en haut d'une page, ses données propres
- **`_data/`** : données partagées par toutes les pages (`site.email`, `menu`)
- `aria-current="page"` est maintenant **calculé** : `{% if item.href == permalink %}`
- **npm** et `package.json` : la liste des outils du projet ; `package-lock.json` fige leurs versions exactes
- `node_modules/` et `_site/` ne vont **pas** dans git (`.gitignore`) : ils se refabriquent
- **GitHub Actions** : un ordinateur de GitHub exécute nos commandes à chaque envoi

## Question de compréhension
Si tu modifies directement `_site/contact.html`, que devient ta modification au prochain `npm start` ?
