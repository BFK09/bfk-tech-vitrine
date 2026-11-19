# Site vitrine BFK-TECH

Site de présentation de BFK-TECH : logiciels de gestion sous Excel (GESTOPHARM, GESTOMAQUIS, sur mesure),
création de sites web, contact (dont WhatsApp). Le site n'annonce que ce que BFK-TECH sait livrer aujourd'hui. HTML et CSS, et un premier JavaScript pour le formulaire de contact.

**En ligne :** https://bfk09.github.io/bfk-tech-vitrine/ · **Code :** https://github.com/BFK09/bfk-tech-vitrine

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
├── contact.html        WhatsApp (message pré-rempli), téléphones (liens tel:) et e-mail
├── css/style.css       Une seule feuille de style, organisée en 8 parties
├── fonts/              Police Inter hébergée sur le site + sa licence (OFL)
├── js/contact.js       Formulaire de contact → message WhatsApp pré-rempli (leçon 04)
├── sitemap.xml         Liste des pages, à déclarer dans Google Search Console
├── img/favicon.svg     Icône de l'onglet
├── img/logiciels/      Captures des classeurs (données fictives, voir Docs/scripts-demo)
├── img/apercu-partage.png         Image affichée quand on partage le lien (1200 x 630)
├── img/source/apercu-partage.html Source de cette image
└── lecons/             Leçons 01 à 04 et ancien CSS (archive d'apprentissage)
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
- Menu repliable « ☰ » abandonné : avec 4 liens, le menu tient déjà sur téléphone

## Image d'aperçu
Pour la régénérer après avoir modifié `img/source/apercu-partage.html`, lancer depuis ce dossier (Git Bash) :

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 --screenshot="$(cygpath -w "$PWD/img/apercu-partage.png")" "file:///$(cygpath -m "$PWD/img/source/apercu-partage.html")"
```

WhatsApp et Facebook gardent l'ancien aperçu en mémoire quelque temps. Pour forcer Facebook à le relire, utiliser l'outil « Débogueur de partage » de Meta.

## Mettre à jour le site en ligne
Modifier les fichiers, puis dans ce dossier :

```bash
git add -A
git commit -m "Message clair en français"
git push
```

GitHub Pages republie le site en une ou deux minutes.

## Limite connue
L'en-tête et le pied de page sont copiés dans les 4 pages : un changement de menu doit être fait 4 fois.
C'est la limite d'un site 100 % HTML ; on la résoudra plus tard (JavaScript ou générateur de site).
