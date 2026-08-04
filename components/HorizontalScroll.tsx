"use client";

import {useGSAP} from "@gsap/react";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
import {useRef} from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

type ScroolContent = {
    title: string
    description: string
    bgcolor?: string
}

export default function HorizontalScroll({ content }: { content: ScroolContent[] } ) {

    const container = useRef(null);
    const horizontalScrollTrack = useRef<HTMLDivElement>(null)
    useGSAP(
        () => {
            const isMobile = window.matchMedia("(max-width: 767px)").matches;
            const horizontalTrack = horizontalScrollTrack.current


            if (!isMobile) {

                if (horizontalTrack == null) {
                    return
                }

                gsap.to(horizontalTrack, {
                    x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".horizontalSection",
                        start: "top top",
                        scrub: 2,
                        end: () => `+=${horizontalTrack.scrollWidth - window.innerWidth}`,
                        pin: true,
                        markers: true,
                        invalidateOnRefresh: true,
                    },
                });
            }
        },
        { scope: container }
    );

    return(
        <div ref={container} className="horizontalScroller">
            <section className="horizontalSection min-h-screen h-auto w-full overflow-hidden ">
                <div className="horizontalTrack flex md:flex-row h-auto flex-col" ref={horizontalScrollTrack}>
                    {content.map((card, index) => (
                        <div key={index} className={`min-h-100 flex md:h-screen w-screen shrink-0 flex-col items-center justify-center text-center ${card.bgcolor}`}>
                            <h1 className="text-4xl font-bold text-black lg:text-7xl">{card.title}</h1>
                            <p className="mt-4 text-black lg:text-2xl text-lg">{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}