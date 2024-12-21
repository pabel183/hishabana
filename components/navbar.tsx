"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    return (
        <nav className="w-full h-20 flex justify-between bg-red-700 items-center px-8">
            <div className="h-full flex sm:gap-8 gap-4  items-center">
                <div className="flex h-full items-center">
                    <GiHamburgerMenu
                        className="sm:size-7 size-5 text-neutral-50 lg:hidden"
                    />
                </div>
                <Link href="/">
                    <h1 className="text-neutral-50 sm:text-3xl text-xl font-semibold">
                        Account
                        <span className="font-normal">Dashboard</span>
                    </h1>
                </Link>
            </div>
            {/** User data setup from backend */}
            <div className="flex text-neutral-50">
                User Account
            </div>
        </nav>
    )
}
