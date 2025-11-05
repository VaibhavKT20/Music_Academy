"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import webinarData from "@/data/webinar.json";

interface Webinar {
  id: number;
  title: string;
  description: string;
  slug: string;
  isFeatured: boolean;
  image: string;
  price: number;
}

const featuredWebinars = webinarData.webinars.filter(
  (webinar: Webinar) => webinar.isFeatured
);

function UpcomingWebinars() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-[#0f0f1c] via-[#1b1b2e] to-[#0f0f1c] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_75%)] pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base text-violet-400 font-semibold tracking-[0.25em] uppercase">
            Featured Webinars
          </h2>
          <p className="mt-3 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 drop-shadow-md">
            Tune Into the Future of Music
          </p>
          <p className="mt-5 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Join immersive live sessions hosted by top musicians, composers, and
            producers. Learn modern techniques, get creative insights, and connect
            with a global community of passionate artists.
          </p>
        </div>

        {/* Webinar Hover Cards */}
        <div className="mt-14">
          <HoverEffect
            items={featuredWebinars.map((webinar: Webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/webinars",
            }))}
          />
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href={"/webinars"}
            className="inline-block px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 shadow-md hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Webinars
          </Link>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-[-10rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-pink-500/10 blur-[100px] rounded-full" />
    </div>
  );
}

export default UpcomingWebinars;
