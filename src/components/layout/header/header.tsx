'use client';

import React, {useState} from "react";
import stl from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../../public/logo.svg";
import Gradient from "../../../../public/gradientMobileMenu.svg";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={`${stl.header} ${isOpen ? stl.open : ""}`}>
            <Image src={Logo} alt="logo" width={99} height={45}/>
                <button className={`${stl.header__burger} ${isOpen ? stl.open : ""}`}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className={stl.bar}/>
                    <span className={stl.bar}/>
                </button>
            <nav className={`${stl.header__nav} ${isOpen ? stl.open : ""}`}>
                <Link className={stl.header__link} href="/#about">About</Link>
                <Link className={stl.header__link} href="/#experience">Experience</Link>
                <Link className={stl.header__link} href="/#skills">Skills</Link>
                <Link className={stl.header__link} href="/#project">Project</Link>
                <Link className={`${stl.header__link} ${stl.header__contact}`} href="/#contact">Contact</Link>
                <Image className={stl.header__gradient} src={Gradient} alt="gradient" width={333} height={333}/>
            </nav>
        </header>
    );
};