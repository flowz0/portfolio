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
import { usePathname,useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { noto_sans, poppins } from "../fonts";

const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const defaultNavbarStyle = "fixed z-50 text-neutral-300 bg-neutral-950";

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const handleLinkClick = (href: string) => {
        setIsMenuOpen(false);
        router.push(href);
    };

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            className={isMenuOpen ? defaultNavbarStyle : defaultNavbarStyle + " rounded-b-lg"}
        >
            <NavbarContent>
                <NavbarBrand>
                    <Link href={'/'} className={`${poppins.className} font-bold text-xl`}>{'<Billy />'}</Link>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className={`${noto_sans.className} hidden sm:flex gap-4`} justify="end">
                {navLinks.map((link, index) => {
                    const isNavLinkActive = pathname.startsWith(link.href);

                    return (
                        <NavbarItem key={index}>
                            <Link
                                href={link.href}
                                className={isNavLinkActive ? "pb-[1.13rem] border-b-2 text-orange-500 border-orange-500" : "text-neutral-400 hover:text-orange-500"}
                            >
                                {link.name}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
            <NavbarMenu className={`${noto_sans.className} m-0 p-0 bg-neutral-950`}>
                {navLinks.map((link, index) => {
                    const isNavLinkActive = pathname.startsWith(link.href);

                    return (
                        <NavbarMenuItem key={index}>
                            <Link
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={isNavLinkActive ? "pl-6 border-l-1 text-orange-500 border-orange-500" : "pl-6 text-neutral-300"}
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
