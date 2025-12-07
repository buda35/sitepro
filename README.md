# SitePro - Site Vitrine Moderne

Un site vitrine moderne et responsive pour proposer des services de création de sites web, inspiré par le style de Hellfest.fr.

## 🚀 Installation

1. Clonez le repository
2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env.local` à la racine du projet et ajoutez :
```
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

**Note :** Le Service ID EmailJS est déjà configuré : `service_rc7871q`

## 🛠️ Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## 📦 Production

Pour construire le site pour la production :

```bash
npm run build
```

Pour démarrer le serveur de production :

```bash
npm start
```

## 🎨 Fonctionnalités

- Design moderne et responsive
- Slider héro avec transitions fluides
- Section histoire avec image et texte
- Section témoignages avec notation
- Navigation sticky avec menu hamburger
- Footer avec informations de contact et réseaux sociaux
- Formulaire de contact avec envoi d'email
- Animations et transitions CSS
- Optimisation des images avec Next.js
- Support complet mobile

## 🛠️ Technologies utilisées

- Next.js 13.4.12
- React 18.2.0
- Tailwind CSS
- Lucide React pour les icônes
- EmailJS pour le formulaire de contact

## 📝 Notes

- Assurez-vous d'avoir les images nécessaires dans le dossier `public/uploads/`
- Le formulaire de contact utilise EmailJS. Configurez vos clés dans `.env.local`
- Les couleurs et styles peuvent être personnalisés dans `tailwind.config.js` 