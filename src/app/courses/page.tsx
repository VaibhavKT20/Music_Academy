"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function Courses() {
  return (
    <div className="min-h-screen py-20 pt-44 md:pt-48 bg-gradient-to-b from-[#0f0f1c] via-[#11121a] to-[#070709]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400">
            Explore Our Course Library
          </h1>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            {`Browse ${courseData.courses.length} professionally-crafted courses — from fundamentals to advanced production. Learn at your own pace with studio exercises, mentor feedback, and practical projects.`}
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          {courseData.courses.map((course: Course) => (
            <CardContainer className="inter-var mx-4" key={course.id}>
              <CardBody className="relative group/card w-[28rem] rounded-2xl p-6 border border-white/6 bg-white/3 backdrop-blur-md shadow-lg transition-transform duration-300 hover:-translate-y-2">
                {/* Course title */}
                <CardItem
                  translateZ="40"
                  className="text-2xl font-semibold text-white/95"
                >
                  {course.title}
                </CardItem>

                {/* Short description */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm text-neutral-300 mt-3 max-w-prose leading-relaxed"
                >
                  {course.description}
                </CardItem>

                {/* Hero image */}
                <CardItem translateZ="100" className="w-full mt-6 h-60 overflow-hidden rounded-xl">
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="w-full h-full object-cover rounded-xl group-hover/card:scale-105 transition-transform duration-500"
                    alt={course.title}
                  />
                </CardItem>

                {/* Actions */}
                <div className="flex items-center justify-between mt-6 gap-4">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="/"
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border border-white/10 bg-transparent text-white hover:bg-white/5 transition"
                  >
                    Free Preview
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    as="button"
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 text-white shadow-md hover:shadow-pink-500/30 transition"
                  >
                    Enroll — ₹{course.price}
                  </CardItem>
                </div>

                {/* Decorative glow */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-pink-500/6 blur-3xl pointer-events-none" />
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
