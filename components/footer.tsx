import {siteConfig} from "@/config/site.config";
import { FaTelegram, FaGithub, FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Headline from "@/components/ui/Headline";
import {MoveUpRight} from "lucide-react";

export default function Footer() {
    const {footer, nav, aboutMe} = siteConfig
    const icons = footer.icons
    const iconclass = `w-10 h-10 ${footer.hoverEffect && "hover:scale-120 transition-all"}`
    const links = nav.links
    return (
        <div>
            <div className="h-100 p-5 flex justify-between pb-20">
                <div className="flex flex-col justify-between">
                    <div>
                        <Headline className="text-start" sizeClass="text-5xl">Max Mustermann</Headline>
                        <p className="text-lg">{aboutMe.shortDescription}</p>
                    </div>
                    <div className="flex items-start justify-start gap-3">
                        {icons.map((icon, index) => (
                            icon.enabled && (
                                <Link href={icon.link} key={index}>
                                    {icon.icon == "telegram" && (
                                        <FaTelegram className={iconclass}/>
                                    )}
                                    {icon.icon == "instagram" && (
                                        <FaInstagram className={iconclass}/>
                                    )}
                                    {icon.icon == "github" && (
                                        <FaGithub className={iconclass}/>
                                    )}
                                </Link>
                            )
                        ))}
                    </div>
                </div>

                    <div className="flex gap-5 justify-center flex-col pr-5">
                        {links.map((link, index) => (
                            <Link href={link.link} key={index} className="cursor-pointer text-3xl flex group items-center ">{link.name} {nav.arrowEffect && (<MoveUpRight className="size-0 group-hover:size-8 transition-all duration-500 delay-100"/>)}</Link>
                        ))}
                    </div>

            </div>
        </div>
    )
}