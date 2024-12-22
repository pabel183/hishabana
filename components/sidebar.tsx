"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { AiOutlineDashboard } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { MdAssistant } from "react-icons/md";
import { PiListBulletsBold } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { PiUserListBold } from "react-icons/pi";
import { TbBoxPadding } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export const Sidebar = () => {
    const [isActive, setIsActive] = useState('');
    const pathname = usePathname();
    const [user,setUser]=useState("User");
    // fetch user data from backend and setUser
    
    useEffect(() => {
        if (typeof pathname === "string") {
            setIsActive(pathname);
        }
    }, [pathname])

    const routes = [
        {
            label: "Dashboard",
            icon: AiOutlineDashboard,
            path: "/",
            active: "/" === isActive,
        },
        {
            label: "Category",
            icon: BiSolidCategory,
            path: "/category",
            active: "/category" === isActive,

        },
        {
            label: "Add Service",
            icon: MdAssistant,
            path: "/add-service",
            active: "/add-service" === pathname,
        },
        {
            label: "Service List",
            icon: PiListBulletsBold,
            path: "/service-list",
            active: "/service-list" === pathname,
        },
        {
            label: "Create Invoice",
            icon: FaPlusCircle,
            path: "/create-invoice",
            active: "/create-invoice" === pathname,
        },
        {
            label: "Invoice List",
            icon: BsFillHexagonFill,
            path: "/invoice-list",
            active: "/invoice-list" === pathname,
        },
        {
            label: "Add Customer",
            icon: FaAddressBook,
            path: "/add-customer",
            active: "/add-customer" === pathname,
        },
        {
            label: "Customer List",
            icon: PiUserListBold,
            path: "/customer-list",
            active: "/customer-list" === pathname,
        },
        {
            label: "Sales Report",
            icon: TbBoxPadding,
            path: "/sales-report",
            active: "/sales-report" === pathname,
        },
        {
            label: "Registration",
            icon: IoPersonCircleSharp,
            path: "/registration",
            active: "/registration" === pathname,
        }
    ]

    return (
        <aside className="relative lg:w-64 hidden lg:flex flex-col bg-neutral-500 border-neutral-600 border-r py-4">
            <div className="w-full flex items-center px-2 pb-4 gap-4 md:gap-2 lg:gap-4">
                <Image
                    className="h-4 md:h-3 lg:h-4 w-16 md:w-12 lg:w-16 text-neutral-50"
                    alt="Logo"
                    src="/Logo white.png"
                    width={400}
                    height={200}
                />
                <p className="h-5 md:h-4 lg:h-5 font-semibold text-green-200 truncate">
                    Welcome-
                    <span className="lowercase">{user}</span>
                </p>
            </div>
            {
                routes.map((route) => (
                    <Link key={route.label} href={route.path}>
                        <div className={cn(`w-full flex items-center group px-4 py-2 hover:bg-neutral-600 text-neutral-200 hover:text-neutral-50 justify-between`,
                            route.active && "bg-neutral-600"
                        )}>
                            <div className="h-full flex items-center justify-between gap-2">
                                <route.icon className="size-4 h-full items-center text-neutral-200 group-hover:text-neutral-50" />
                                <p className="text-base font-normal">{route.label}</p>
                            </div>
                            <FaChevronRight className={cn(`size-3 hidden group-hover:block`,
                                route.active && "block"
                            )} />
                        </div>
                    </Link>
                ))
            }
        </aside>
    )
}