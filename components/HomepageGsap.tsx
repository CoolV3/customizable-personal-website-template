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
import Button from "@/components/ui/Button";
import AboutMeComponent from "@/components/aboutMe";
import Headline from "@/components/ui/Headline";
import KeepScrollingInfo from "@/components/keepScrollingInfo";
import {siteConfig} from "@/config/site.config";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function HomepageGsap() {
    const container = useRef(null);
    const {bookSamples} = siteConfig

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


        },
        { scope: container }
    );

    return (
        <main ref={container} className="overflow-x-hidden pt-10">
            <div>
                <div className="">
                    <AboutMeComponent/>
                    <KeepScrollingInfo/>
                    <div className="flex min-h-screen h-auto items-center justify-center text-white">
                        <ProductOverview slideIn={false}/>
                    </div>
                    <div className="min-h-screen h-auto w-full">
                        <Headline className="text-6xl text-black font-bold text-center">From the Book</Headline>
                        <HorizontalScroll content={bookSamples}/>
                    </div>
                    <div className="h-screen flex items-center justify-center newsletterSection">
                        <div className="card p-5 flex flex-col items-center justify-start shadow-2xl rounded-2xl min-w-50 min-h-60 gap-3">
                            <div className="flex flex-col items-center">
                                <h1 className="text-4xl newsTitle">Newsletter</h1>
                                <p className="newsSubTitle">Bleib Informiert</p>
                            </div>
                            <div>
                                <p className="text-lg newsEmailLabel">Email</p>
                                <input type="email" placeholder="mustermann@example.com" className="newsEmailInput text-lg border-2 rounded-2xl p-4"/>
                            </div>
                            <Button className="newsButton">Sign up!</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}