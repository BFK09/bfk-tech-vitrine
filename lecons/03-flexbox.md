# Leçon 03 — Flexbox : placer les boîtes côte à côte

**Durée : 45 minutes.** Les boîtes ont un style. Aujourd'hui, on choisit leur **disposition**.

## L'idée à retenir
Par défaut, les blocs (`section`, `p`, `h2`…) s'empilent **les uns sous les autres**.
Flexbox transforme un **parent** en « étagère » : ses **enfants directs** se rangent sur une ligne,
et on règle l'espace entre eux et leur alignement.

Image : le parent est l'étagère, les enfants sont les livres. On règle l'étagère, pas les livres.

## Les notions
- `display: flex;` se met **sur le parent**. Ses enfants directs passent en ligne.
- `gap: 20px;` donne l'espace **entre** les enfants (plus propre que des marges sur chacun).
- `flex: 1;` se met **sur les enfants** : ils se partagent la largeur à parts égales.
- `flex-wrap: wrap;` : quand la place manque, les enfants passent à la ligne au lieu d'être écrasés.
- `justify-content` aligne sur l'axe principal (horizontal) : `center`, `space-between`…
- `align-items` aligne sur l'axe secondaire (vertical) : `flex-start`, `center`, `stretch`…

## Étapes
1. Mettre `main` en flex et prédire le résultat.
2. Ajouter `gap`, puis `flex: 1` sur les sections.
3. Casser exprès : mettre `display: flex` sur `section` au lieu de `main`, et observer.
4. Ajouter `flex-wrap` et tester la page en largeur mobile.
5. Régler le problème du `footer` fixe qui cache le contenu.

## Mini-défi (sans aide)
Dans le `header`, ajouter un petit menu (3 liens) et placer le titre à gauche, le menu à droite,
avec Flexbox.

## Vérification de fin de leçon
- Sur quel élément met-on `display: flex` : le parent ou les enfants ? Pourquoi ?
- Quelle est la différence entre `gap` et `margin` ?
- Que fait `flex: 1` ?
