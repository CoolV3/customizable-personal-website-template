import {siteConfig} from "@/config/site.config";
import { FaTelegram, FaGithub, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    const {footer} = siteConfig
    const icons = footer.icons
    const iconclass = `w-10 h-10 ${footer.hoverEffect && "hover:scale-120 transition-all"}`
    return (
        <div className={"h-100 "}>
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
    )
}