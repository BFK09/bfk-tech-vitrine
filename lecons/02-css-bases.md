# Leçon 02 — CSS : donner un style à la page

**Durée : 45 minutes.** La structure (HTML) est faite. Aujourd'hui, l'apparence.

## L'idée à retenir
CSS est une liste de règles qui disent : « pour *tels* éléments, applique *tel* style ».
HTML = le squelette, CSS = les vêtements. On les garde dans deux fichiers séparés,
pour changer l'un sans toucher à l'autre.

## Les notions
- **Une règle CSS** a trois parties :
  ```
  sélecteur {
      propriété: valeur;
  }
  ```
  Le **sélecteur** choisit les éléments (`h1`, `p`, `footer`…), la **propriété** dit quoi changer,
  la **valeur** dit comment. Chaque ligne se termine par `;`.
- **Relier le CSS à la page** : une balise `<link rel="stylesheet" href="...">` placée dans le `<head>`.
- **Quelques propriétés** : `color` (couleur du texte), `background-color` (fond), `font-family` (police),
  `font-size` (taille), `text-align` (alignement).
- **Couleurs** : un nom (`navy`), ou un code hexadécimal (`#1e3a5f`). Une couleur = 3 valeurs
  rouge/vert/bleu, de `00` à `ff`.
- **Unités** : `px` (pixels, fixe), `rem` (relatif à la taille du texte de base, plus souple),
  `%` (relatif au parent).
- **La boîte** : chaque élément est une boîte avec, de l'intérieur vers l'extérieur,
  le **contenu**, le `padding` (espace *dedans*), la `border` (bordure) et la `margin` (espace *dehors*).
  Confondre `padding` et `margin` est l'erreur la plus courante des débutants.
- **Les classes** : pour styler *certains* éléments seulement, on leur donne un nom avec
  `class="nom"` en HTML, et on les cible en CSS avec `.nom`.

## À faire (vous tapez)
1. Créez `style.css` à côté de `index.html`.
2. Reliez-le dans le `<head>` de `index.html`. Indice : la balise s'appelle `link`, regardez la notion ci-dessus.
3. Dans `style.css`, écrivez des règles pour :
   - `body` : une police, une couleur de texte, une couleur de fond, et pas de marge autour de la page ;
   - `header` : un fond de couleur, un texte centré, de l'espace intérieur ;
   - `h2` : une couleur différente du texte normal ;
   - `footer` : un style discret (texte plus petit, centré).
4. Actualisez le navigateur après chaque règle, pour voir l'effet de chacune.

## Avant d'actualiser : prédisez
Pour chaque règle, dites à voix haute ce que vous allez voir. Puis comparez.

## Cassez-la exprès
Un par un, puis annulez : oubliez un `;` ; écrivez `colour` au lieu de `color` ; supprimez une `}`.
CSS ne dit **rien** en cas d'erreur : la règle est simplement ignorée. Apprenez à repérer ça avec
l'outil de développement de Chrome (`F12`, onglet « Éléments »).

## Mini-défi (sans aide)
Donnez une classe `contact` à la section « Contacts » et faites-la ressortir (fond, bordure, espace intérieur)
sans toucher aux autres sections.

## Vérification (répondez sans regarder)
1. Quelle est la différence entre `padding` et `margin` ?
2. Pourquoi sépare-t-on le CSS du HTML ?
3. Que se passe-t-il si une règle CSS contient une faute de frappe dans le nom de la propriété ?

Montrez-moi `style.css` quand c'est fini.
