"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import webinarData from "@/data/webinar.json";
import Link from "next/link";

interface Webinar {
  id: number;
  title: string;
  description: string;
  slug: string;
  isFeatured: boolean;
  image: string;
  price: number;
}

function Webinars() {
  return (
    <div className="min-h-screen bg-black py-20 pt-44 md:pt-48 bg-grid-small-white/[0.3]">
      <h1 className="text-3xl md:text-5xl text-center font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400">
        Interactive Webinars & Masterclasses
      </h1>
      <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-14 px-4">
        {`Join ${webinarData.webinars.length} live interactive sessions with expert musicians and producers. 
        Learn cutting-edge techniques, collaborate in real time, and experience creative inspiration from the pros.`}
      </p>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {webinarData.webinars.map((webinar: Webinar) => (
          <CardContainer className="inter-var mx-4" key={webinar.id}>
            <CardBody className="relative group/card w-[28rem] rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-transform duration-300 hover:-translate-y-2">
              
              {/* Webinar Title */}
              <CardItem
                translateZ="50"
                className="text-2xl font-semibold text-white mb-2"
              >
                {webinar.title}
              </CardItem>

              {/* Webinar Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm text-neutral-300 leading-relaxed mb-3"
              >
                {webinar.description}
              </CardItem>

              {/* Webinar Image */}
              <CardItem translateZ="100" className="w-full mt-4 h-60 overflow-hidden rounded-xl">
                <Image
                  src={webinar.image}
                  height={1000}
                  width={1000}
                  className="w-full h-full object-cover rounded-xl group-hover/card:scale-105 transition-transform duration-500"
                  alt={webinar.title}
                />
              </CardItem>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/"
                  target="__blank"
                  className="px-4 py-2 rounded-full text-sm font-semibold border border-white/10 bg-transparent text-white hover:bg-white/10 transition"
                >
                  Watch Preview →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 text-white text-sm font-bold shadow-md hover:shadow-pink-500/30 transition"
                >
                  Reserve Seat • ₹{webinar.price}
                </CardItem>
              </div>

              {/* Info Line */}
              <p className="mt-4 text-xs text-neutral-500 text-center">
                Live Q&A • Expert Mentorship • Recording Included
              </p>

              {/* Soft Glow */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Webinars;
