"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Before joining, I played for fun — now, I play with purpose. Every session inspired me to explore new sounds and techniques that truly define who I am as an artist.",
    name: "Aria Patel",
    title: "Vocal & Performance Student",
  },
  {
    quote:
      "The mentorship here feels personal and powerful. My instructor not only refined my technique but taught me how to express emotions through every note I play.",
    name: "Liam Anderson",
    title: "Piano Student",
  },
  {
    quote:
      "Learning music production felt intimidating at first, but the hands-on guidance and studio exposure here gave me confidence to create, mix, and master like a pro.",
    name: "Noah Rivera",
    title: "Music Production Student",
  },
  {
    quote:
      "From day one, the school made me feel part of a community that breathes creativity. I’ve grown both technically and emotionally as a guitarist.",
    name: "Sofia Martinez",
    title: "Guitar Student",
  },
  {
    quote:
      "What sets this academy apart is the passion — every lesson, workshop, and feedback session pushes you to dream bigger and perform better.",
    name: "Ethan Zhang",
    title: "Advanced Composition Student",
  },
];

function TestimonialCards() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[42rem] overflow-hidden bg-gradient-to-b from-[#0f0f1c] via-[#1b1b2e] to-[#0f0f1c] text-white">
      {/* Decorative glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_75%)] pointer-events-none" />

      {/* Header */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 drop-shadow-lg mb-10">
        Voices of Inspiration
      </h2>
      <p className="relative z-10 text-neutral-300 text-center max-w-2xl mb-10 px-4">
        Hear from our students who turned passion into performance. Their stories
        reflect dedication, creativity, and the power of guided musical growth.
      </p>

      {/* Infinite Moving Cards */}
      <div className="relative z-10 flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      {/* Bottom soft glow accent */}
      <div className="absolute bottom-[-5rem] left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-pink-500/10 blur-[100px] rounded-full" />
    </div>
  );
}

export default TestimonialCards;
