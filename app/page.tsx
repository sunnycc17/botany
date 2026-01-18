import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/moonlit-forest.webp"
          alt="Moonlit forest background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Optional gradient overlay for contrast */}
      <div className="fixed inset-0 -z-10 bg-black/10" />

      {/* Page content */}
      <main className="">
        <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#071917] via-[#0b2a26] to-black">
          {/* Ambient mist layer */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(90,200,170,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(40,120,100,0.18),transparent_65%)]" />

          <main className="relative z-10 mx-auto max-w-7xl px-8 pt-40 pb-24 grid md:grid-cols-2 gap-16 items-center">
            {/* Text block */}
            <div className="text-left space-y-8">
              <h1 className="font-cinzel text-6xl md:text-7xl font-bold leading-tight">
                <span className="block text-teal-200/90 tracking-wide">
                  The Arcane
                </span>
                <span className="block text-[#bfe9dc] drop-shadow-[0_0_25px_rgba(120,220,190,0.45)]">
                  Botany Codex
                </span>
              </h1>

              <p className="font-cormorant text-2xl text-teal-100/80 max-w-xl">
                A living archive of enchanted flora, whispered folklore, and
                forgotten forest knowledge.
              </p>

              <p className="font-cormorant text-lg text-teal-200/60 max-w-lg">
                Not a guidebook. A threshold.
              </p>

              {/* Ritual CTA */}
              <a
                href="#plants"
                className="group inline-flex items-center gap-6 mt-6"
              >
                <span
                  className="relative flex h-14 w-14 items-center justify-center rounded-full border border-teal-300/40
          bg-linear-to-br from-teal-300/30 to-transparent
          shadow-[0_0_25px_rgba(120,220,190,0.35)]
          group-hover:shadow-[0_0_40px_rgba(120,220,190,0.65)]
          transition-all duration-300"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-200 animate-pulse" />
                </span>

                <span className="font-cinzel tracking-widest text-sm text-teal-200 group-hover:text-teal-100 transition">
                  ENTER THE GROVE
                </span>
              </a>
            </div>

            {/* Visual sigil / atmosphere block */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-full blur-3xl bg-teal-400/10" />

              <div
                className="relative mx-auto h-96 w-96 rounded-full
        border border-teal-300/20
        bg-[radial-gradient(circle_at_center,rgba(120,220,190,0.25),transparent_65%)]
        shadow-[inset_0_0_60px_rgba(120,220,190,0.25),0_0_80px_rgba(20,120,110,0.35)]"
              />
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
