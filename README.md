# Site vitrine BFK-TECH

Site de présentation de BFK-TECH : logiciels de gestion sous Excel (GESTOPHARM, GESTOMAQUIS, sur mesure),
création de sites web, contact (dont WhatsApp). Le site n'annonce que ce que BFK-TECH sait livrer aujourd'hui. HTML et CSS, et un premier JavaScript pour le formulaire de contact.

**En ligne :** https://bfk09.github.io/bfk-tech-vitrine/ · **Code :** https://github.com/BFK09/bfk-tech-vitrine

## Lancer le site
Le site est **assemblé par Eleventy** (leçon 06) : on écrit les sources dans `src/`, Eleventy fabrique
le site fini dans `_site/`. Première fois seulement, dans ce dossier :

```bash
npm install
```

Puis, à chaque séance :

```bash
npm start
```

et aller sur http://localhost:8080 (la page se recharge seule à chaque enregistrement).
`npm run build` fabrique `_site/` sans lancer de serveur.

## Structure

```
bfk-tech-vitrine/
├── src/                      LES SOURCES (c'est ici qu'on travaille)
│   ├── _includes/base.njk    Gabarit commun : <head>, en-tête, menu, pied de page (écrit UNE fois)
│   ├── _data/site.json       Nom, adresse du site, e-mail, téléphones, année
│   ├── _data/menu.json       Les liens du menu
│   ├── index.html            Accueil (seulement le contenu de <main> + son « en-tête » --- … ---)
│   ├── logiciels.html        GESTOPHARM, GESTOMAQUIS, sur mesure
│   ├── sites-web.html        Site vitrine, pour qui, notre méthode
│   ├── contact.html          WhatsApp, formulaire, téléphones, e-mail
│   ├── css/style.css         Une seule feuille de style, organisée en 8 parties
│   ├── fonts/                Police Inter hébergée sur le site + sa licence (OFL)
│   ├── js/contact.js         Formulaire → message WhatsApp pré-rempli (leçons 04 et 05)
│   ├── img/                  Favicon, image d'aperçu, captures des logiciels
│   └── sitemap.xml           Liste des pages, à déclarer dans Google Search Console
├── _site/                    Site FABRIQUÉ par Eleventy (jamais modifié à la main, pas dans git)
├── eleventy.config.js        Réglages d'Eleventy (dossiers, fichiers copiés tels quels)
├── package.json              Outils du projet (Eleventy) et commandes npm start / npm run build
├── .github/workflows/publier.yml  Publication automatique sur GitHub Pages à chaque git push
├── outils/apercu-partage.html     Source de l'image d'aperçu (non publiée)
└── lecons/                   Fiches des leçons (non publiées)
```

## Choix techniques
- **Mobile d'abord** : les règles de base visent le téléphone, `@media (min-width: 768px)` ajoute la mise en page ordinateur.
- **Variables CSS** (`:root`) : couleurs et tailles définies une fois, réutilisées partout.
- **Classes à noms explicites** (`.card`, `.card__tag`, `.btn--primary`) : convention BEM, le style ne dépend plus de la structure HTML.
- **Grid** pour les cartes (`repeat(auto-fit, minmax(260px, 1fr))`) : le nombre de colonnes s'adapte seul ; **Flexbox** pour les alignements sur une ligne (en-tête, boutons).
- **`aria-current="page"`** sur le lien de la page en cours : utile aux lecteurs d'écran et sert aussi au style.
- **WhatsApp** : lien `https://wa.me/225…?text=…`, qui ouvre la conversation avec un message déjà écrit (espaces codés `%20`). Aucun JavaScript nécessaire.
- **Sécurité** : HTTPS forcé par GitHub Pages ; `Content-Security-Policy` en `<meta>` dans chaque page (seuls les fichiers du site sont chargés, aucun script écrit dans le HTML n'est exécuté) ; `window.open(…, "noopener")` ; police hébergée sur le site (aucune adresse IP de visiteur envoyée à Google). Conséquence : **ne jamais écrire de `style="…"` ni de `<script>…</script>` dans les pages**, tout passe par `css/style.css` et `js/`.
- **Open Graph** (`<meta property="og:…">`) dans chaque page : titre, description et image de la carte d'aperçu sur WhatsApp et Facebook. L'image doit être en PNG ou JPG (pas en SVG), avec une adresse complète `https://…`.

## État d'avancement
- [x] Leçons 01 à 03 : HTML, CSS de base, Flexbox
- [x] Refonte complète : 4 pages au contenu propre, design « pro et sobre », responsive
- [x] Fiches GESTOPHARM et GESTOMAQUIS réécrites d'après les classeurs V1.1
- [x] Offre « Application web » retirée tant qu'elle n'est pas maîtrisée (à remettre avec une première réalisation)
- [x] Mise en ligne : GitHub + GitHub Pages (18/11/2026)
- [x] Bouton WhatsApp et aperçu de partage (19/11/2026)
- [x] Captures d'écran des logiciels sur la page Logiciels (19/11/2026)
- [x] `sitemap.xml` (pas de `robots.txt` : il n'est lu qu'à la racine du domaine, pas dans un sous-dossier)
- [ ] Déclarer le site et le sitemap dans Google Search Console (compte Google de BFK-TECH)
- [x] JavaScript : formulaire de contact qui prépare un message WhatsApp (leçon 04, 19/11/2026)
- [x] Nom ou ville faits seulement d'espaces refusés : `.trim()` + `reportValidity()` (leçon 05, 20/11/2026)
- [x] En-tête et pied de page écrits une seule fois grâce à Eleventy (leçon 06, 20/11/2026)
- Menu repliable « ☰ » abandonné : avec 4 liens, le menu tient déjà sur téléphone

## Image d'aperçu
Pour la régénérer après avoir modifié `outils/apercu-partage.html`, lancer depuis ce dossier (Git Bash) :

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 --screenshot="$(cygpath -w "$PWD/src/img/apercu-partage.png")" "file:///$(cygpath -m "$PWD/outils/apercu-partage.html")"
```

WhatsApp et Facebook gardent l'ancien aperçu en mémoire quelque temps. Pour forcer Facebook à le relire, utiliser l'outil « Débogueur de partage » de Meta.

## Mettre à jour le site en ligne
Modifier les fichiers dans `src/`, vérifier avec `npm start`, puis dans ce dossier :

```bash
git add -A
git commit -m "Message clair en français"
git push
```

Le `git push` déclenche l'automatisation `.github/workflows/publier.yml` : GitHub installe Eleventy,
assemble le site et le publie en deux ou trois minutes (suivi dans l'onglet **Actions** du dépôt).
Réglage nécessaire une fois : *Settings → Pages → Source : GitHub Actions*.

## Modifier le menu, le pied de page ou le téléphone
Une seule fois, pour les 4 pages : le menu dans `src/_data/menu.json`, les coordonnées dans
`src/_data/site.json`, le reste de l'en-tête et du pied dans `src/_includes/base.njk`.
