'use client';

import React, {useEffect, useState} from "react";
import stl from "./alert.module.scss";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";

import Solid from "../../../public/solidFrontent.gif";
import SolidCreative from "../../../public/solidCreative.gif";

export interface AlertProps {
    text: string;
    duration?: number;
    onClose: () => void;
}
const Alert: React.FC<AlertProps>=({text, duration = 3000, onClose}) => {
    const {isCreative} = useTheme();

    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        const removeTimer = setTimeout(onClose, duration + 300);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        }
    }, [text, duration, onClose]);

    return(
    <div className={`${stl.alert} ${visible ? stl.show : stl.hide}`}>
            {isCreative ? (
                <Image className={stl.alert__gif} src={SolidCreative} alt="solidCreative" width={50} height={50}/>
            ) :
            (
                <Image className={stl.alert__gif} src={Solid} alt="solid" width={50} height={50}/>
            )}
        <p>{text}</p>
        <button className={stl.alert__button} onClick={onClose}>✖</button>
    </div>
)
};

export default Alert;