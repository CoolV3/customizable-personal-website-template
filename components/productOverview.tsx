"use client";

import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { siteConfig } from "@/config/site.config";
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductOverviewProps = {
    slideIn?: boolean;
};

export default function ProductOverview({
                                            slideIn = false,
                                        }: ProductOverviewProps) {
    const container = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const { books } = siteConfig;

    useGSAP(
        () => {
            const bookItems =
                gsap.utils.toArray<HTMLElement>(".bookItem");

            bookItems.forEach((bookItem, index) => {
                const image =
                    bookItem.querySelector<HTMLElement>(".bookImage");

                const title =
                    bookItem.querySelector<HTMLElement>(".bookTitle");

                const description =
                    bookItem.querySelector<HTMLElement>(".bookDescription");

                const button =
                    bookItem.querySelector<HTMLElement>(".bookBuyButton");

                const textElements = [title, description, button].filter(
                    (element): element is HTMLElement => element !== null,
                );

                if (slideIn) {
                    const timeline = gsap.timeline({
                        defaults: {
                            duration: 0.7,
                            ease: "power3.out",
                        },
                        delay: index * 0.15,
                    })


                        timeline
                            .from(image, {
                            autoAlpha: 0,
                            x: -80,
                            scale: 0.96,
                        })

                            .from(textElements, {
                                    autoAlpha: 0,
                                    x: 80,
                                    stagger: 0.12,
                                })


                    return;
                }


                const timeline = gsap.timeline({
                    defaults: {
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    scrollTrigger: {
                        trigger: bookItem,
                        start: "top 85%",
                    },
                });


                timeline
                    .from(image, {
                        autoAlpha: 0,
                    y: 60,
                    scale: 0.96,
                    })

                    .from(textElements, {
                        autoAlpha: 0,
                        y: 50,
                        stagger: 0.12,
                    },
                );

            });

            ScrollTrigger.refresh();
        },
        {
            scope: container,
            dependencies: [slideIn],
            revertOnUpdate: true,
        },
    );

    return (
        <section ref={container} className="bookSection">
            <div className="flex w-full flex-col gap-16 pt-25 ">
                {books.map((book, index) => (
                    <article key={`${book.title}-${index}`} className="bookItem flex w-full flex-col items-center gap-8 sm:flex-row sm:items-start lg:gap-12">
                        <div className="w-full max-w-64 shrink-0 sm:w-56 lg:w-72">
                            <Image src={book.titleImage} width={600} height={900} alt={"Title of the Produkt"} className="bookImage aspect-2/3 h-auto w-full rounded-2xl object-cover shadow-xl"/>
                        </div>

                        <div className="flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left">
                            <Headline className="bookTitle" sizeClass="text-3xl sm:text-4xl lg:text-5xl">{book.title}</Headline>
                            <p className="bookDescription mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{book.shortDescription}</p>
                            <div className="mt-8">
                                <Button type="button" onClick={() => router.push(book.buyUrl)} className="bookBuyButton" size="lg">{book.buyButtonText}</Button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}