import React from "react";
import type { Metadata } from "next";

import CreativeContent from "../CreativeContent";
import About from "../about/about";
import Contact from "../contact/contact";

export const metadata : Metadata = {
    title: "Creative Portfolio | Ivanna Kutsovol",
    description:
    "Creative portfolio of Ivanna Kutsovol featuring brand identity, Instagram content, visual design, motion, and digital creative work.",
};

export default function CreativePage() {
    return (
    <>
        <About isCreative={true} />
        <main>
            <CreativeContent />
        </main>
        <Contact />
    </>
    );
}