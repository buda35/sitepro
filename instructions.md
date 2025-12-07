 Objectif
Créer un site vitrine moderne, responsive et impactant pour proposer un service de création de sites web, avec une ambiance graphique inspirée de Hellfest.fr (visuels puissants, effets CSS, typographie forte).

📦 Installation des dépendances
bash
Copier
Modifier
npm install next@13.4.12 \
  react@18.2.0 \
  react-dom@18.2.0 \
  tailwindcss@^3.2.0 \
  autoprefixer@^10.0.0 \
  postcss@^8.4.0 \
  lucide-react@^0.244.0
🧱 Structure du projet
php
Copier
Modifier
/
├── app/                 # Pages Next.js (avec routing automatique)
├── components/          # Composants UI réutilisables
├── public/
│   └── uploads/         # Répertoire d'images centralisé
├── styles/              # Fichiers Tailwind et styles globaux
├── utils/               # Fonctions utilitaires
├── admin/               # Backoffice minimal pour gestion contenu
└── .env.local           # Variables d'environnement
⚙️ Configuration de base
next.config.js
js
Copier
Modifier
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
    ],
  },
};
tailwind.config.js
js
Copier
Modifier
module.exports = {
  theme: {
    extend: {
      colors: {
        'accent-red': '#CD291E',
        'accent-yellow': '#FDB912',
        'light-white': '#FFF9EE',
        'custom-grey': '#231F20',
        'dark-green': '#316131',
      },
    },
  },
  plugins: [],
};
postcss.config.js
js
Copier
Modifier
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
🖼️ Gestion des actifs
Placez toutes les images du site dans :
📁 public/uploads/

Hero images : hero1.jpg, hero2.jpg, hero3.jpg

Story section : story.jpg

🛠️ Backoffice minimal
Fonctionnalités :
Interface légère (React + Tailwind)

Modification des textes, images

Aperçu en temps réel

Upload dans public/uploads/ via un simple composant <input type="file">

📌 Pour éviter Supabase, ce backoffice peut utiliser fs côté serveur + nodemailer pour gérer un formulaire de contact.

📩 Formulaire de contact avec envoi d'email
📬 Objectif :
Permettre aux visiteurs de vous contacter via un formulaire, envoyé à budaberg35@gmail.com

Exemple d’intégration avec Nodemailer :
Installez les dépendances :

bash
Copier
Modifier
npm install nodemailer
Créez un handler dans /app/api/contact/route.js (Next.js 13 API route).

js
Copier
Modifier
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'budaberg35@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD, // à générer dans Gmail
    },
  });

  await transporter.sendMail({
    from: email,
    to: 'budaberg35@gmail.com',
    subject: `Contact depuis le site - ${name}`,
    text: message,
  });

  return new Response('Message envoyé', { status: 200 });
}
Ajoutez le formulaire dans un composant :

jsx
Copier
Modifier
<form onSubmit={handleSubmit}>
  <input name="name" placeholder="Nom" required />
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required />
  <button type="submit">Envoyer</button>
</form>
🧩 Composants clés à développer
✅ HeroSlider
Slider plein écran, dégradé overlay

Slides auto toutes les 20 secondes

Boutons CTA

Utilisation du composant <Image /> de Next.js

✅ StorySection
Présentation de votre histoire

Image + texte

Bouton interactif avec ombre

✅ ReviewSection
Étoiles de notation

Carte témoignages avec bordures stylisées

Responsive grid

✅ MenuPage
Grille de vos prestations

Tags, prix, CTA animés

Hover visuel sur chaque service

✅ Navigation
Menu sticky

Passage de transparent à fond foncé au scroll

Hamburger responsive

Scroll fluide entre sections

✅ Footer
Infos de contact + réseaux sociaux

Icônes via lucide-react

Style sombre + hover

✅ Logo
Conception typographique avec :

Fond jaune #F4D03F

Police Google : Lilita One

Espacement de lettres 0.2em

Effet hover scale (1.05)

Texte superposé avec profondeur visuelle

🎨 Style et animation à la Hellfest
Typographie large et contrastée

Dégradés et superpositions sombres

Hover animés (boutons, images)

Transitions CSS fluides :

css
Copier
Modifier
transition-duration: 300ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
📱 Responsive & points de rupture
sm: 640px

md: 768px

lg: 1024px

xl: 1280px

Approche mobile-first systématique.

✅ Bonnes pratiques
Composants courts, réutilisables

Respect du principe DRY

Utilisation à fond des classes Tailwind

Composants Image de Next.js

Chargement prioritaire du Hero