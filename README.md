# AfriConnect Summit 2026

## Auteur
Oumar Diaw - Licence 1 Cybersécurité

## Description
Site vitrine pour le sommet tech panafricain AfriConnect Summit 2026, un événement annuel qui réunit développeurs, entrepreneurs et investisseurs du continent.

Ce projet a été réalisé dans le cadre de l'examen de Technologie Web (HTML5 - CSS3 - JavaScript Vanilla - Git & GitHub).

## Technologies utilisées
- HTML5 sémantique : structure sémantique, accessibilité (alt, aria-label), formulaires complets
- CSS3 : Flexbox, CSS Grid, variables CSS, animations, transitions, responsive design (media queries), Google Fonts
- JavaScript Vanilla : manipulation du DOM, gestion d'événements, IntersectionObserver, localStorage, validation de formulaire
- Git & GitHub : versioning avec commits réguliers, déploiement via GitHub Pages
- Google Fonts : Inter + Space Grotesk
- Bootstrap Icons : icônes vectorielles

## Fonctionnalités JavaScript implémentées
- Dark/Light Mode avec sauvegarde dans localStorage (persistant entre les pages)
- Navbar dynamique : changement de fond et d'ombre après 80px de défilement
- Menu hamburger fonctionnel sur mobile (ouverture/fermeture au clic)
- Compte à rebours en temps réel jusqu'à la date de la conférence (29 octobre 2026)
- Compteurs animés (4 statistiques) qui s'incrémentent au scroll avec IntersectionObserver
- Animations fade-in au scroll avec IntersectionObserver
- Onglets du programme : affichage des 3 jours sans rechargement
- Filtrage dynamique des intervenants par thématique (Tous · IA & Tech · Business · Design · Data)
- Validation de formulaire complète : nom complet, email (regex), téléphone (8 chiffres minimum), type de participation, pays africain, message (20 caractères minimum)
- Message de succès stylisé après soumission valide
- Bouton retour en haut apparaît après 300px de défilement (scroll smooth)
- Année dynamique injectée dans le footer via new Date().getFullYear()

## Structure du projet
Oumar-Diaw-AfriConnectSummit/
    index.html              Page d'accueil
    programme.html          Programme des sessions (3 jours)
    intervenants.html       Intervenants avec filtrage
    contact.html            Inscription & Contact
    css/
        style.css           Styles CSS (variables, dark mode, responsive)
    js/
        main.js             JavaScript (DOM, localStorage, IntersectionObserver)
    images/
        hero-bg.jpg         Fond de la section hero
        photo1.jpg          Photos des intervenants
        photo2.jpg          Photos des intervenants
        photo3.jpg          Photos des intervenants
        photo4.jpg          Photos des intervenants
        photo5.jpg          Photos des intervenants
        photo6.jpg          Photos des intervenants
        photo7.jpg          Photos des intervenants
        photo8.jpg          Photos des intervenants
        photo9.jpg          Photos des intervenants
        logo1.jpg           Logos des sponsors
        logo2.jpg           Logos des sponsors
        logo3.png           Logos des sponsors
        logo4.jpg           Logos des sponsors
        logo5.jpg           Logos des sponsors
        logo6.png           Logos des sponsors
        logo7.jpg           Logos des sponsors
        logo8.jpg           Logos des sponsors
        logo9.jpg           Logos des sponsors
    README.md               Documentation du projet

## Pages du site

### index.html — Accueil
- Navbar fixe avec Dark/Light mode et menu hamburger
- Hero plein écran avec titre accrocheur, CTA et compte à rebours
- 4 statistiques clés avec compteurs animés au scroll
- 3 arguments "Pourquoi participer" avec animations fade-in
- 4 intervenants vedettes en CSS Grid
- 3 niveaux de sponsors (Or, Argent, Bronze) en Flexbox
- Footer 3 colonnes avec réseaux sociaux et copyright dynamique

### programme.html — Programme
- Hero interne avec fil d'Ariane
- 3 onglets (Jour 1, Jour 2, Jour 3) gérés en JavaScript
- Chaque jour : tableau avec 6 sessions (Heure, Session, Intervenant, Salle)
- 4 thématiques en CSS Grid 2x2 avec animations au scroll

### intervenants.html — Intervenants
- Hero interne avec fil d'Ariane
- 5 boutons de filtrage (Tous · IA & Tech · Business · Design · Data)
- 9 intervenants en CSS Grid responsive (3 colonnes desktop · 2 tablette · 1 mobile)
- Effet hover : ombre + translation

### contact.html — Inscription & Contact
- Hero interne avec fil d'Ariane
- Formulaire 2 colonnes (formulaire à gauche, infos à droite)
- 6 champs avec validation JavaScript
- FAQ en accordéon CSS pur (5 questions)
- Google Maps iframe (Dakar Arena)

## Lien GitHub Pages
https://oumar-diaw.github.io/Oumar-Diaw-AfriConnectSummit/

## Installation et exécution
1. Cloner le dépôt
   git clone https://github.com/Oumar-Diaw/Oumar-Diaw-AfriConnectSummit.git

2. Ouvrir le projet
   Ouvrir index.html dans un navigateur
   Ou utiliser Live Server (VS Code)

3. Tester le site
   Naviguer entre les 4 pages
   Activer/désactiver le Dark Mode
   Tester le responsive (DevTools F12)
   Remplir et soumettre le formulaire

## Validation et tests
- Validation HTML : https://validator.w3.org/
- Validation CSS : https://jigsaw.w3.org/css-validator/
- Responsive : DevTools (F12) - Mode mobile

## Ressources consultées
- MDN Web Docs : https://developer.mozilla.org/fr/
- CSS-Tricks (Flexbox & Grid) : https://css-tricks.com/
- Google Fonts : https://fonts.google.com/
- Bootstrap Icons : https://icons.getbootstrap.com/
- Unsplash - images libres : https://unsplash.com/
- Pexels - images libres : https://www.pexels.com/fr-fr/
- Coolors - palettes : https://coolors.co/

## Remerciements
Merci à M. Robert DIASSÉ pour l'encadrement et les conseils tout au long de ce projet.

