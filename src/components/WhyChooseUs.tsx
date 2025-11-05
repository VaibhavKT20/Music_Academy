"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
  {
    title: "Find Your Rhythm, Define Your Style",
    description:
      "Discover the power of self-expression through rhythm, melody, and harmony. Our mentors guide you to craft your own unique sound while mastering the essentials that make great musicians unforgettable.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg shadow-xl"
          alt="music class"
        />
      </div>
    ),
  },
  {
    title: "Play, Record, and Create Without Limits",
    description:
      "Step inside our modern studios and learn how to bring your ideas to life. Whether it's composing a melody or mixing your first track, our facilities give you the tools to experiment fearlessly.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/courses/piano.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg shadow-lg"
          alt="piano session"
        />
      </div>
    ),
  },
  {
    title: "Master Every Note with Expert Guidance",
    description:
      "Our instructors are professional artists with years of real-world experience. Receive tailored mentorship, constructive feedback, and continuous inspiration to reach your musical goals faster.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/courses/guitar.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg shadow-lg"
          alt="guitar practice"
        />
      </div>
    ),
  },
  {
    title: "Collaborate, Perform, and Shine Live",
    description:
      "Join a vibrant community of musicians and performers. Experience live sessions, group collaborations, and showcase events that let your talent take center stage in real-world performances.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/courses/vocalist.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg shadow-lg"
          alt="live performance"
        />
      </div>
    ),
  },
  {
    title: "Learn with Cutting-Edge Tools and Techniques",
    description:
      "From digital production suites to AI-assisted music creation, our courses integrate the latest technology to prepare you for the future of sound. Stay ahead of trends with hands-on innovation.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/courses/drumming.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg shadow-lg"
          alt="music tech setup"
        />
      </div>
    ),
  },
  {
    title: "Your Music, Your Future",
    description:
      "Build a career that resonates. Whether your goal is performing, producing, or teaching, we help you transform your passion into a lifelong journey of success and creativity.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/courses/music-prod.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg shadow-lg"
          alt="music production"
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-[#0f0f1c] via-[#1a1a2e] to-[#0f0f1c]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.07),transparent_70%)] pointer-events-none" />
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-sm uppercase tracking-[0.25em] text-violet-400 font-semibold">
          Why Choose Us
        </h2>
        <p className="mt-3 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 drop-shadow-md">
          Where Passion Meets Performance
        </p>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Experience a school that goes beyond lessons — we build artists,
          creators, and dreamers ready to shape the sound of tomorrow.
        </p>
      </div>

      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
