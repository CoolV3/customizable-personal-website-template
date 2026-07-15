import AboutMeComponent from "@/components/aboutMe";
import {siteConfig} from "@/config/site.config";

export default function AboutMePage() {
    const {general, aboutMe} = siteConfig

    return (
        <div className={`min-h-screen w-full flex flex-col pt-10 ${general.gradient}`}>
            <AboutMeComponent/>
        </div>
    )
}