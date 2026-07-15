import {siteConfig} from "@/config/site.config";
import Headline from "@/components/ui/Headline";

export default function AboutMeComponent() {
    const {general, aboutMe} = siteConfig

    return (
        <div className={`min-h-screen w-full flex flex-col pt-10 ${general.gradient}`}>
            <Headline className="">About me</Headline>
        </div>
    )
}