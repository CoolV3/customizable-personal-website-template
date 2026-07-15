import {siteConfig} from "@/config/site.config";


export default function AboutMeComponent() {
    const {general, aboutMe} = siteConfig

    return (
        <div className={`min-h-screen w-full flex flex-col pt-10 ${general.gradient}`}>
            <h1 className="text-8xl text-center bg-clip-text font-bold bg-linear-to-br from-yellow-500 to-yellow-700 text-transparent">About me</h1>
        </div>
    )
}