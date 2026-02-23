import Image from "next/image";
import herbs from "@/data/herbs.json";
import HerbGrid from "@/components/HerbGrid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <main className="">
        <div className="relative min-h-screen mx-auto px-6 md:px-11 sm:px-8 lg:px-14 xl:px-0 overflow-hidden bg-linear-to-b from-[#050f0e] via-[#0a1f1c] to-black/20">
          {/* low mist */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,180,150,0.14),transparent_65%)]" />

          <div
            className="
              relative z-10 mx-auto max-w-7xl
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
          </div>

          <section id="origins">
            <div className="max-w-7xl py-40 mx-auto text-start items-start space-y-8">
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

          <section className="relative mx-auto max-w-7xl py-32 overflow-hidden ">
            {/* Arcane symbols along the edges */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                "top-1 left-0",
                "top-1 right-0",
                "bottom-1 left-0",
                "bottom-1 right-0",
              ].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} text-5xl text-emerald-300/20 blur-[1px]`}
                >
                  ❧
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
              <Link
                href="https://my-portfolio-six-dun-65.vercel.app/"
                className="font-cormorant text-teal-200/60 text-sm sm:text-base hover:text-teal-300"
              >
                — The Verdant Grimoire
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
