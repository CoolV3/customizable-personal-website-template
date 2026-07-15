"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Image from "next/image";
import Link from "next/link";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProductOverview from "@/components/productOverview";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function HomepageGsap() {
    const container = useRef(null);

    const cardItems = [
        {
            title: "Title 1",
            description: "Description 1",
            bgcolor: ""
        },
        {
            title: "Title 2",
            description: "Description 2",
            bgcolor: ""
        },
        {
            title: "Title 3",
            description: "Description 3",
            bgcolor: ""
        }
    ]

    useGSAP(
        () => {
            const isMobile = window.matchMedia("(max-width: 767px)").matches;


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



            const newsletter = gsap.timeline({
                scrollTrigger: {
                    trigger: ".newsletterSection",
                    start: "top top",
                    end: "+=1000",
                    pin: true,
                    markers: true
                }
            })
            newsletter
                .from(".card", {
                    opacity: 0,
                    scale: 0
                })
                .from(".newsTitle", {
                    y: 120,
                    opacity: 0
                })
                .from(".newsSubTitle", {
                    y: 50,
                    opacity: 0
                })
                .from(".newsEmailLabel", {
                    x: -100,
                    opacity: 0
                })
                .from(".newsEmailInput", {
                    x: -80,
                    opacity: 0
                })
                .from(".newsButton", {
                    opacity: 0,
                    scale: 0
                })

            return () => {
                smoother.kill();
            };
        },
        { scope: container }
    );

    return (
        <main ref={container} className="overflow-x-hidden pt-10">
            <div id="smooth-wrapper">
                <div id="smooth-content" className="bg-linear-to-br from-yellow-500 to-violet-400">
                    <section  className="flex h-screen items-center justify-center ">
                        <div className="flex sm:items-start items-center gap-10 sm:flex-row flex-col px-2">
                            <Image  src={"/testImage.jpg"}  alt={"Profile Picture"} width={300} height={300} className="rounded-2xl shadow-2xl person-image "/>
                            <div className="flex flex-col sm:items-start items-center">
                                <h1 className="text-5xl font-bold authorName">Monika Meier</h1>
                                <p className="authorDescription">An Authorin based in Germany that enjoys writing books.</p>
                            </div>
                        </div>
                    </section>
                    <section className="backdrop-blur-2xl relative overflow-x-hidden flex flex-col gap-5 min-h-screen h-auto items-center justify-center py-10 text-white px-2 ">
                        <ProductOverview slideIn={false}/>
                    </section>
                    <section className="min-h-screen h-auto w-full">
                        <h1 className="text-6xl text-black font-bold text-center">From the Book</h1>
                        <HorizontalScroll content={cardItems}/>
                    </section>
                    <section className="h-screen flex items-center justify-center newsletterSection">
                        <div className="card p-5 flex flex-col items-center justify-start shadow-2xl rounded-2xl min-w-50 min-h-60 gap-3">
                            <div className="flex flex-col items-center">
                                <h1 className="text-4xl newsTitle">Newsletter</h1>
                                <p className="newsSubTitle">Bleib Informiert</p>
                            </div>
                            <div>
                                <p className="text-lg newsEmailLabel">Email</p>
                                <input type="email" placeholder="mustermann@example.com" className="newsEmailInput text-lg border-2 rounded-2xl p-4"/>
                            </div>
                            <button className="newsButton text-lg px-10 py-4 bg-linear-to-br  from-yellow-500 to-yellow-400 hover:to-yellow-200 rounded-2xl cursor-pointer transition-colors duration-700">Sign up!</button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}