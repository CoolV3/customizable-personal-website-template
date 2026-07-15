"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useRef} from "react";
import {siteConfig} from "@/config/site.config";


gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function ProductOverview({slideIn}: {slideIn: boolean}) {
    const container = useRef(null);
    const {books} = siteConfig

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

            if (slideIn)  {
                const bookTimeline = gsap.timeline({
                    defaults: {
                        duration: 0.5
                    }


                })
            books.forEach((book) => {
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
            })
            } else {


                const items = gsap.utils.toArray(".bookItem");

                items.forEach((item) => {
                    const el = item as HTMLElement;

                    const bookTimeline = gsap.timeline({
                        defaults: {
                            duration: 0.5
                        },
                        scrollTrigger: {
                            trigger: el,
                            start: "top 100%",
                            end: "top 50%",
                            markers: true,
                            scrub: 1,
                        }})
                    bookTimeline
                        .from(el.querySelector(".bookImage"), {
                            y: 120,
                            opacity: 0,
                        })
                        .from(el.querySelector(".bookTitle"), {
                            y: 120,
                            opacity: 0,
                        })
                        .from(el.querySelector(".bookDescription"), {
                            y: 120,
                            opacity: 0,
                        })
                        .from(el.querySelector(".bookBuyButton"), {
                            y: 120,
                            opacity: 0,
                            scale: 0,
                        });
                });
            }

        },
        { scope: container, dependencies: [slideIn], revertOnUpdate: true })


    return (
        <div className="flex items-center justify-center w-full h-full text-white">
            <div ref={container} className={`bookSection overflow-x-hidden flex flex-col gap-5 min-h-screen h-auto w-screen items-center justify-center py-10 px-2`}>
                <section className="rounded-2xl p-2 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-14">
                    <div className="flex flex-col gap-10">
                    {books.map((book, index) => (
                        <div key={index} className="flex gap-10 bookItem">
                            <Image src={book.titleImage} alt={"Profile Picture"} width={300} height={300}  className="image object-cover rounded-2xl bookImage lg:w-150 lg:h-200"/>
                            <div className="flex flex-col md:items-start items-center">
                                <h1 className="text-5xl font-bold bookTitle lg:text-7xl title">{book.title}</h1>
                                <p className="py-3 bookDescription max-w-200 lg:text-lg md:text-start text-center description">{book.shortDescription}</p>
                                <div className="pt-10">
                                    <Link href={book.buyUrl} className="bookBuyButton buyButton px-10 py-3 bg-yellow-400 rounded-2xl text-4xl lg:text-4xl text-black hover:bg-yellow-300 transition-colors">{book.buyButtonText}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </section>
            </div>
        </div>
    )
}