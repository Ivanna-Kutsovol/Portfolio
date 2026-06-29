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

import { trackEvent } from "@/utils/analytics";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isCreative, setIsCreative } = useTheme();
    const [isOnClick, setIsOnClick] = useState(false);

    const handleNavClick = (section: string) => {
    setIsOnClick(true);

    trackEvent("header_nav_click", {
        section,
        mode: isCreative ? "creative" : "frontend",
    });
};

const handleBurgerClick = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    trackEvent("header_burger_click", {
        state: nextState ? "open" : "close",
        mode: isCreative ? "creative" : "frontend",
    });
};

const handleThemeSwitch = (mode: "frontend" | "creative") => {
    setIsCreative(mode === "creative");

    trackEvent("theme_switch", {
        selected_mode: mode,
        previous_mode: isCreative ? "creative" : "frontend",
    });
};

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
                        onClick={handleBurgerClick}>
                        <span className={stl.bar}/>
                        <span className={stl.bar}/>
                    </button>
                    
                    {isCreative ? (
                        <nav className={`${stl.header__nav} ${isOpen ? stl.open : ""}`}>
                            <div className={stl.header__container}>
                                <Link className={stl.header__link} onClick={() => handleNavClick("about")} href="/#about">About</Link>
                                <Link className={stl.header__link} onClick={() => handleNavClick("featured_work")} href="/#featuredWork">Work</Link>
                                <Link className={stl.header__link} onClick={() => handleNavClick("instagram_content")} href="/#instContent">Content</Link>
                                <Link className={stl.header__link} onClick={() => handleNavClick("use_tools")} href="/#tools">Tools</Link>
                                <Link className={stl.header__link} onClick={() => handleNavClick("brand_identity")} href="/#identity">Identity</Link>
                                <Link className={`${stl.header__link} ${stl.header__contact}`} onClick={() => handleNavClick("contact")} href="/#contact">Contact</Link>
                            </div>
                            <Image className={stl.header__gradient} src={GradientCreative} alt="gradient" width={333} height={333}/>
                        </nav>
                    ):(
                        <nav className={`${stl.header__nav} ${isOpen ? stl.open : ""}`}>
                            <div className={stl.header__container}>
                                <Link className={stl.header__link} onClick={() => handleNavClick("about")} href="/#about">About</Link>
                                <Link className={stl.header__link} onClick={() => handleNavClick("experience")} href="/#experience">Experience</Link>
                                <Link className={stl.header__link} onClick={() => handleNavClick("skills")} href="/#skills">Skills</Link>
                                <Link className={stl.header__link} onClick={() => handleNavClick("project")} href="/#project">Project</Link>
                                <Link className={`${stl.header__link} ${stl.header__contact}`} onClick={() => handleNavClick("contact")} href="/#contact">Contact</Link>
                            </div>
                            <Image className={stl.header__gradient} src={Gradient} alt="gradient" width={333} height={333}/>
                        </nav>
                    )}
                        {isCreative ? (
                            <Button text="Frontend" href="/" targetId="about" onClick={() => handleThemeSwitch("frontend")} align="left" circle/>
                        ) : (
                            <Button text="Creative" href="/creative" targetId="about" onClick={() => handleThemeSwitch("creative")} align="right"circle/>
                        )}
                </div>
            </div>
        </header>
    );
};