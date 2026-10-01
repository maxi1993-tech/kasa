# Kasa

Kasa, une entreprise de location d’appartements entre particuliers.
Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

Application React de Kasa, refonte du site avec ses quatre pages, réalisée pour le projet 7 d’OpenClassrooms.

Site en ligne :  https://maxi1993-tech.github.io/kasa/

## Fonctionnalités

* Page d'Accueil, affiche une bannière et les cartes logements
* Page À propos, affiche une bannière et ses 4 collapses
* Page Logement, affiche la fiche d'un logement : carrousel, titre, tags, note, hôte, description et équipements
* Page 404, s'affiche pour une adresse inconnue ou un id inconnu
* Collapses fermés par défaut, au clic affichent leur contenu et au second clic se referment
* Carrousel d'images en boucle, avec la numérotation (ex. 1/4) ; flèches et numérotation cachées s'il n'y a qu'une seule image


## Technologies

- React 19 : bibliothèque JavaScript pour construire l'interface en composants
- React Router 8 : affiche la page qui correspond à l'adresse (routes, liens, redirection)
- Vite 8 : serveur de développement (`npm run dev`) et construction du site pour la mise en ligne (`npm run build`)
- Sass : préprocesseur CSS (variables, mixins, fonctions, fichiers séparés)
- ESLint : vérifie le code JavaScript et signale les erreurs et les mauvaises pratiques

## Installation

```bash
git clone https://github.com/maxi1993-tech/kasa.git
cd kasa
npm install
npm run dev
```

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | lance le site en local |
| `npm run build` | construit le dossier dist |
| `npm run lint` | lance ESLint |

## Structure

```text
public/data/properties.json   données des 20 logements, chargées par fetch
src/
├── assets/       images, logos et icônes (SVG, WebP)
├── components/   composants réutilisables : Layout, Header, Footer, Banner, CardList, Card, Collapse, Slideshow
├── hooks/        hook personnalisé useFetchHousings (chargement des logements)
├── pages/        une page par route : Home, About, Housing, NotFound
├── routes/       AppRouter, toutes les routes dans un seul fichier
└── sass/         styles en miroir de React : abstracts (variables, mixin, fonction fluid), base (reset, typographie, utilitaires), components, pages
```

## Publication

Le site est publié sur GitHub Pages par un workflow GitHub Actions (`.github/workflows/deploy.yml`), à chaque push sur `main`.

- `base: '/kasa/'` dans `vite.config.js` : le site est servi dans le sous-dossier `/kasa/`.
- `fetch` avec `import.meta.env.BASE_URL` : le chemin des données suit ce sous-dossier.
- `HashRouter` : GitHub Pages ne sert que des fichiers existants. Sans `#`, une adresse comme `/kasa/logement/abc` renvoie la 404 de GitHub. Avec `#`, la suite de l'adresse n'est pas envoyée au serveur : il renvoie toujours `index.html`, puis React Router lit ce qui suit le `#`.
