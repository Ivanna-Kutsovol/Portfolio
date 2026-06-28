import React from "react";
import stl from "./identity.module.scss";

import Image from "next/image";

import name from "../../../public/brandIdentity/name.svg";
import logo from "../../../public/brandIdentity/logoColor.svg";
import inst from "../../../public/brandIdentity/inst.png";
import tshirt from "../../../public/brandIdentity/tshirt.png";

import aaimpact from "../../../public/brandIdentity/aaImpact.svg";
import impact from "../../../public/brandIdentity/impact.png";
import aamontserrat from "../../../public/brandIdentity/aaMontserrat.svg";
import montserrat from "../../../public/brandIdentity/montserratSemiBold.png";
import aaeveleth from "../../../public/brandIdentity/aaEveleth.svg";
import eveleth from "../../../public/brandIdentity/evelethSlant.png";

import paper from "../../../public/brandIdentity/paper.png";
import plaster from "../../../public/brandIdentity/plaster.png";
import concrete from "../../../public/brandIdentity/concrete.png";

const Identity = () => {
    return (
        <div className={stl.identity} id="identity">
            <h2 className={stl.identity__title}>Brand Identity</h2>

            
                <Image src={name} alt="name" width={400} height={59} className={stl.identity__name}/>
                <div className={stl.identity__container}>
                <div className={stl.row}>
                    <Image src={logo} alt="logo" width={125} height={133} className={stl.identity__logo}/>
                    <div className={stl.font}>
                        <div className={stl.font__container}>
                            <Image src={aaimpact} alt="Aa impact" className={stl.font__text}/>
                            <Image src={impact} alt="impact" className={stl.font__text}/>
                        </div>
                        <div className={stl.font__container}>
                            <Image src={aamontserrat} alt="Aa montserrat" className={stl.font__text}/>
                            <Image src={montserrat} alt="montserrat" className={stl.font__text}/>
                        </div>
                        <div className={stl.font__container}>
                            <Image src={aaeveleth} alt="Aa eveleth" className={stl.font__text}/>
                            <Image src={eveleth} alt="eveleth" className={stl.font__text}/>
                        </div>
                    </div>
                </div>
                
                <div className={stl.palette}>
                    <div className={stl.palette__container}>
                        <span className={`${stl.palette__color1} ${stl.palette__color}`}/>
                        <p className={stl.palette__text}>#FFFFFF</p>
                    </div>
                    <div className={stl.palette__container}>
                        <span className={`${stl.palette__color2} ${stl.palette__color}`}/>
                        <p className={stl.palette__text}>#353534</p>
                    </div>
                    <div className={stl.palette__container}>
                        <span className={`${stl.palette__color3} ${stl.palette__color}`}/>
                        <p className={stl.palette__text}>#000000</p>
                    </div>
                    <div className={stl.palette__container}>
                        <span className={`${stl.palette__color4} ${stl.palette__color}`}/>
                        <p className={stl.palette__text}>#E30613</p>
                    </div>
                </div>

                <div className={stl.textures}>
                    <Image src={concrete} alt="concrete" width={100} height={100} className={stl.textures__texture}/>
                    <Image src={paper} alt="paper" width={100} height={100} className={`${stl.textures__paper} ${stl.textures__texture}`}/>
                    <Image src={plaster} alt="plaster" width={100} height={100} className={stl.textures__texture}/>
                </div>
            </div>
            <div className={stl.identity__containerBottom}>
                <Image src={inst} alt="inst" width={200} height={300} className={stl.identity__inst}/>
                <Image src={tshirt} alt="tshirt" width={350} height={207} className={stl.identity__tshirt}/>
            </div>
        </div>
    );
};

export default Identity;