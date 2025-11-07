"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

function MusicSchoolContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { name, email, message });
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-44 md:pt-48">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Compact header — sized down so it doesn't push content */}
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400">
            Reach Out — We&apos;re Listening
          </h1>
          <p className="mt-2 text-sm md:text-base text-neutral-400 max-w-lg mx-auto">
            Questions about classes, schedules, or custom programs? Send a short message and we&apos;ll get back to you within 24–48 hours.
          </p>
        </header>

        {/* Card-like form container (glassmorphism) */}
        <div className="bg-white/5 backdrop-blur-md border border-white/8 rounded-2xl p-5 md:p-7 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-neutral-300 mb-1">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-lg p-3 bg-white/6 text-white placeholder:text-neutral-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg p-3 bg-white/6 text-white placeholder:text-neutral-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help? (brief)"
                className="w-full rounded-lg p-3 bg-white/6 text-white placeholder:text-neutral-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"
                rows={5}
                required
              />
            </div>

            {/* Button row placed below fields, aligned right on wide screens */}
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                Prefer a call? Write &quot;CALL&quot; in the message with your timezone.
              </div>

              <div className="ml-auto">
                <Button
                  borderRadius="1.75rem"
                  type="submit"
                  className="px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 shadow-md hover:shadow-violet-500/30 transition-transform hover:-translate-y-0.5"
                >
                  Send Message
                </Button>
              </div>
            </div>

            <p className="mt-2 text-xs text-neutral-500 text-right">
              We respond within 24–48 hours — thank you 🎵
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
