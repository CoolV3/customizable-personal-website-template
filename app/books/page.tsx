"use client"

import BooksOverview from "@/components/productOverview";
import {siteConfig} from "@/config/site.config";

export default function BooksPage() {
    const {general} = siteConfig

    return (
        <div className={"w-full flex items-center justify-center" + " " + general.gradient}>
            <BooksOverview slideIn={true}/>
        </div>
    )
}