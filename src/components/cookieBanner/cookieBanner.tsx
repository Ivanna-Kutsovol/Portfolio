"use client";

import stl from "./cookieBanner.module.scss";
import { useEffect, useState } from "react";
import Analytics from "../googleAnalytics";

import Image from "next/image";
import Cookie from "../../../public/cookie.png";

export default function CookieBanner() {
    const [consent, setConsent] = useState<string | null>(null);
    const [isManaging, setIsManaging] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("cookie-consent");
        setConsent(saved);
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setConsent("accepted");
    };

    const manage = () => {
        setIsManaging(true);
    };

    const savePreferences = () => {
        const selectedConsent = analyticsEnabled ? "accepted" : "rejected";

        localStorage.setItem("cookie-consent", selectedConsent);
        setConsent(selectedConsent);
    };

    return (
        <>
            {consent === "accepted" && <Analytics />}

            {consent === null && (
                <div className={stl.cookieBanner}>
                    <div className={stl.cookieBanner__container}>
                    <Image src={Cookie} alt="cookie" width={100} height={100} className={stl.cookieBanner__cookie}/>
                    <div className={stl.cookieBanner__content}>
                    <h2 className={stl.cookieBanner__title}>Cookies</h2>
                    <p className={stl.cookieBanner__text}>
                        This website uses necessary cookies and optional analytics cookies.
                    </p>
                    </div>
                    </div>

                    {isManaging && (
                        <div className={stl.cookieBanner__preferences}>
                            <div className={stl.cookieBanner__option}>
                                <span>Necessary cookies</span>
                                <span className={stl.cookieBanner__status}>Always active</span>
                            </div>

                            <label className={stl.cookieBanner__option}>
                                <span>Analytics cookies</span>
                                <input
                                    type="checkbox"
                                    className={stl.cookieBanner__checkbox}
                                    checked={analyticsEnabled}
                                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                                />
                            </label>
                        </div>
                    )}

                    <div className={stl.cookieBanner__actions}>
                        {isManaging ? (
                            <button className={stl.cookieBanner__manage} onClick={savePreferences}>
                                Save Preferences
                            </button>
                        ) : (
                            <button className={stl.cookieBanner__manage} onClick={manage}>
                                Manage Cookies
                            </button>
                        )}

                        <button className={stl.cookieBanner__accept} onClick={accept}>
                            Accept All
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
