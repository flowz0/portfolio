"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { arimo } from "@/app/fonts";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const defaultNavbarStyle =
    "fixed z-50 text-neutral-300 transition-colors duration-300";
  const scrolledNavbarStyle = "bg-neutral-950";

  useEffect(() => {
    setIsMenuOpen(false);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className={`${defaultNavbarStyle} ${
        isScrolled ? scrolledNavbarStyle : "bg-transparent"
      } ${isMenuOpen ? "bg-neutral-950" : "rounded-b-lg"}`}
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            href={"/"}
            className={`${arimo.className} text-xl font-bold transition ease-in-out delay-75 duration-200 hover:scale-110 active:scale-90`}
          >
            flowz0
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex sm:gap-x-6" justify="end">
        {navLinks.map((link, index) => {
          const isNavLinkActive = pathname.startsWith(link.href);

          return (
            <NavbarItem key={index} className={`${arimo.className}`}>
              <Link
                href={link.href}
                className={
                  isNavLinkActive
                    ? `text-neutral-300`
                    : `text-neutral-500 hover:text-neutral-400`
                }
              >
                {link.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu className="px-6 flex justify-center items-center gap-y-4 bg-neutral-950">
        {navLinks.map((link, index) => {
          const isNavLinkActive = pathname.startsWith(link.href);

          return (
            <NavbarMenuItem
              key={index}
              className={`${arimo.className} -translate-y-16 flex items-center justify-center`}
            >
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={
                  isNavLinkActive
                    ? "text-neutral-300"
                    : "text-neutral-500 hover:text-neutral-400"
                }
              >
                {link.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
