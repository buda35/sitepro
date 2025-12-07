import Image from 'next/image';

export default function Histoire() {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src="/uploads/code-bg.jpg" alt="Arrière-plan code informatique" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center bg-white/10 backdrop-blur-md rounded-lg py-4 drop-shadow-lg">
            Mon histoire
          </h1>

          {/* Texte descriptif */}
          <div className="bg-white/70 backdrop-blur-md rounded-lg shadow p-8 mb-8">
            <div className="text-center text-custom-grey mb-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Comprendre les étapes de votre projet web, contribue grandement à garantir que votre site Web devienne une véritable extension de votre entreprise.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-4">
                De l'entretien préalable aux conceptions et modifications personnalisées, chaque étape devient une opportunité pour vous de participer activement.
              </p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md rounded-lg shadow p-8">
            <Image
              src="/uploads/islande.jpg"
              alt="Réalisation"
              width={800}
              height={400}
              className="rounded-lg shadow-xl mb-8 object-cover w-full h-64"
            />
            
            <article className="prose prose-lg max-w-none">
              <p>Ma passion pour l'informatique s'est imposée naturellement. Curieux et touche-à-tout, j'ai commencé à concevoir des sites internet en parallèle de mes activités professionnelles. J'aime créer des sites pour le plaisir, tester de nouvelles idées, apprendre de nouvelles technologies et surtout mener des projets concrets de A à Z.</p>
              <p>Mon parcours professionnel m'a permis d'acquérir une maîtrise complète des infrastructures IT. Chez Claranet, j'ai accompagné des clients prestigieux comme Chanel dans leur transformation digitale, en mettant en œuvre des solutions d'automatisation, de sécurité et de supervision avancées. Aujourd'hui, au sein de Synetis, je travaille dans un centre d'opérations de sécurité (SOC), où je pilote la mise en place d'outils de détection, la gestion des incidents et la veille sur les menaces émergentes.</p>
              <p>C'est dans la conception web que ma créativité trouve une nouvelle liberté. De la configuration des serveurs à la mise en ligne du contenu, j'allie savoir-faire technique et sens du détail. Mon expérience en cybersécurité et en architecture réseau apporte une valeur ajoutée rare : mes sites ne sont pas seulement bien construits, ils sont aussi pensés pour être sûrs.</p>
              <p>Aujourd'hui, je souhaite faire de cette passion un véritable axe d'évolution : collaborer avec des associations, des PME ou des particuliers pour développer leur présence en ligne, avec la qualité professionnelle qui caractérise mon parcours.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
} 