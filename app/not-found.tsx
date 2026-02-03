import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#050f0e] via-[#0a1f1c] to-black/20 flex items-center justify-center px-6">
      {/* mist */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,180,150,0.12),transparent_65%)]" />

      <div className="relative z-10 max-w-2xl space-y-6 text-start">
        {/* 404 marker */}
        <h2 className="font-cinzel text-teal-200/50 text-3xl sm:text-4xl tracking-wide">
          404
        </h2>

        {/* main */}
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-[#c8efe3] drop-shadow-[0_0_18px_rgba(120,220,190,0.35)]">
          A Page Lost to Time
        </h1>

        {/* body */}
        <p className="font-cormorant text-teal-100/80 text-lg sm:text-xl leading-relaxed max-w-xl">
          This leaf is missing from the Verdant Grimoire.  
          Whether torn away, never written, or hidden by older magic —
          its knowledge cannot be reached.
        </p>

        <p className="font-cormorant italic text-teal-200/60 text-base sm:text-lg max-w-lg">
          Retrace your steps, or return to the roots where the wisdom still grows.
        </p>

        {/* actions */}
        <div className="pt-8 flex flex-col sm:flex-row gap-6">
          <Link
            href="/"
            className="font-cormorant text-teal-300 text-lg group inline-flex items-center gap-2 hover:text-teal-200 transition"
          >
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
            Return to the Grimoire
          </Link>

          <Link
            href="/#origins"
            className="font-cormorant text-teal-300/70 text-lg group inline-flex items-center gap-2 hover:text-teal-200 transition"
          >
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
            Read the Origins
          </Link>
        </div>
      </div>
    </section>
  );
}
