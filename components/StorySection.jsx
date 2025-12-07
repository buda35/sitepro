import Image from 'next/image';
import Link from 'next/link';

export default function StorySection() {
  return (
    <section className="py-20 relative min-h-[600px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src="/uploads/code-bg.jpg" alt="Arrière-plan code informatique" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src={`/uploads/story.jpg?v=${Date.now()}`}
              alt="Mon histoire"
              fill
              className="object-contain rounded-lg shadow-xl"
              priority
            />
          </div>
          <div className="space-y-6 bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-custom-grey mb-4 bg-white/30 backdrop-blur-md rounded px-2 py-1 inline-block">
              Mon histoire
            </h2>
            <p className="text-lg text-[#FDB912] font-medium">
              Avec plus de 14 années d'expérience dans le domaine de l'informatique cloud, en passant par l'analyse SOC – Antony explore aujourd'hui un nouveau terrain de jeu : la création de sites web.
            </p>
            <Link href="/histoire">
              <button className="bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 