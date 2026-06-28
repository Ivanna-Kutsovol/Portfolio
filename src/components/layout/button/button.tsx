import React from "react";
import stl from "./button.module.scss";

export const Button = ({
    text, 
    onClick,
    targetId,
    align = "right",
    circle,
}: {
    text: string, 
    onClick: () => void,
    targetId?: string,
    align?: "left" | "right",
    circle?: boolean,
}) => {

    const handleClick = () => {
        if(targetId){
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth"
            });
        }
        onClick?.();
    };

    return(
        <button className={`${stl.button} ${align === "left" ? stl.left : stl.right}`} 
        onClick={handleClick}>
            <div className={`${circle ? stl.button__circle : ""} ${align === "left" ? stl.circleRight : ""}`}/>
            {text}
        </button>
    )
};
