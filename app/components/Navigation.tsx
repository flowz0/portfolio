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
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll
            className="fixed z-50 bg-neutral-950"
        >
            <NavbarContent>
                <NavbarBrand>
                    <Link href={'/'} className="font-bold text-inherit">{'<Billy />'}</Link>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {navLinks.map((link, index) => {
                    const isNavLinkActive = pathname.startsWith(link.href);

                    return (
                        <NavbarItem key={index}>
                            <Link
                                href={link.href}
                                className={isNavLinkActive ? "text-neutral-100 font-bold" : "text-neutral-400"}
                            >
                                {link.name}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
            <NavbarMenu className="bg-neutral-950">
                {navLinks.map((link, index) => {
                    const isNavLinkActive = pathname.startsWith(link.href);

                    return (
                        <NavbarMenuItem key={index}>
                            <Link
                                href={link.href}
                                className={isNavLinkActive ? "text-neutral-100 font-bold" : "text-neutral-400"}
                            >
                                {link.name}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}
            </NavbarMenu>
        </Navbar>
    );
}
