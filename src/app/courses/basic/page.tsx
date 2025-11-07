"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
  courseType: string;
}

function BasicMusicTheory() {
  const basicMusicTheoryCourse = courseData.courses.filter(
    (course: Course) => course.courseType === "basic"
  );

  return (
    <div className="min-h-screen py-20 pt-44 md:pt-48 bg-gradient-to-b from-[#0f0f1c] via-[#1b1b2e] to-[#0f0f1c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400">
            Foundation Courses
          </h1>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            {`Start your musical journey with ${basicMusicTheoryCourse.length} beginner-friendly courses. Build a strong foundation in rhythm, melody, and harmony while gaining confidence in your musical expression.`}
          </p>
        </header>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {basicMusicTheoryCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="w-full max-w-sm rounded-3xl p-6 backdrop-blur-md bg-white/5 border border-white/6 shadow-lg hover:shadow-violet-600/20 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full h-44 overflow-hidden rounded-xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      height={400}
                      width={600}
                      placeholder="empty"
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <button className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 text-white shadow-md hover:-translate-y-1 transition">
                      Enroll Today
                    </button>

                    <div className="text-sm text-neutral-400 px-3 py-1 rounded-full bg-white/3">
                      {`Price • ₹${course.price}`}
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-neutral-500">
                    Beginner level • No prior experience needed
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BasicMusicTheory;
