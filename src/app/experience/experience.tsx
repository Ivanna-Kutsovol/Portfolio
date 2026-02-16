import React from "react";
import stl from "./experience.module.scss";
import Link from "next/link";
import Image from "next/image";

const array = [{
    title: 'Frontend Dev',
    description: 'Developing responsive, pixel-perfect websites using Next.js, React, and SCSS. Focused on clean UI, animations, and reusable components.',
    icon: "/experience/icon1.svg",
    button: "/#project",
},
{
    title: 'UI/UX Design',
    description: 'Creating user-centered designs from scratch. Worked on layouts, color systems, and interactions — including the design for my Toy House project.',
    icon: "/experience/icon2.svg",
    button: "https://www.figma.com/design/1bUeWh5a6nxUUrsmvl6uHN/toy-house?node-id=0-1&t=WXpdsEbiQGns8O8y-1",
},
{
    title: 'API & Backend',
    description: 'Experience integrating RESTful APIs and backend services using TypeScript and Spring Boot. Implemented authentication, role-based access, and database connections for projects.',
    icon: "/experience/icon3.svg",
    button: "https://github.com/Ivanna-Kutsovol/metamix",
},
{
    title: 'WordPress Dev',
    description: 'I create and customize WordPress websites — from installing themes and plugins to building fully custom layouts using Elementor and custom CSS.',
    icon: "/experience/icon4.svg",
    button: "",
}]

const Experience = () => {
    return (
        <section className={stl.experience} id="experience">
            <h1 className={stl.experience__title}>Work Experience</h1>
            <section className={stl.experience__container}>
                {array.map((item, index) => (
                    <div key={index} className={stl.experience__card}>
                        <Image src={item.icon} alt="icon" width={80} height={75} className={stl.experience__icon}/>
                        <div className={stl.experience__cardText}>
                            <h2 className={stl.experience__cardTitle}>{item.title}</h2>
                            <p className={stl.experience__cardDescription}>{item.description}</p>
                            <Link target="_blank" rel="noopener noreferrer" href={item.button} className={stl.experience__cardButton}>Learn more</Link>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
};

export default Experience;