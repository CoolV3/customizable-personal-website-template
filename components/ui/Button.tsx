import {ButtonHTMLAttributes, ReactNode} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode,
    variant?: "primary" | "secondary",
    size?: "sm" | "lg"
}

const tailwindclasses = {
    primary: ""
}
export default function Button({children, variant="primary", size="lg", className="", ...props} :ButtonProps) {

    return(
        <button></button>
    )
}