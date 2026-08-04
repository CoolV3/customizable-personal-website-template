"use client";

import Link from "next/link";
import { MoveUpRight, Menu } from 'lucide-react';
import {useState} from "react";
import {siteConfig} from "@/config/site.config";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)
    const {nav, aboutMe} = siteConfig
    const links = nav.links


    return(
        <div className="border-b-2 h-20 flex items-center justify-between px-5 bg-white text-black ">
            <div>
                <Link href="/" className="text-3xl font-bold cursor-pointer hover:bg-gray-50 hover:text-gray-950 transition-all">{aboutMe.fullName}</Link>
            </div>
            <div className="sm:flex gap-5 hidden">
                {links.map((link, index) => (
                    <Link href={link.link} key={index} className="cursor-pointer text-2xl flex group items-center ">{link.name} {nav.arrowEffect && (<MoveUpRight className="size-0 group-hover:size-8 transition-all duration-500 delay-100"/>)}</Link>
                ))}
            </div>
            <div className="sm:hidden">
                <Menu className="w-8 h-8 cursor-pointer" onClick={() => setNavOpen(!navOpen)}/>
            </div>

                <div className={`fixed right-0 top-0 h-screen w-80 bg-white text-black shadow-2xl p-6 flex flex-col justify-start ease-in-out duration-500 ${navOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-x-10"}`}>
                    <div className="">
                    <Menu className="w-8 h-8 cursor-pointer fixed right-5 top-5" onClick={() => setNavOpen(!navOpen)}/>
                    </div>
                    <div className="flex-col flex p-10 items-start justify-start h-full gap-10">
                        {links.map((link, index) => (
                            <Link href={link.link} key={index} className="cursor-pointer text-5xl flex group items-center ">{link.name} <MoveUpRight className="size-0 group-hover:size-10 transition-all duration-500 delay-100"/></Link>
                        ))}
                    </div>
                </div>



        </div>
    )
}