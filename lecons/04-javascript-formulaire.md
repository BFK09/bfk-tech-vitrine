# Leçon 04 — Premier JavaScript : un formulaire qui prépare un message WhatsApp

**Durée : 4 petites étapes.** HTML = la structure, CSS = l'apparence, **JavaScript = le comportement** :
ce qui se passe quand l'utilisateur agit (clic, saisie, envoi).

## L'idée à retenir
Image : la page HTML est une maison. JavaScript est l'électricien : il ne construit pas les murs,
il installe des **interrupteurs** (« quand on appuie ici, alors fais ceci »).

Le schéma de presque tout code JavaScript dans une page :
1. **Trouver** un élément de la page (`document.querySelector`)
2. **Écouter** un événement sur cet élément (`addEventListener("submit", …)`)
3. **Réagir** : lire, calculer, modifier la page ou ouvrir une adresse

## Étapes
1. Le formulaire en HTML seul, et le fichier `js/contact.js` relié avec `defer`. Prédire ce que fait « Envoyer » **sans** JavaScript.
2. Intercepter l'envoi : `addEventListener("submit", …)` et `event.preventDefault()`.
3. Lire les champs (`.value`) et composer le message avec un gabarit `` `Bonjour, je suis ${nom}` ``.
4. Encoder le message (`encodeURIComponent`) et ouvrir WhatsApp (`window.open`).

## Notions
- `<form>`, `<label for>`, `<input>`, `<select>`, `<textarea>`, `required`
- `<script src="…" defer>` : le script attend que la page soit construite
- `const` : une boîte dont on ne change pas le contenu
- La console du navigateur (F12) : l'endroit où JavaScript affiche ses messages et ses erreurs

## Casser exprès (prévu)
- Retirer `defer` → lire l'erreur dans la console
- Faire une faute dans le nom d'une classe → `null` et l'erreur « Cannot read properties of null »

## Mini-défi (sans aide)
Ajouter un champ « Ville » au formulaire et le faire apparaître dans le message WhatsApp.

## Vérification de fin de leçon
- Que fait `event.preventDefault()`, et que se passe-t-il sans lui ?
- Pourquoi `encodeURIComponent` est-il indispensable ici ?
- Pourquoi mettre `defer` sur la balise `<script>` ?

---

## Où on en est (leçon terminée le 19/11/2026)
- [x] Étape 1 : formulaire HTML, `js/contact.js` relié avec `defer`
- [x] Étape 2 : `submit` intercepté avec `event.preventDefault()`
- [x] Étape 3 : champs lus avec `.value`, message composé avec un gabarit `` `…${nom}…` ``, ligne « Précisions » ajoutée seulement si remplie (`let` + `if`)
- [x] Étape 4 : `encodeURIComponent` + `window.open` vers `wa.me`
- [x] Mini-défi « Ville » réussi (champ HTML + `${ville}` dans le message)
- [ ] Casser exprès `let` → `const` et vérification de fin de leçon : reportés en rappel à la prochaine séance

Le formulaire ouvre WhatsApp avec le message prêt ; c'est le visiteur qui appuie sur « Envoyer ».

## Fiche — ce qu'il faut retenir
| Notion | En une phrase |
|---|---|
| Formulaire sans JS | Envoie les champs dans l'adresse (`?nom=…&activite=…`) et recharge la page |
| `required` | Le navigateur bloque l'envoi si le champ est vide, **avant** l'événement `submit` |
| `defer` | Le script s'exécute une fois la page construite |
| `document.querySelector(".classe")` / `("#id")` | Trouver un élément, avec les sélecteurs du CSS |
| `addEventListener("submit", function (event) { … })` | Exécuter du code quand le formulaire est envoyé |
| `event.preventDefault()` | Annuler le comportement normal (envoi + rechargement) |
| `.value` | Ce qui est écrit dans le champ |
| `` `Bonjour ${nom}` `` | Gabarit : insère la valeur d'une variable dans un texte |
| `const` / `let` | Boîte scellée / boîte qu'on peut remplir à nouveau. `const` par défaut |
| `if (a !== "") { … }` | Si… alors (comme `SI()` dans Excel) |
| `encodeURIComponent(texte)` | Code un texte pour une adresse : sans elle, `&` coupe le message, `#` supprime la suite, `+` devient une espace |
| `window.open(url, "_blank")` | Ouvre une adresse dans un nouvel onglet |
| Console (F12) | Lire la source d'une erreur : `chrome-extension://` = pas ton code. Ctrl + F5 = recharger sans cache |
