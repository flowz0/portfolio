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
import { Link } from "@nextui-org/link";

import { useState } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-neutral-950">
            <NavbarContent>
                <NavbarBrand>
                    <p className="font-bold text-inherit">{'<Billy />'}</p>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem isActive>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-neutral-950">
                <NavbarMenuItem>
                    <Link href="#" aria-current="page" className="text-neutral-100">
                        About
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="#" aria-current="page" className="text-neutral-100">
                        Projects
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Button as={Link} href="#" color="default" variant="bordered" className="mt-2" fullWidth>
                        Contact
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
