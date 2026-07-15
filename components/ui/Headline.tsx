import {siteConfig} from "@/config/site.config";
import {ReactNode} from "react";

const {general} = siteConfig

const tailwindclass = general.headlineGradient + " " + "text-8xl text-center bg-clip-text font-bold text-transparent"



export default function Headline({children, className="", ...props}: {children: ReactNode, className:string}) {

    return(
        <h1 className={tailwindclass} {...props}>{children}</h1>
    )
}