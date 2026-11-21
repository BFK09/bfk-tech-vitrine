# Leçon 07 — Eleventy : un gabarit, plusieurs pages (pagination)

## L'idée
Un moule à gâteaux : un seul moule (`src/logiciel.njk`), plusieurs gâteaux (`gestopharm.html`, `gestomaquis.html`).
La pâte, ce sont les données : `src/_data/logiciels.json`, une liste avec un objet par logiciel.

## Comment ça marche
```yaml
pagination:
    data: logiciels   # la liste à parcourir (_data/logiciels.json)
    size: 1           # 1 élément par page → 1 page par logiciel
    alias: logiciel   # nom de l'élément courant dans le gabarit
permalink: "{{ logiciel.slug }}.html"
eleventyComputed:     # valeurs calculées pour chaque page
    title: "{{ logiciel.title }}"
```
- `permalink` doit changer d'une page à l'autre, sinon les deux pages s'écrasent au même endroit.
- `eleventyComputed` : le titre et la description viennent du logiciel courant.
- `site.products[logiciel.slug]` : crochets = aller chercher une clé dont le nom est dans une variable.

## Une seule source de vérité
`logiciels.html` construit aussi ses cartes avec `{% for logiciel in logiciels %}` : une fonctionnalité ajoutée
dans `logiciels.json` apparaît sur la carte ET sur la page détaillée.

## Piège rencontré
`base.njk` comparait le menu avec `permalink`. Dans une page paginée, `permalink` est un modèle (`{{ logiciel.slug }}.html`),
pas l'adresse finale → on utilise `page.url` (l'adresse réellement fabriquée), et `menuActive` pour surligner « Nos logiciels ».
Vérifié : les autres pages sortent identiques à avant (diff).

## Pourquoi c'est utile pour Google
Une page = un sujet : « logiciel gestion pharmacie » trouve une page qui ne parle que de GESTOPHARM, avec son propre titre et sa description.

## Question
Pour ajouter un 3e logiciel (GESTOLIB), quels fichiers faut-il toucher ?
