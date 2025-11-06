"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Piano Teacher",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Drumming Expert",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 1,
    name: "Alice Thompson",
    designation: "Singing Coach",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Guitar Mentor",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 3,
    name: "Mia Wang",
    designation: "Piano Instructor",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    designation: "Drum Specialist",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];


function Instructors() {
  return (
    <div className="relative flex items-center justify-center h-[45rem] overflow-hidden bg-gradient-to-b from-[#0f0f1c] via-[#1b1b2e] to-[#0f0f1c]">
      {/* Wavy overlay */}
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full pb-40 relative z-10 text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 drop-shadow-lg mb-6">
          Meet the Maestros
        </h2>

        {/* Subheading */}
        <p className="text-neutral-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Our instructors are award-winning artists, producers, and performers
          who’ve graced global stages and studios. Learn directly from the
          creative minds shaping today’s music world.
        </p>

        {/* Instructors Tooltip Section */}
        <div className="flex flex-row items-center justify-center w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>

      {/* Decorative glow aura */}
      <div className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-pink-500/10 blur-[100px] rounded-full" />
    </div>
  );
}

export default Instructors;