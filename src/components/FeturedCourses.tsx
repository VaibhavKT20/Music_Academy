"use client";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  image: string;
  isFeatured: boolean;
}

function FeturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="relative py-20 bg-gradient-to-b from-[#0f0f1c] via-[#1b1b2e] to-[#0f0f1c]">
      {/* Decorative gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.08),transparent_75%)] pointer-events-none" />

      {/* Header Section */}
      <div className="text-center relative z-10">
        <h2 className="text-sm md:text-base text-violet-400 font-semibold tracking-[0.2em] uppercase">
          Featured Programs
        </h2>
        <p className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 drop-shadow-md">
          Learn From World-Class Mentors
        </p>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Explore handpicked music courses designed by industry experts. Build your
          skills, master new instruments, and elevate your musical artistry with immersive lessons.
        </p>
      </div>

      {/* Course Cards Grid */}
      <div className="mt-14 relative z-10 px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col items-center rounded-3xl bg-white/10 dark:bg-zinc-900/60 border border-white/10 shadow-lg hover:shadow-violet-500/20 backdrop-blur-md overflow-hidden h-full max-w-sm p-6 transition-transform duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center flex-grow">
                  <Image
                    src={course.image}
                    alt={course.title}
                    height="220"
                    width="220"
                    className="rounded-xl object-cover shadow-md"
                  />
                  <p className="text-xl font-semibold text-white mt-6 mb-2">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-400 flex-grow leading-relaxed">
                    {course.description}
                  </p>
                  <Link
                    className="mt-5 inline-block text-sm font-semibold text-violet-400 hover:text-pink-400 transition-colors duration-200"
                    href={`/courses`}
                  >
                    Explore Course →
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-20 text-center relative z-10">
        <Link
          href={"/courses"}
          className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeturedCourses;
