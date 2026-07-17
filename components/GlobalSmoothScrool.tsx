"use client";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import {ReactNode, useRef} from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);


export default function GlobalSmoothScrool({children}: {children: ReactNode}) {

    const container = useRef(null)
    useGSAP(() => {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;

        if (!isMobile) {
            const smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.3,
                effects: true,
            });
        }
    })

    return (
        <div ref={container} id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    )
}