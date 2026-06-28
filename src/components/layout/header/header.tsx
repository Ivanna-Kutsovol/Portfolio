'use client';

import React, {useState, useEffect} from "react";
import stl from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button/button";
import { useTheme } from "@/components/theme/ThemeProvider";

import Logo from "../../../../public/logo.svg";
import Gradient from "../../../../public/gradientMobileMenu.svg";
import GradientCreative from "../../../../public/gradientMobileCreative.svg";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isCreative, setIsCreative } = useTheme();
    const [isOnClick, setIsOnClick] = useState(false);

    useEffect(() => {
        if(!isOpen) return;
        if(isOnClick){
            const timer = setTimeout(() => {
                setIsOpen(false);
            setIsOnClick(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isOnClick]);

    return (
        <header className={`${stl.header} ${isOpen ? stl.open : ""}`}>
            <div className={stl.header__inner}>
                <Image src={Logo} alt="logo" width={99} height={45}/>
                <div className={`${stl.header__containerNav} ${isOpen ? stl.open : ""}`}>
                    <button className={`${stl.header__burger} ${isOpen ? stl.open : ""}`}
                        onClick={() => setIsOpen(!isOpen)}>
                        <span className={stl.bar}/>
                        <span className={stl.bar}/>
                    </button>
                    
                    {isCreative ? (
                        <nav className={`${stl.header__nav} ${isOpen ? stl.open : ""}`}>
                            <div className={stl.header__container}>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#about">About</Link>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#featuredWork">Work</Link>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#instContent">Content</Link>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#tools">Tools</Link>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#identity">Identity</Link>
                                <Link className={`${stl.header__link} ${stl.header__contact}`} onClick={() => setIsOnClick(true)} href="/#contact">Contact</Link>
                            </div>
                            <Image className={stl.header__gradient} src={GradientCreative} alt="gradient" width={333} height={333}/>
                        </nav>
                    ):(
                        <nav className={`${stl.header__nav} ${isOpen ? stl.open : ""}`}>
                            <div className={stl.header__container}>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#about">About</Link>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#experience">Experience</Link>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#skills">Skills</Link>
                                <Link className={stl.header__link} onClick={() => setIsOnClick(true)} href="/#project">Project</Link>
                                <Link className={`${stl.header__link} ${stl.header__contact}`} onClick={() => setIsOnClick(true)} href="/#contact">Contact</Link>
                            </div>
                            <Image className={stl.header__gradient} src={Gradient} alt="gradient" width={333} height={333}/>
                        </nav>
                    )}
                        {isCreative ? (
                            <Button text="Frontend" href="/" targetId="about" onClick={() => setIsCreative(false)} align="left" circle/>
                        ) : (
                            <Button text="Creative" href="/creative" targetId="about" onClick={() => setIsCreative(true)} align="right"circle/>
                        )}
                </div>
            </div>
        </header>
    );
};