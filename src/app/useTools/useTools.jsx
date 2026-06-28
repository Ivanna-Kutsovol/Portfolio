import React from "react";
import stl from "./useTools.module.scss";
import Image from "next/image";

import Star from "../../../public/star.svg";
const UseTools = () => {

    return (
        <div className={stl.useTools} id="tools">
            <h2 className={stl.useTools__title}>Tools I use</h2>
            <Image src={Star} alt="star" width={54} height={36} className={stl.useTools__star}/>
            <ul className={stl.useTools__list}>
                <li>Photoshop</li>
                <span className={stl.useTools__list__separator}>·</span>
                <li>Blender</li>
                <span className={stl.useTools__list__separator}>·</span>
                <li>Figma</li>
                <span className={stl.useTools__list__separator}>·</span>
                <li>CapCut</li>
            </ul>
        </div>
    );
};

export default UseTools;