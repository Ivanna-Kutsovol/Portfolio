import React, { useState, useEffect } from "react";
import stl from "./skills.module.scss";
import Image from "next/image";

import Line0 from '../../../public/skills/lineIcon/line0.svg';
import Line1 from '../../../public/skills/lineIcon/line1.svg';
import Line2 from '../../../public/skills/lineIcon/line2.svg';
import Line3 from '../../../public/skills/lineIcon/line3.svg';
import Line4 from '../../../public/skills/lineIcon/line4.svg';
import Line5 from '../../../public/skills/lineIcon/line5.svg';

const line = [Line0, Line1, Line2, Line3, Line4, Line5];
const lineNames = ['zero', 'first', 'second', 'third', 'fourth', 'fifth'];

const Skills = () => {
    return (
        <section className={stl.skills} id="skills">
            <section className={stl.skills__text}>
                <h2 className={stl.skills__title}>Using these skills, <span className={stl.skills__highlight}>I craft websites</span></h2>
                <h3 className={stl.skills__subtitle}>that don’t just work — they stand out.</h3>
            </section>
            <section className={stl.skills__container}>
                <div className={stl.skills__icons}>
                    <div className={stl.skills__row}>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/github.svg' alt="github" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/react.svg' alt="react" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/typescript.svg' alt="typescript" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/node.svg' alt="node" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/postman.svg' alt="postman" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/wp.svg' alt="wp" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/git.svg' alt="git" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    </div>
                    <div className={stl.skills__row}>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/figma.svg' alt="figma" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/next.svg' alt="next" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/js.svg' alt="js" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/css3.svg' alt="css3" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/sass.svg' alt="sass" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    <div className={stl.skills__iconWrapper}>
                        <Image src='/skills/icon/mongoDB.svg' alt="mongoDB" width={26} height={26} className={stl.skills__icon}/>
                    </div>
                    </div>
                </div>
                <div className={stl.skills__lines}>
                    {line.map((line, index) => (
                        <Image 
                        src={line} 
                        alt="line" 
                        key={index} 
                        objectFit="fill"
                        className={`${stl.skills__line} ${stl[lineNames[index]]}`}/>
                    ))}
                </div>
                <section className={stl.skills__centerWrapper}>
                <div className={stl.skills__center}>
                    <Image src='/skills/center.svg' alt="center" width={76} height={90} className={stl.skills__centerImg}/>
                    <Image src='/skills/bottomArcZero.svg' alt="bottomArc" width={295} height={165} className={`${stl.skills__bottomArc} ${stl.zero}`}/>
                    <Image src='/skills/bottomArcFirst.svg' alt="bottomArc" width={305} height={275} className={`${stl.skills__bottomArc} ${stl.first}`}/>
                </div>
                <div className={stl.skills__centerLines}>
                    <Image src='/skills/centerLineZero.svg' alt="centerLine" width={695} height={270} className={`${stl.skills__centerLine} ${stl.zero}`}/>
                    <Image src='/skills/centerLIneFirst.svg' alt="centerLine" width={765} height={270} className={`${stl.skills__centerLine} ${stl.first}`}/>
                    <Image src='/skills/centerLineSecond.svg' alt="centerLine" width={881} height={270} className={`${stl.skills__centerLine} ${stl.second}`}/>
                </div>
                <div className={stl.skills__orbit}>
                    <div className={`${stl.skills__orbitIcon} ${stl.ai}`}>
                        <Image src='/skills/orbitIcon/ai.svg' alt="ai" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.code}`}>
                        <Image src='/skills/orbitIcon/code.svg' alt="code" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.css}`}>
                        <Image src='/skills/orbitIcon/css.svg' alt="css" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.figma}`}>
                        <Image src='/skills/orbitIcon/figma.svg' alt="figma" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.google}`}>
                        <Image src='/skills/orbitIcon/google.svg' alt="google" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.in}`}>
                        <Image src='/skills/orbitIcon/in.svg' alt="in" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.js}`}>
                        <Image src='/skills/orbitIcon/js.svg' alt="js" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.node}`}>
                        <Image src='/skills/orbitIcon/node.svg' alt="node" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.react}`}>
                        <Image src='/skills/orbitIcon/react.svg' alt="react" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                    <div className={`${stl.skills__orbitIcon} ${stl.xd}`}>
                        <Image src='/skills/orbitIcon/xd.svg' alt="xd" width={26} height={26} className={stl.skills__iconOrbit}/>
                    </div>
                </div>
                </section>
            </section>
        </section>
    );
};

export default Skills;