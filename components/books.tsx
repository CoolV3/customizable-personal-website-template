"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import {useRef} from "react";
import HorizontalScroll from "@/components/HorizontalScroll";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);


export default function BooksOverview() {
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
            const bookTimeline = gsap.timeline({
                defaults: {
                    duration: 1
                }
            })

            bookTimeline
                .from(".image", {
                    opacity: 0,
                    x: -120
                })
                .from(".title", {
                    opacity: 0,
                    x: 120
                })
                .from(".description", {
                    opacity: 0,
                    x: 120
                })
                .from(".buyButton", {
                    opacity: 0,
                    size: 0,
                    duration: 3
                })
        },
        { scope: container })

    return (
        <div className="flex items-center justify-center w-full h-full text-white">
            <div ref={container} className="bookSection overflow-x-hidden flex flex-col gap-5 bg-linear-to-br from-yellow-500 to-violet-400 min-h-screen h-auto w-screen items-center justify-center py-10 px-2">
                <section className="rounded-2xl shadow-2xl p-2 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-14">
                    <Image src={"/testImage.jpg"} alt={"Profile Picture"} width={300} height={300}  className="image object-cover rounded-2xl bookImage lg:w-150 lg:h-200"/>
                    <div className="flex flex-col md:items-start items-center">
                        <h1 className="text-5xl font-bold bookTitle lg:text-7xl title">Book Name</h1>
                        <p className="py-3 bookDescription max-w-200 lg:text-lg md:text-start text-center description">Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description Book Description </p>
                        <div className="pt-10">
                            <Link href="https://amazon.de" className="bookBuyButton buyButton px-10 py-3 bg-yellow-400 rounded-2xl text-4xl lg:text-4xl text-black hover:bg-yellow-300 transition-colors">Einkaufen</Link>
                        </div>
                    </div>
                </section>
                <section className="min-h-screen h-auto w-full">
                    <HorizontalScroll content={cardItems}/>
                </section>
            </div>
        </div>
    )
}