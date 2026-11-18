# Leçon 01 — HTML : la structure d'une page

**Durée : 30 à 45 minutes.** Aucun style aujourd'hui, uniquement la structure.

## L'idée à retenir
HTML ne dit pas *à quoi ressemble* la page, il dit *ce qu'elle contient* : ceci est un titre,
ceci un paragraphe, ceci une liste. L'apparence viendra avec le CSS (leçon 02).
Pensez à un document Word avec uniquement les « styles » (Titre 1, Paragraphe, Liste), sans la mise en forme.

## Les notions
- **Balise** : un mot entre `< >`. La plupart vont par paires, une ouvrante et une fermante :
  `<p>texte</p>`. Le tout s'appelle un **élément**.
- **Squelette obligatoire** d'une page : `<!DOCTYPE html>`, puis `<html>` qui contient
  `<head>` (informations sur la page, invisibles) et `<body>` (ce qu'on voit).
- **Textes** : `<h1>` (titre principal, un seul par page) à `<h6>`, `<p>` (paragraphe).
- **Listes** : `<ul>` (puces) ou `<ol>` (numérotée), avec des `<li>` à l'intérieur.
- **Lien** : `<a href="adresse">texte cliquable</a>`. **Image** : `<img src="fichier" alt="description">`.
- **Zones de la page** : `<header>`, `<main>`, `<section>`, `<footer>`. Elles donnent du sens à la structure.
- **Imbrication** : un élément peut en contenir d'autres, mais il faut fermer dans le bon ordre.

## À faire (vous tapez, je ne donne pas la solution)
1. Dans VS Code, ouvrez le dossier du projet et créez un fichier `index.html`.
2. Écrivez le squelette de la page. Indice : tapez `!` puis Tab dans VS Code est un raccourci,
   mais essayez d'abord de l'écrire vous-même une fois pour comprendre chaque ligne.
3. Dans le `<body>`, construisez la page de BFK-TECH avec :
   - un `<header>` contenant le nom de l'entreprise (`<h1>`) ;
   - un `<main>` avec deux `<section>` : « Qui sommes-nous » (un paragraphe) et « Nos services » (une liste) ;
   - un `<footer>` avec un contact (un lien `mailto:` suffit).
4. Ouvrez `index.html` dans votre navigateur.

## Avant d'ouvrir la page : prédisez
Que va-t-on voir ? Les titres seront-ils grands ? Y aura-t-il des couleurs ? Notez votre réponse, puis vérifiez.

## Cassez-la exprès
Un par un, essayez puis annulez : supprimez un `</p>` ; mettez deux `<h1>` ; oubliez les guillemets d'un `href`.
Que se passe-t-il ? HTML pardonne beaucoup d'erreurs sans rien dire, d'où l'importance de bien relire.

## Mini-défi
Ajoutez une troisième section « Contact » avec une liste ordonnée (`<ol>`) de trois étapes pour vous joindre.

## Vérification (répondez sans regarder)
1. Quelle est la différence entre `<head>` et `<body>` ?
2. Pourquoi ne met-on qu'un seul `<h1>` par page ?
3. À quoi sert l'attribut `alt` d'une image ?

Quand c'est fait, montrez-moi votre `index.html` : je le relis avec vous.
