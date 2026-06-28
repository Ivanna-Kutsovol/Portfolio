import React from "react";
import Link from "next/link";
import stl from "./button.module.scss";

export const Button = ({
    text,
    onClick,
    targetId,
    align = "right",
    circle,
    href
}: {
    text: string,
    onClick?: () => void,
    targetId?: string,
    align?: "left" | "right",
    circle?: boolean,
    href?: string
}) => {
    const className = `${stl.button} ${align === "left" ? stl.left : stl.right}`;

    const content = (
        <>
            <div className={`${circle ? stl.button__circle : ""} ${align === "left" ? stl.circleRight : ""}`} />
            {text}
        </>
    );

    const handleClick = () => {
        if (targetId) {
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth"
            });
        }

        onClick?.();
    };

    if (href) {
        return (
            <Link href={href} className={className} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button className={className} onClick={handleClick}>
            {content}
        </button>
    );
};