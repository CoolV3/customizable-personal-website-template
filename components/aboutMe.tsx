import {siteConfig} from "@/config/site.config";
import Headline from "@/components/ui/Headline";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function AboutMeComponent() {
    const {aboutMe} = siteConfig

    useGSAP(() => {
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
    })

    return (
        <div className={`min-h-screen w-full flex flex-col pt-10`}>
            <div className="flex h-screen items-center justify-center ">
                <div className="flex sm:items-start items-center gap-10 sm:flex-row flex-col px-2">
                    <Image src={aboutMe.titleImage}  alt={"Profile Picture"} width={300} height={300} className="rounded-2xl shadow-2xl person-image "/>
                    <div className="flex flex-col sm:items-start items-center">
                        <h1 className="text-5xl font-bold authorName">{aboutMe.fullName}</h1>
                        <p className="authorDescription">{aboutMe.shortDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}