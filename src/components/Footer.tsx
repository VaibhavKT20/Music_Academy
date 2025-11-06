import React from "react";

function Footer() {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-[#0f0f1c] via-[#1b1b2e] to-[#0f0f1c] text-neutral-300 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-8rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-pink-500/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-10 relative z-10 text-center md:text-left">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 mb-4">
            About Harmonic
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Harmonic Academy is more than a school — it’s a creative movement.
            We connect passion with purpose, guiding every learner to master
            the rhythm, emotion, and innovation behind world-class music.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 mb-4">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white transition-colors duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="/webinars" className="hover:text-white transition-colors duration-300">
                Webinars
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 mb-4">
            Connect With Us
          </h2>
          <div className="flex space-x-5 justify-center md:justify-start">
            <a href="/" className="hover:text-pink-400 transition-colors duration-300">
              Facebook
            </a>
            <a href="/" className="hover:text-violet-400 transition-colors duration-300">
              Instagram
            </a>
            <a href="/" className="hover:text-indigo-400 transition-colors duration-300">
              YouTube
            </a>
          </div>
          <p className="mt-4 text-sm text-neutral-400">
            Join our community and stay updated on live events, workshops, and
            new courses.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-sm text-neutral-400">Bengaluru, India</p>
          <p className="text-sm text-neutral-400">Email: hello@harmonicacademy.com</p>
          <p className="text-sm text-neutral-400">Phone: +91 98765 43210</p>
          <p className="mt-3 text-sm text-neutral-500">
            Monday – Saturday: 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center relative z-10">
        <p className="text-xs text-neutral-500 tracking-wide">
          © 2025 Harmonic Academy. All rights reserved. Crafted with 🎵 & passion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
