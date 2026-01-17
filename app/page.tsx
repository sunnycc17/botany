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
      <main className="relative flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-6 sm:items-start text-white">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="mt-4 text-lg">
          This content sits on top of the background.
        </p>
      </main>
    </div>
  );
}
