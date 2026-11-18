# Site vitrine BFK-TECH

Site de présentation de BFK-TECH : logiciels de gestion sous Excel (GESTOPHARM, GESTOMAQUIS, sur mesure),
création de sites web, contact. Le site n'annonce que ce que BFK-TECH sait livrer aujourd'hui. HTML et CSS, sans JavaScript pour l'instant.

## Lancer le site
Ouvrir `index.html` dans le navigateur, ou depuis la racine de l'espace BFK-TECH :

```bash
python -m http.server 8080 --directory Web/Sites/bfk-tech-vitrine
```

puis aller sur http://localhost:8080.

## Structure

```
bfk-tech-vitrine/
├── index.html          Accueil : présentation, 2 métiers, pourquoi nous, appel à l'action
├── logiciels.html      GESTOPHARM, GESTOMAQUIS, sur mesure (contenu tiré des vrais classeurs)
├── sites-web.html      Site vitrine, pour qui, notre méthode
├── contact.html        Téléphones (liens tel:) et e-mail
├── css/style.css       Une seule feuille de style, organisée en 8 parties
├── img/favicon.svg     Icône de l'onglet
└── lecons/             Leçons 01 à 03 et ancien CSS (archive d'apprentissage)
```

## Choix techniques
- **Mobile d'abord** : les règles de base visent le téléphone, `@media (min-width: 768px)` ajoute la mise en page ordinateur.
- **Variables CSS** (`:root`) : couleurs et tailles définies une fois, réutilisées partout.
- **Classes à noms explicites** (`.card`, `.card__tag`, `.btn--primary`) : convention BEM, le style ne dépend plus de la structure HTML.
- **Grid** pour les cartes (`repeat(auto-fit, minmax(260px, 1fr))`) : le nombre de colonnes s'adapte seul ; **Flexbox** pour les alignements sur une ligne (en-tête, boutons).
- **`aria-current="page"`** sur le lien de la page en cours : utile aux lecteurs d'écran et sert aussi au style.

## État d'avancement
- [x] Leçons 01 à 03 : HTML, CSS de base, Flexbox
- [x] Refonte complète : 4 pages au contenu propre, design « pro et sobre », responsive
- [x] Fiches GESTOPHARM et GESTOMAQUIS réécrites d'après les classeurs V1.1
- [x] Offre « Application web » retirée tant qu'elle n'est pas maîtrisée (à remettre avec une première réalisation)
- [ ] JavaScript : menu mobile repliable, formulaire de contact
- [ ] Mise en ligne : GitHub + GitHub Pages

## Limite connue
L'en-tête et le pied de page sont copiés dans les 4 pages : un changement de menu doit être fait 4 fois.
C'est la limite d'un site 100 % HTML ; on la résoudra plus tard (JavaScript ou générateur de site).
