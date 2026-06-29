"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/utils/analytics";
import { useTheme } from "@/components/theme/ThemeProvider";

const sections = [
    "about",
    "experience",
    "skills",
    "project",
    "featuredWork",
    "instContent",
    "tools",
    "identity",
    "contact",
];

export default function SectionViewTracker() {
    const { isCreative } = useTheme();
    const viewedSections = useRef<Set<string>>(new Set());

    useEffect(() => {
        const mode = isCreative ? "creative" : "frontend";

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const section = entry.target.id;
                    const key = `${mode}_${section}`;

                    if (viewedSections.current.has(key)) return;

                    viewedSections.current.add(key);

                    trackEvent("section_view", {
                        section,
                        mode,
                    });
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [isCreative]);

    return null;
}