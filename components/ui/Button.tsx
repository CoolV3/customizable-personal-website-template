import {ButtonHTMLAttributes, ReactNode} from "react";
import {siteConfig, SiteConfig} from "@/config/site.config";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode,
    variant?: "primary" | "secondary",
    size?: "md" | "lg"
}

const {general} = siteConfig

const tailwindclasses = {
    primary: general.buttonGradient+ " " + general.buttonHover + " rounded-2xl cursor-pointer transition-colors duration-700 ",
    secondary: general.buttonGradient + general.buttonHover + " "
}
const buttonSizes = {
    md: "text-lg px-10 py-4 ",
    lg: "text-3xl px-15 py-6 ",
}
export default function Button({children, variant="primary", size="md", className="", ...props} :ButtonProps) {


    return(
        <button className={"text-black " + tailwindclasses[variant]+ " " + buttonSizes[size] + className} {...props}>{children}</button>
    )
}