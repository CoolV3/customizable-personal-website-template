import {siteConfig} from "@/config/site.config";
import {ReactNode} from "react";

const {general} = siteConfig

const tailwindclass = general.headlineGradient + " " + "text-center bg-clip-text font-bold text-transparent"



export default function Headline({children, sizeClass="text-8xl", className="", ...props}: {children: ReactNode, sizeClass: string, className:string}) {

    return(
        <h1 className={tailwindclass + "" + sizeClass} {...props}>{children}</h1>
    )
}