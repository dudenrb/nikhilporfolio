// src/components/NavbarHome.tsx

"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Desktop Navbar - Hidden on small screens */}
      <nav
        className={cn(
          "fixed top-10 inset-x-0 z-50",
          "hidden sm:flex", // Hide on mobile (sm:hidden is wrong, should be hidden and sm:flex)
          "max-w-2xl mx-auto", // Desktop sizing and centering
          "items-center justify-center space-x-4 p-2 rounded-full", // Basic styling for the nav container
          "bg-black/50 backdrop-blur-sm shadow-lg", // Example background/blur
          // Any additional classes passed to Navbar
        )}
      >
        <Menu>
          <MenuItem item="Home" path="/" />
          <MenuItem item="About" path="/about#about" />
          <MenuItem item="Education" path="/about#education" />
          <MenuItem item="Experience" path="/about#experience" />
          <MenuItem item="Projects" path="/projects#projects" />
          <MenuItem item="Resume" path="/resume" />
        </Menu>
      </nav>

      {/* Mobile Hamburger Button - Visible only on small screens */}
      <button
        className="sm:hidden fixed top-4 right-4 z-[60] p-2 rounded-md bg-black/70 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {/* Hamburger Icon (you can use an SVG icon here) */}
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>

      {/* Mobile Menu Content - Visible only when isOpen and on small screens */}
      {isOpen && (
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex flex-col items-center justify-center",
            "sm:hidden" // Ensure it's hidden on larger screens
          )}
        >
          {/* Close Button (optional, can also use the hamburger button) */}
          <button
            className="absolute top-4 right-4 p-2 rounded-md bg-gray-800 text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Mobile Menu Items - Re-use MenuItem or create simple links */}
          <ul className="flex flex-col space-y-6 text-white text-xl">
            <li>
              <a href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="/about#about" onClick={() => setIsOpen(false)} className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="/about#education" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Education</a>
            </li>
            <li>
              <a href="/about#experience" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Experience</a>
            </li>
            <li>
              <a href="/projects#projects" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Projects</a>
            </li>
            <li>
              <a href="/resume" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarHome;
