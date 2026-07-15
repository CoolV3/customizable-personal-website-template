"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useRef} from "react";
import {siteConfig} from "@/config/site.config";
import Button from "@/components/ui/Button";
import {useRouter} from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function ProductOverview({slideIn}: {slideIn: boolean}) {
    const container = useRef(null);
    const {books} = siteConfig

    const router = useRouter()


    useGSAP(
        () => {

            if (slideIn)  {
                const items = gsap.utils.toArray(".bookItem");

            items.forEach((item) => {
                const el = item as HTMLElement;

                const bookTimeline = gsap.timeline({
                    defaults: {
                        duration: 0.5
                    }
                })

                bookTimeline
                    .from(el.querySelector(".bookImage"), {
                        opacity: 0,
                        x: -120
                    })
                    .from(el.querySelector(".bookTitle"), {
                        opacity: 0,
                        x: 120
                    })
                    .from(el.querySelector(".bookDescription"), {
                        opacity: 0,
                        x: 120
                    })
                    .from(el.querySelector(".bookBuyButton"), {
                        opacity: 0,
                        size: 0,
                        duration: 3,
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
                                <h1 className="text-5xl font-bold bookTitle lg:text-7xl ">{book.title}</h1>
                                <p className="py-3 bookDescription max-w-200 lg:text-lg md:text-start text-center description">{book.shortDescription}</p>
                                <div className="pt-10">
                                    <Button onClick={() => router.push(book.buyUrl)} className="bookBuyButton" size="lg">{book.buyButtonText}</Button>
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