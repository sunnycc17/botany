import Image from "next/image";
import Link from "next/link";
import herbs from "@/data/herbs.json";

export const dynamicParams = true;

export default async function HerbPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const herb = herbs.find((h) => h.slug === slug);

  if (!herb) {
    return <div className="text-white p-20">Herb not found: {slug}</div>;
  }

  return (
    <article className="relative mx-auto max-w-6xl px-6 py-32">
      {/* Header row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text column */}
        <div className="space-y-6">
          <h1 className="font-cinzel text-4xl md:text-6xl text-[#c8efe3] drop-shadow-[0_0_18px_rgba(120,220,190,0.35)]">
            {herb.name}
          </h1>

          <p className="font-cormorant italic text-teal-300 text-lg">
            {herb.tag}
          </p>

          <p className="font-cormorant text-teal-100/80 text-xl md:text-2xl leading-relaxed">
            {herb.description}
          </p>
        </div>

        {/* Image column */}
        <div className="relative">
          <Image
            src={herb.image}
            alt={herb.name}
            width={500}
            height={500}
            priority
            className=""
          />
        </div>
      </div>

      {/* Warning block */}
      <div className="mt-16 max-w-3xl border-l-2 border-teal-400/40 pl-6">
        <p className="font-cormorant text-sm md:text-base text-teal-200/70">
          ⚠ {herb.warning}
        </p>
      </div>
      <Link
        href="/"
        className="font-cormorant mt-8 text-teal-300 text-lg group inline-flex items-center gap-2 hover:text-teal-200 transition"
      >
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
        Return to the Grimoire
      </Link>
    </article>
  );
}
