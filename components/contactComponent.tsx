"use client";

import Link from "next/link";
import {Mail, MailOpen} from "lucide-react"

export default function ContactComponent() {

    return (
        <div className="min-h-screen text-black flex items-center justify-center flex-col gap-10 bg-linear-to-br from-yellow-500 to-violet-400">
            <h1 className="text-5xl">Schreibe mir eine Email</h1>
            <Link className="bg-linear-to-br  from-yellow-500 to-yellow-400  gap-5 hover:to-yellow-200 transition-colors duration-700 px-10 py-5 rounded-2xl text-lg group flex items-center" href="mailto:email@example.com">Öffne dein Email Programm
                <span className="relative w-10 h-10">
                    <Mail className="absolute inset-0 w-10 h-10 group-hover:opacity-0 group-hover:relative transition-all duration-200"/>
                    <MailOpen className="absolute inset-0 w-10 h-10 group-hover:opacity-100 opacity-0 transition-all duration-200"/>
                </span>
            </Link>
        </div>
    )
}