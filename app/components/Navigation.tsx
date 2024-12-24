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
import { noto_sans, poppins } from "../fonts";

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
          <Link href={"/"} className={`${poppins.className} font-bold text-lg bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text transition ease-in-out delay-75 duration-300 hover:scale-105 hover:translate-y-1 active:scale-95`}>
            {"<flowz0 />"}
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent
        className={`${noto_sans.className} hidden sm:flex gap-4`}
        justify="end"
      >
        {navLinks.map((link, index) => {
          const isNavLinkActive = pathname.startsWith(link.href);

          return (
            <NavbarItem key={index}>
              <Link
                href={link.href}
                className={
                  isNavLinkActive
                    ? "pb-[1.13rem] transition ease-in-out delay-75 duration-300 border-b-2 text-teal-500 border-teal-500"
                    : "transition ease-in-out delay-75 duration-300 text-neutral-400 hover:text-teal-500"
                }
              >
                {link.name}
              </Link>
            </NavbarItem>
          );
        })}

      </NavbarContent>
      <NavbarMenu
        className={`${noto_sans.className} px-4 flex justify-center items-center gap-y-4 bg-neutral-950`}
      >
        {navLinks.map((link, index) => {
          const isNavLinkActive = pathname.startsWith(link.href);

          return (
            <NavbarMenuItem
              key={index}
              className="text-xl -translate-y-16 flex items-center justify-center"
            >
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={
                  isNavLinkActive ? "text-orange-500" : "text-neutral-500"
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
