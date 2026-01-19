"use client";

import { useState } from "react";

const SIGIL_NODES = [
  { label: "Herbs", description: "Medicinal leaves and ritual greens." },
  { label: "Trees", description: "Ancient sentinels and bark-bound lore." },
  { label: "Fungi", description: "Veiled networks beneath the soil." },
  { label: "Roots", description: "Hidden powers drawn from depth." },
  { label: "Mosses", description: "Soft keepers of damp places." },
  { label: "Toxins", description: "Dangerous, deliberate knowledge." },
];

export default function SigilHero() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#050f0e] via-[#0a1f1c] to-black overflow-hidden">
      {/* mist */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,180,150,0.14),transparent_65%)]" />

      <div
        className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20
        flex flex-col md:grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Text */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl leading-tight">
            <span className="block text-teal-200/70">The</span>
            <span className="block text-[#c8efe3] drop-shadow-[0_0_35px_rgba(120,220,190,0.55)]">
              Verdant Sigil
            </span>
          </h1>

          <p className="font-cormorant text-xl sm:text-2xl text-teal-100/80">
            {active !== null
              ? SIGIL_NODES[active].description
              : "Knowledge bound in circles."}
          </p>
        </div>

        {/* Sigil */}
        <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[420px] md:h-[420px]">
          {/* rings */}
          <div
            className="absolute inset-0 rounded-full border border-teal-300/20
            shadow-[inset_0_0_60px_rgba(120,220,190,0.25),0_0_80px_rgba(20,120,110,0.4)]"
          />
          <div className="absolute inset-[15%] rounded-full border border-teal-300/30" />
          <div className="absolute inset-[30%] rounded-full border border-teal-300/20" />

          {/* nodes */}
          {SIGIL_NODES.map((node, i) => {
            const angle = (360 / SIGIL_NODES.length) * i;
            const isActive = active === i;

            return (
              <button
                key={node.label}
                onClick={() => setActive(i)}
                aria-label={node.label}
                className={`absolute top-1/2 left-1/2
                  h-11 w-11 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-teal-200 shadow-[0_0_25px_rgba(120,220,190,0.9)]"
                      : "bg-teal-200/60 shadow-[0_0_10px_rgba(120,220,190,0.4)] hover:shadow-[0_0_20px_rgba(120,220,190,0.7)]"
                  }`}
                style={{
                  transform: `rotate(${angle}deg) translate(${window.innerWidth < 640 ? "85px" : "160px"}) rotate(-${angle}deg)`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
