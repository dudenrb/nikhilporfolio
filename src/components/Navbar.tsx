"use client";

import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarHome() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 z-50",
        "w-full px-2 sm:px-4",
        "sm:max-w-3xl sm:mx-auto",
        className
      )}
    >
      {/* Add horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-none">
        {/* Flex container for menu items */}
        <div className="flex items-center justify-start sm:justify-center gap-4 py-2 whitespace-nowrap">
          <Menu>
            <MenuItem item="Home" path="/" />
            <MenuItem item="About" path="/about#about" />
            <MenuItem item="Education" path="/about#education" />
            <MenuItem item="Experience" path="/about#experience" />
            <MenuItem item="Projects" path="/projects#projects" />
            <MenuItem item="Resume" path="/resume" />
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavbarHome;
