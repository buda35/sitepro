import Image from 'next/image';

const realisations = [
  {
    title: 'Braises Installation',
    description: 'Site vitrine pour une entreprise spécialisée dans la pose de cheminées et solutions de chauffage.',
    image: '/uploads/braises.jpg',
    link: 'https://braises-installation.terrenordique.com/',
    category: 'Site Vitrine'
  },
  {
    title: 'Islande Terre Nordique',
    description: 'Blog dédié à la découverte de l\'Islande, ses paysages, sa culture et ses merveilles naturelles.',
    image: '/uploads/islande.jpg',
    link: 'https://islande.terrenordique.com',
    category: 'Blog'
  },
  {
    title: 'Hellfest',
    description: 'Site événementiel pour le plus grand festival de metal en France.',
    image: '/uploads/hellfest.jpg',
    link: 'https://hf.terrenordique.com/',
    category: 'Événementiel'
  },
  {
    title: 'Portfolio Antony Audic',
    description: 'Portfolio personnel.',
    image: '/uploads/portfolio.jpg',
    link: 'https://antonyaudic.terrenordique.com/',
    category: 'Portfolio'
  }
];

export default function Realisations() {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src="/uploads/code-bg.jpg" alt="Arrière-plan code informatique" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-white/10 backdrop-blur-md rounded-lg py-4 drop-shadow-lg">
            Mes Réalisations
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {realisations.map((realisation, index) => (
              <a
                key={index}
                href={realisation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={realisation.image}
                    alt={realisation.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-accent-yellow text-custom-grey text-sm font-bold rounded-full mb-2">
                      {realisation.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {realisation.title}
                    </h3>
                    <p className="text-white/90">
                      {realisation.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 