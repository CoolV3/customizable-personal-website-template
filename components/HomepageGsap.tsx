"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import MotionPathPlugin from "gsap/MotionPathPlugin"
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, MotionPathPlugin);

export default function HomepageGsap() {
    const container = useRef(null);

    useGSAP(
        () => {
            const smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.3,
                effects: true,
            });

            gsap.from(".person-image", {
                x: -80,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            });

            gsap.from(".authorName", {
                y: -20,
                opacity: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out"
            })
            gsap.from(".authorDescription", {
                y: -50,
                opacity: 0,
                delay: 1.5,
                ease: "power3.out"
            })

            gsap.from(".bookSection", {
                scale: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: ".bookSection",
                    start: "top 110%",
                    end: "top 50%",
                    scrub: true,
                }
            })

            gsap.from(".book1", {
                y: 120,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".book1",
                    start: "top 80%",
                    end: "top 35%",
                    scrub: true,
                    markers: true,
                },
            });

            return () => {
                smoother.kill();
            };
        },
        { scope: container }
    );

    return (
        <main ref={container} className="overflow-x-hidden">
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <section  className="flex h-screen  items-center justify-center">
                        <div className="flex items-start gap-10">
                            <Image src={"/testImage.jpg"} alt={"Profile Picture"} width={300} height={300} className="rounded-2xl shadow-2xl person-image "/>
                            <div>
                                <h1 className="text-5xl font-bold authorName">Monika Meier</h1>
                                <p className="authorDescription">An Authorin based in Germany that enjoys writing books.</p>
                            </div>
                        </div>
                    </section>
                    <section className="bookSection flex flex-col gap-5 bg-gray-600 h-screen items-center justify-start py-10 text-white px-2">
                        <div className="flex items-start gap-10 book1 max-w-200">
                            <Image src={"/testImage.jpg"} alt={"Profile Picture"} width={300} height={300} className="rounded-2xl"/>
                            <div>
                                <h1 className="text-5xl font-bold">Book Name</h1>
                                <p>Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description </p>
                            </div>
                        </div>
                    </section>
                    <section className="h-screen">
                        <div>

                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}