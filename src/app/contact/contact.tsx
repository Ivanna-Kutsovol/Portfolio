'use client';

import React, { useState } from "react";
import stl from "./contact.module.scss";
import {useForm, SubmitHandler} from "react-hook-form";
import Image from "next/image";
import Alert from "../../components/alert/alert";

import Inst from "../../../public/contact/inst.svg";
import In from "../../../public/contact/in.svg";
import Git from "../../../public/contact/git.svg";

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

function Contact() {
    const [alertText, setAlertText] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>(
        {   
            mode: "onChange",
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            },
        }
    );

    const onSubmit: SubmitHandler<FormData> = async(data) => {
        setIsSubmitting(true);
        try{
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },  
                body: JSON.stringify(data),
                });

            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const result = await response.json();
            setAlertText("Form successfully submitted!");
            reset();
            setIsSubmitting(false);
        } catch (error) {
            setAlertText("Error submitting form. Please try again.");
        }
    };

    return (
        <section id="contact" className={stl.contact}>
            <section className={stl.contact__main}>
                <h1 className={stl.contact__title}>Contact</h1>
                <div className={stl.contact__container}>
                    <h2 className={stl.contact__subtitle}>Ready to elevate your online presence? I’m here to bring your ideas to life through clean, responsive, and engaging web experiences. Feel free to reach out.</h2>
                    <span className={stl.contact__line}/>

                <div className={stl.contact__date}>
                    <div className={stl.contact__dateItem}>
                        <h3 className={stl.contact__dateTitle}>Email:</h3>
                        <a href="mailto:ivanna.codeslab@gmail.com" className={stl.contact__dateLink}>ivanna.codeslab@gmail.com</a>
                    </div>
                    <div className={stl.contact__dateItem}>
                        <h3 className={stl.contact__dateTitle}>Phone:</h3>
                        <a href="tel:+436764065103" className={stl.contact__dateLink}>+43 676 4065103</a>
                    </div>
                </div>

                <div className={stl.contact__social}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/typicalivanna/#">
                        <Image className={stl.contact__icon} src={Inst} alt="inst icon" width={20} height={20} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ivanna-kucovol/">
                        <Image className={stl.contact__icon} src={In} alt="in icon" width={20} height={20} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ivanna-Kutsovol">
                        <Image className={stl.contact__icon} src={Git} alt="git icon" width={20} height={20} />
                    </a>
                </div>
                </div>
            </section>
            <form className={stl.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={stl.form__containerName}>
                    <div className={stl.form__item}>
                        <label className={stl.form__label}>First Name</label>
                        <input className={stl.form__input} autoComplete="off" id="name" type="text" placeholder="Name"
                        {...register("firstName",{
                            required: 'name is required',
                            pattern: {
                                value: /^[A-Za-z]{1,19}$/,
                                message: 'Invalid name format'
                            }
                        })}/>
                        {errors.firstName && <p className={stl.form__errors}>{errors.firstName.message}</p>}
                    </div>

                    <div className={stl.form__item}>
                        <label className={stl.form__label}>Last Name</label>
                        <input className={stl.form__input} autoComplete="off" id="lastName" type="text" placeholder="Last Name"
                        {...register("lastName",{
                            required: false,
                            pattern: {
                                value: /^[A-Za-z]{1,19}$/,
                                message: 'Invalid last name format'
                            }
                        })}/>
                        {errors.lastName && <p className={stl.form__errors}>{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className={stl.form__item}>
                    <label className={stl.form__label}>Email</label>
                    <input className={stl.form__input} autoComplete="off" id="email" type="email" placeholder="Email"
                    {...register("email",{
                        required: 'email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email format'
                        }
                    })}/>
                    {errors.email && <p className={stl.form__errors}>{errors.email.message}</p>}
                </div>

                <div className={stl.form__item}>
                    <label className={stl.form__label}>Message</label>
                    <textarea className={stl.form__input} autoComplete="off" id="message" placeholder="Message"
                    {...register("message",{
                        required: false,
                        minLength: {
                            value: 5,
                            message: 'Message must be at least 5 characters long'
                        }
                    })}/>
                    {errors.message && <p className={stl.form__errors}>{errors.message.message}</p>}
                </div>
                <div className={stl.form__buttonContainer}>
                <button disabled={isSubmitting} className={stl.form__button} type="submit">{isSubmitting ? "Sending..." : "Submit"}</button>
                <p className={stl.form__text}>By submitting this form you read and agree to the <a className={stl.form__link}>Terms & Conditions</a> and <a className={stl.form__link}>our privacy policy</a>.</p>
                </div>
            </form>
            {alertText && (
                <Alert text={alertText} onClose={() => setAlertText(null)} />
            )}
        </section>
    )
}

export default Contact;