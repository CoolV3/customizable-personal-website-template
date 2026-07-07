"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function HomepageGsap() {
    const container = useRef(null);

    useGSAP(
        () => {
            const smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.2,
                smoothTouch: 0.1,
                effects: true,
            });

            /**
             * HERO INTRO TIMELINE
             */
            const heroTl = gsap.timeline();

            heroTl
                .from(".hero-image", {
                    x: -100,
                    autoAlpha: 0,
                    scale: 0.9,
                    duration: 1.1,
                    ease: "power4.out",
                })
                .from(
                    ".hero-title",
                    {
                        y: 80,
                        autoAlpha: 0,
                        duration: 0.9,
                        ease: "power4.out",
                    },
                    "-=0.6"
                )
                .from(
                    ".hero-text",
                    {
                        y: 40,
                        autoAlpha: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-button",
                    {
                        y: 30,
                        autoAlpha: 0,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );

            /**
             * ABOUT SECTION PINNED ANIMATION
             */
            const aboutTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top top",
                    end: "+=1200",
                    scrub: 1,
                    pin: true,
                    markers: true,
                },
            });

            aboutTl
                .from(".about-title", {
                    scale: 0.7,
                    autoAlpha: 0,
                    ease: "none",
                })
                .from(".about-text", {
                    y: 100,
                    autoAlpha: 0,
                    ease: "none",
                })
                .to(".about-title", {
                    scale: 1.15,
                    ease: "none",
                });

            /**
             * BOOK CARDS REVEAL
             */
            gsap.from(".book-card", {
                y: 120,
                autoAlpha: 0,
                scale: 0.9,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".books-grid",
                    start: "top 80%",
                    once: true,
                    markers: true,
                },
            });

            /**
             * HORIZONTAL SCROLL ONLY ON DESKTOP
             */
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                gsap.to(".horizontal-track", {
                    xPercent: -66.666,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".horizontal-section",
                        start: "top top",
                        end: "+=2000",
                        scrub: 1,
                        pin: true,
                        markers: true,
                    },
                });
            });

            /**
             * MOBILE VERSION FOR HORIZONTAL SECTION
             * On mobile, cards just fade in normally.
             */
            mm.add("(max-width: 767px)", () => {
                gsap.from(".horizontal-panel", {
                    y: 80,
                    autoAlpha: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".horizontal-section",
                        start: "top 80%",
                        once: true,
                        markers: true,
                    },
                });
            });

            /**
             * FINAL CTA
             */
            gsap.from(".cta-content", {
                y: 100,
                autoAlpha: 0,
                scale: 0.95,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".cta-section",
                    start: "top 75%",
                    once: true,
                    markers: true,
                },
            });

            return () => {
                smoother.kill();
                mm.revert();
            };
        },
        { scope: container }
    );

    return (
        <main
            ref={container}
            className="min-h-screen overflow-x-hidden bg-zinc-950 text-white"
        >
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* HERO */}
                    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950" />

                        <div
                            data-speed="0.8"
                            className="absolute left-10 top-20 hidden h-40 w-40 rounded-full bg-purple-500/20 blur-3xl md:block"
                        />

                        <div
                            data-speed="1.2"
                            className="absolute bottom-20 right-10 hidden h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl md:block"
                        />

                        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                            <div className="hero-image overflow-hidden rounded-3xl shadow-2xl">
                                /testImage.jpg
                            </div>

                            <div className="text-center md:text-left">
                                <p className="hero-text mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                                    German Author
                                </p>

                                <h1 className="hero-title text-5xl font-black leading-none md:text-7xl lg:text-8xl">
                                    Monika Meier
                                </h1>

                                <p className="hero-text mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                                    An author based in Germany, creating emotional stories about
                                    identity, memory, courage, and human connection.
                                </p>

                                <button className="hero-button mt-8 rounded-full bg-white px-8 py-4 font-bold text-zinc-950 transition hover:bg-purple-200">
                                    Discover Books
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* PINNED ABOUT SECTION */}
                    <section className="about-section flex min-h-screen items-center justify-center bg-zinc-900 px-6">
                        <div className="max-w-4xl text-center">
                            <h2 className="about-title text-5xl font-black leading-none md:text-7xl lg:text-8xl">
                                Stories That Stay
                            </h2>

                            <p className="about-text mt-8 text-lg leading-relaxed text-zinc-300 md:text-2xl">
                                Her books explore quiet emotions, strong characters, and the
                                small moments that change everything. Each story invites readers
                                into a world that feels intimate, cinematic, and deeply human.
                            </p>
                        </div>
                    </section>

                    {/* BOOK GRID */}
                    <section className="min-h-screen bg-zinc-950 px-6 py-24">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-16 text-center">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                                    Collection
                                </p>
                                <h2 className="mt-4 text-4xl font-black md:text-6xl">
                                    Featured Books
                                </h2>
                            </div>

                            <div className="books-grid grid grid-cols-1 gap-8 md:grid-cols-3">
                                <article className="book-card rounded-3xl bg-zinc-900 p-5 shadow-2xl">
                                    /testImage.jpg
                                    <h3 className="mt-6 text-2xl font-bold">Book One</h3>
                                    <p className="mt-3 text-zinc-400">
                                        A quiet emotional journey about memory and belonging.
                                    </p>
                                </article>

                                <article className="book-card rounded-3xl bg-zinc-900 p-5 shadow-2xl">
                                    /testImage.jpg
                                    <h3 className="mt-6 text-2xl font-bold">Book Two</h3>
                                    <p className="mt-3 text-zinc-400">
                                        A poetic story about courage, family, and change.
                                    </p>
                                </article>

                                <article className="book-card rounded-3xl bg-zinc-900 p-5 shadow-2xl">
                                    /testImage.jpg
                                    <h3 className="mt-6 text-2xl font-bold">Book Three</h3>
                                    <p className="mt-3 text-zinc-400">
                                        A cinematic novel about hope and second chances.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* HORIZONTAL SCROLL SECTION */}
                    <section className="horizontal-section overflow-hidden bg-purple-950 md:h-screen">
                        <div className="horizontal-track flex flex-col md:h-full md:w-[300vw] md:flex-row">
                            <div className="horizontal-panel flex min-h-screen w-full items-center justify-center bg-purple-950 px-6 md:w-screen">
                                <div className="max-w-3xl text-center">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-200">
                                        Chapter 01
                                    </p>
                                    <h2 className="mt-6 text-5xl font-black md:text-8xl">
                                        The Beginning
                                    </h2>
                                    <p className="mt-6 text-lg text-purple-100 md:text-xl">
                                        Every story begins with one small moment.
                                    </p>
                                </div>
                            </div>

                            <div className="horizontal-panel flex min-h-screen w-full items-center justify-center bg-indigo-950 px-6 md:w-screen">
                                <div className="max-w-3xl text-center">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
                                        Chapter 02
                                    </p>
                                    <h2 className="mt-6 text-5xl font-black md:text-8xl">
                                        The Conflict
                                    </h2>
                                    <p className="mt-6 text-lg text-indigo-100 md:text-xl">
                                        Characters are shaped by the choices they fear most.
                                    </p>
                                </div>
                            </div>

                            <div className="horizontal-panel flex min-h-screen w-full items-center justify-center bg-zinc-950 px-6 md:w-screen">
                                <div className="max-w-3xl text-center">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-300">
                                        Chapter 03
                                    </p>
                                    <h2 className="mt-6 text-5xl font-black md:text-8xl">
                                        The Change
                                    </h2>
                                    <p className="mt-6 text-lg text-zinc-300 md:text-xl">
                                        The final pages reveal who the characters have become.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="cta-section flex min-h-screen items-center justify-center bg-zinc-950 px-6">
                        <div className="cta-content max-w-3xl rounded-[2rem] bg-white p-10 text-center text-zinc-950 shadow-2xl md:p-16">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
                                Newsletter
                            </p>
                            <h2 className="mt-4 text-4xl font-black md:text-6xl">
                                Stay Updated
                            </h2>
                            <p className="mt-6 text-lg text-zinc-600">
                                Get updates about new books, readings, events, and behind the
                                scenes writing notes.
                            </p>

                            <button className="mt-8 rounded-full bg-zinc-950 px-8 py-4 font-bold text-white transition hover:bg-purple-700">
                                Subscribe
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}