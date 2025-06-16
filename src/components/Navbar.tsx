// NavbarHome.tsx
"use client";

import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarHome() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" /> {/* Changed top-15 back to top-1 for consistent Tailwind class */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 z-50", // Adjusted top back to 10 from 15
        "w-full px-4",
        "sm:max-w-2xl sm:mx-auto",
        className
      )}
    >
      {/* Applied text-sm on small screens, and text-base on larger screens.
          This assumes your Menu component passes these classes down to its MenuItem children,
          or that MenuItem's font size adjusts based on its parent.
      */}
      <Menu className="text-sm sm:text-base"> {/* Added responsive font size classes here */}
        <MenuItem item="Home" path="/" />
        <MenuItem item="About" path="/about#about" />
        <MenuItem item="Education" path="/about#education" />
        <MenuItem item="Experience" path="/about#experience" />
        <MenuItem item="Projects" path="/projects#projects" />
        <MenuItem item="Resume" path="/resume" />
      </Menu>
    </div>
  );
}

export default NavbarHome;
