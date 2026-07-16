import { ArrowDown } from 'lucide-react';
import {siteConfig} from "@/config/site.config";

export default function KeepScrollingInfo() {
    const {general} = siteConfig

    return(
        <div className="items-center justify-center flex">
            <div className={"p-6 bg-white rounded-full cursor-info group hover:animate-none flex items-center transition-colors duration-1000 animate-bounce" + " " + general.buttonGradient + " " + general.buttonHover}>
                <ArrowDown className="w-10 h-10"/>
                <p className="max-w-0 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:max-w-sm transition-all text-lg whitespace-nowrap duration-500">Keep scrolling through the website</p>
            </div>
        </div>
    )
}