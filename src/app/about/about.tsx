'use client';

import React, {useState, useEffect} from "react";
import stl from "./about.module.scss";
import Image from "next/image";

import Iam from "../../../public/about/iam.png";

type AboutProps = {
    isCreative: boolean;
};

function About({isCreative}: AboutProps){
    const text = "I'm a Frontend Developer & Visual Creative.";
    const speed = 100;
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[index]);
                setIndex(prev => prev + 1);
            }, speed)
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);
    return(
        <section className={stl.about} id="about">
            <section className={stl.about__first}>
                <div className={`${stl.about__containerImage} ${isCreative ? stl.creativeImage : ""}`}>
                    <h1 className={stl.about__title}>Hello! I Am <span className={stl.about__name}>Ivanna</span> </h1>
                    <Image className={stl.about__iam} src={Iam} alt="Ivanna" width={165} height={223}/>
                </div>
            
            <div className={stl.about__text}>
                <h2 className={stl.about__subtitle}>A Digital Creative who</h2>
                <h3 className={stl.about__highlight}>Builds brands through <span>UI</span>...</h3>
                <h4 className={stl.about__quote}>Because every business deserves a website people remember</h4>
            </div>
            </section>
            <div className={stl.about__bio}>
                <p className={stl.about__bio__title}>{displayText}
                    <span className={stl.about__bio__cursor}>|</span></p>
                <p className={stl.about__bio__text}>  I create websites, visual identities, and digital content for businesses, creators, and personal brands — combining development, design, and storytelling into one experience.</p>
            </div>
        </section>
    )
}

export default About;
