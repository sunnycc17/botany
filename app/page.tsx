import Image from "next/image";
import herbs from "@/data/herbs.json";
import HerbGrid from "@/components/HerbGrid";

export default function Home() {
  return (
    <div className="relative">
      <main className="">
        <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#050f0e] via-[#0a1f1c] to-black/20">
          {/* low mist */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,180,150,0.14),transparent_65%)]" />

          <main
            className="
              relative z-10 mx-auto max-w-7xl
              px-4 sm:px-6 md:px-8
              pt-28 sm:pt-32 md:pt-40
              pb-20 sm:pb-24
              flex flex-col md:flex-row
              items-center md:items-start
              gap-16 md:gap-20
            "
          >
            <div className="space-y-6 sm:space-y-8 text-start md:text-left">
              <h1 className="font-cinzel leading-tight">
                <span className="block text-teal-200/70 text-3xl sm:text-4xl md:text-5xl">
                  The
                </span>
                <span className="block text-[#c8efe3] text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_0_25px_rgba(120,220,190,0.45)]">
                  Verdant Grimoire
                </span>
              </h1>

              <p className="font-cormorant text-teal-100/80 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto md:mx-0">
                A tome of ancient herbs and whispered incantations, binding
                knowledge, nature, and magic into a living grimoire that grows
                with every secret you unveil.
              </p>

              <p className="font-cormorant text-teal-200/60 italic text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                Let the emerald tendrils of wisdom entwine you, and let every
                leaf illuminate forgotten paths.
              </p>
            </div>

            <div className="shrink-0 justify-center px-3 text-center">
              <Image
                src="/angelica.webp"
                alt="Angelica"
                width={300}
                height={300}
                priority
                className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              />
              <p className="mt-3 left-15 relative font-cormorant text-gray-400 italic text-sm sm:text-base md:text-lg skew-x-6">
                Angelica
              </p>
            </div>
          </main>

          <section id="origins">
            <div className="max-w-7xl py-40 px-4 sm:px-15 lg:px-38 text-start items-start space-y-8">
              <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-teal-200/80 drop-shadow-[0_0_15px_rgba(120,220,190,0.4)]">
                Origins
              </h2>

              <p className="font-cormorant text-teal-100/80 text-lg sm:text-xl md:text-2xl leading-relaxed">
                Within the depths of an ancient forest, long before names were
                written in any tongue, the Verdant Grimoire was born. Its pages,
                lined with verdant inks and enchanted herbs, carry the whispers
                of druidic wisdom and forgotten spells.
              </p>

              <p className="font-cormorant text-teal-200/60 italic text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                Each leaf pressed and each incantation inscribed binds nature
                and magic together, waiting for those who dare to read and
                unlock its secrets.
              </p>
            </div>
          </section>

          <HerbGrid herbs={herbs} />

          <section className="relative w-full py-32 overflow-hidden ">
            {/* Arcane symbols along the edges */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-teal-800/20 text-4xl md:text-6xl select-none"
                  style={{
                    top: `${i * 15}%`,
                    left: `${i * 12}%`,
                    transform: `rotate(${i * 25}deg)`,
                  }}
                >
                  ✦
                </div>
              ))}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i + 10}
                  className="absolute text-teal-900/10 text-5xl md:text-7xl select-none"
                  style={{
                    bottom: `${i * 12}%`,
                    right: `${i * 10}%`,
                    transform: `rotate(${i * -20}deg)`,
                  }}
                >
                  ❦
                </div>
              ))}
            </div>

            {/* Centered quote / epilogue */}
            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-6">
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-teal-200/80 drop-shadow-[0_0_20px_rgba(120,220,190,0.35)]">
                The Grimoire Concludes
              </h2>
              <p className="font-cormorant italic text-teal-100/70 text-lg sm:text-xl leading-relaxed">
                The pages of this tome close for now, but the wisdom of leaves
                and whispers endures. Guard it well, and let every herb, every
                incantation, and every secret continue to guide those who seek
                the green paths.
              </p>
              <p className="font-cormorant text-teal-200/60 text-sm sm:text-base">
                — The Verdant Grimoire
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
