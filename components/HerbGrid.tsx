import Image from "next/image";
import Link from "next/link";

type HerbPreview = {
  id: number;
  slug: string;
  name: string;
  tag: string;
  image: string;
};

export default function HerbGrid({ herbs }: { herbs: HerbPreview[] }) {
  return (
    <section id="the-leaves-within" className="mx-auto max-w-7xl px-6 py-32">
      <h2 className="mb-12 font-cinzel text-5xl text-teal-200/80">
        The Leaves Within
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {herbs.map((herb) => (
          <Link
            key={herb.id}
            href={`/herbs/${herb.slug}`}
            className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-teal-300/40 transition"
          >
            <Image
              src={herb.image}
              alt={herb.name}
              width={300}
              height={300}
              className="h-80 w-full object-cover opacity-80 group-hover:opacity-100 transition"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-0 p-4">
              <p className="font-cormorant text-lg text-teal-100">
                {herb.name}
              </p>
              <p className="text-sm italic text-teal-300/70">
                {herb.tag}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
