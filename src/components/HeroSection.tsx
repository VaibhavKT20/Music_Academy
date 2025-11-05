import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto md:h-[42rem] overflow-hidden rounded-2xl mx-auto py-16 md:py-0 bg-gradient-to-br from-[#0f0f1c] via-[#1b1b2e] to-[#0f0f1c] shadow-xl">
      {/* Decorative Light Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.15),transparent_70%)] blur-2xl" />

      {/* Spotlight remains unchanged (just repositioned visually) */}
      <Spotlight
        className="-top-32 md:-top-20 left-0 md:left-64 scale-110 opacity-90"
        fill="blueviolet"
      />

      {/* Text Content */}
      <div className="relative z-10 px-4 text-center max-w-3xl">
        <h1 className="mt-16 md:mt-0 text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 drop-shadow-[0_4px_10px_rgba(138,43,226,0.3)]">
          Master the Art of Music
        </h1>

        <p className="mt-6 text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto">
          Experience music like never before.
          From the fundamentals to advanced artistry, our curated courses empower you to compose, perform, and express your true musical identity.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Button
            borderRadius="1.75rem"
            className="px-8 py-3 font-semibold tracking-wide bg-gradient-to-r from-pink-500 to-violet-500 text-white border-none shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
      </div>

      {/* Floating Gradient Circle (aesthetic element) */}
      <div className="absolute bottom-[-8rem] right-[-6rem] w-72 h-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute top-[-6rem] left-[-6rem] w-64 h-64 rounded-full bg-pink-500/10 blur-3xl" />
    </div>
  );
}

export default HeroSection;
