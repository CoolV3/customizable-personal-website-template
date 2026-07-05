import Link from "next/link";
import { MoveUpRight } from 'lucide-react';

export default function Navbar() {

    const links = [
        {
            name: "Über Mich",
            link: "/aboutme"
        },
        {
            name: "Meine Bücher",
            link: "/books"
        },
        {
            name: "Kontakt",
            link: "/contact"
        },
    ]

    return(
        <div className="border-b-2 h-20 flex items-center justify-between px-5 bg-white text-black">
            <div>
                <h1 className="text-3xl font-bold cursor-pointer">Monika Meier</h1>
            </div>
            <div className="flex gap-5">
                {links.map((link, index) => (
                    <Link href={link.link} key={index} className="cursor-pointer text-2xl flex group items-center ">{link.name} <MoveUpRight className="size-0 group-hover:size-8 transition-all duration-500 delay-100"/></Link>
                ))}
            </div>
        </div>
    )
}