import React,{useRef, useEffect} from "react";
import stl from "./featuredWork.module.scss";

const videos = [
    "/featuredWork/firstTraining.mp4",
    "/featuredWork/t-shirt.mp4",
    "/featuredWork/fightfirst.mp4",
    "/featuredWork/broForgot.mp4",
];

const posters = [
    "/featuredWork/firstTraining.png",
    "/featuredWork/t-shirt.png",
    "/featuredWork/fightFirst.JPEG",
    "/featuredWork/broForgot.png",
]
const FeaturedWork = () => {
    const videoRefs = useRef([]);

    const isDesktop = () => {
        return window.matchMedia("(hover : hover)").matches;
    }

    const playVideo = (video) => {
        video.play().catch(() => {
        });
    }

    const handleVideoEnter = (index) => {
        if (isDesktop()){
            const video = videoRefs.current[index]

            video.muted = true;
            playVideo(video);
        }
    }

    const handleMouseLeave = (index) => {
        if (isDesktop()) {
            const video = videoRefs.current[index]

            video.pause();
            video.currentTime = 0;
            video.muted = true;
        }
    };

    const handleVideoClick = (index) => {
        const video = videoRefs.current[index]

        if (isDesktop()) {
            video.defaultMuted = false;
            video.muted = false;
            video.volume = 1;
            playVideo(video);
        } else {
            
            if (video.paused) {
                video.muted = false;
                video.volume = 1;
                playVideo(video);
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
            
    }

    const handleVideoEnded = (index) => {
        const video = videoRefs.current[index]

        video.currentTime = 0;
        video.muted = true;
        video.load();
    }
    return (
    <div className={stl.featuredWork} id="featuredWork">
        <h2 className={stl.featuredWork__title}>Featured Work</h2>
        <section className={stl.featuredWork__container}>
            {videos.map((video, index) => (
                <video
                    key={index}
                    ref={(el) => (videoRefs.current[index] = el)}
                    onMouseEnter={() => handleVideoEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleVideoClick(index)}
                    onEnded={() => handleVideoEnded(index)}
                    poster={posters[index]}
                    className={stl.featuredWork__video}
                    width="100%"
                    height="auto"
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src={video} type="video/mp4"/>
                </video>
            ))}
        </section>
    </div>
    )
};

export default FeaturedWork;
