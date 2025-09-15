"use client";

import {
  AceternityNavbar,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { RocketIcon } from "lucide-react";
import { useState } from "react";

type NavbarItemsProps = {
  name: string;
  link: string;
};

const navItems: NavbarItemsProps[] = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Timeline",
    link: "#timeline",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  //   {
  //     name: "Blog",
  //     link: "#blog",
  //   },
];

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AceternityNavbar>
      <NavBody>
        <div className="bg-gradient-to-br dark:from-primary to-blue-500 rounded-md p-2">
          <RocketIcon className="stroke-white dark:stroke-black" />
        </div>
        <NavItems items={navItems} />
        <NavbarButton
          href="#contact"
          className="not-dark:bg-black not-dark:text-white"
        >
          Contact Me
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <div className="bg-gradient-to-br from-primary to-blue-500 rounded-md p-2">
            <RocketIcon className="stroke-black" />
          </div>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <NavbarButton href="#contact" className="w-full">
            Contact Me
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </AceternityNavbar>
  );
}
