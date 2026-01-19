import Image from "next/image";
import SigilHero from "@/components/SigilHero";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Page content */}
      <main className="">
        <div className="relative min-h-screen overflow-hidden bg-linear-to-b   from-[#050f0e] via-[#0a1f1c] to-black">
          {/* low mist */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,180,150,0.14),transparent_65%)]" />

          <main
            className="
      relative z-10 mx-auto max-w-7xl
      px-4 sm:px-6 md:px-8
      pt-28 sm:pt-32 md:pt-40
      pb-20 sm:pb-24
      grid gap-16
      md:grid-cols-2 md:gap-20
      items-center
    "
          >
            {/* Text */}
            <div className="space-y-6 sm:space-y-8 text-center md:text-left">
              <h1 className="font-cinzel leading-tight">
                <span className="block text-teal-200/70 text-3xl sm:text-4xl md:text-5xl">
                  The
                </span>
                <span
                  className="
            block text-[#c8efe3]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            drop-shadow-[0_0_25px_rgba(120,220,190,0.45)]
          "
                >
                  Verdant Sigil
                </span>
              </h1>

              <p
                className="
          font-cormorant text-teal-100/80
          text-lg sm:text-xl md:text-2xl
          max-w-xl mx-auto md:mx-0
        "
              >
                Knowledge bound in circles.
              </p>

              <a
                href="#plants"
                className="group inline-flex items-center justify-center md:justify-start gap-4 mt-4"
              >
                <span className="font-cinzel tracking-widest text-xs sm:text-sm text-teal-200 group-hover:text-teal-100 transition">
                  ACTIVATE SEAL
                </span>
                <span className="h-px w-10 sm:w-12 bg-teal-300/40 group-hover:w-16 transition-all duration-300" />
              </a>
            </div>

            {/* Sigil */}
            <div
              className="
        relative mx-auto
        h-64 w-64
        sm:h-72 sm:w-72
        md:h-104 md:w-104
      "
            >
              <div
                className="
          absolute inset-0 rounded-full border border-teal-300/20
          shadow-[inset_0_0_40px_rgba(120,220,190,0.25),0_0_60px_rgba(20,120,110,0.35)]
        "
              />

              {/* inner rings */}
              <div className="absolute inset-8 sm:inset-10 rounded-full border border-teal-300/30" />
              <div className="absolute inset-14 sm:inset-20 rounded-full border border-teal-300/20" />

              {/* glyph nodes */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <span
                  key={i}
                  className="
            absolute top-1/2 left-1/2
            h-2.5 w-2.5 sm:h-3 sm:w-3
            rounded-full bg-teal-200
            shadow-[0_0_12px_rgba(120,220,190,0.9)]
          "
                  style={{
                    transform: `
              rotate(${deg}deg)
              translate(7.5rem)
              rotate(-${deg}deg)
            `,
                  }}
                />
              ))}
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
