import { useState, FormEvent, ChangeEvent } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

import footer from '../data/footer.json'
import toast from "react-hot-toast";

import { motion } from "motion/react"

const Footer = () => {

    const { logo, lottie, navLinkAbout, navLinkConnect, navLinkWork, socials, copyrightStatement } = footer
    const [email, setEmail] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const emailKey = import.meta.env.VITE_EMAIL

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // You can add further logic like API call here
        const formData = new FormData();
        formData.append("access_key", emailKey);
        formData.append("subject", "New Subscriber");
        formData.append("email", email);
        formData.append("message", `New subscriber is with email: ${email}`);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json,
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Subscription successful!")
                setEmail("");
            } else {
                toast.error("Subscription failed. Please try again.")
            }
        } catch (error) {
            console.error("Web3Forms Error:", error);
            toast.error("Something went wrong. Please try again later.")
        }
    };

    // handle Craft Nav 
    const handleCraftEnter = () => {
        document.body.classList.add('logo-hover-craft');
    };
    const handleCraftLeave = () => {
        document.body.classList.remove('logo-hover-craft');
    };

    // handle About Nav 
    const handleAboutEnter = () => {
        document.body.classList.add('logo-hover-about');
    };
    const handleAboutLeave = () => {
        document.body.classList.remove('logo-hover-about');
    };

    // handle Connect us Nav 
    const handleConnectEnter = () => {
        document.body.classList.add('logo-hover-connect-nav');
    };
    const handleConnectLeave = () => {
        document.body.classList.remove('logo-hover-connect-nav');
    };



    return (
        <footer>
            <div className="footer-container">

                <div className="footer-box-one"></div>
                <div className="footer-box-two"></div>
                <div className="footer-box-three"></div>
                <div className="footer-box-four"></div>
                <div className="footer-box-five"></div>


                <Link className="footer-box-six" to={logo.to}>
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {logo.h1}
                            <span className="font-outfit bugs ">
                                {logo.h2}</span>
                        </motion.h1>
                    </div>
                </Link>


                <Link className="footer-box-seven" to={navLinkWork.to}>
                    <div
                        onMouseEnter={handleCraftEnter}
                        onMouseLeave={handleCraftLeave}
                        onFocus={handleCraftEnter}
                        onBlur={handleCraftEnter}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {navLinkWork.h1}
                        </motion.h1>
                    </div>
                </Link>


                <Link className="footer-box-eight" to={navLinkConnect.to}>
                    <div
                        onMouseEnter={handleConnectEnter}
                        onMouseLeave={handleConnectLeave}
                        onFocus={handleConnectEnter}
                        onBlur={handleConnectEnter}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {navLinkConnect.h1}
                        </motion.h1>
                    </div>
                </Link>


                <Link className="footer-box-nine" to={navLinkAbout.to}>
                    <div
                        onMouseEnter={handleAboutEnter}
                        onMouseLeave={handleAboutLeave}
                        onFocus={handleAboutEnter}
                        onBlur={handleAboutEnter}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {navLinkAbout.h1}
                        </motion.h1>
                    </div>
                </Link>


                <div className="footer-box-ten"></div>


                {
                    socials.map((data) => (
                        <Link key={data.id} className={data.className} to={data.to} target={data.target} >
                            <div>
                                <img className="about-box-img" src="/bg.png" alt="Background" />
                                <motion.div
                                    initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    {data.h1}
                                </motion.div>
                            </div>
                        </Link>
                    ))
                }
                <div className="footer-box-fourteen">
                    <div className='form'>
                        <motion.form
                            initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            action=""
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                placeholder='Enter your email'
                                value={email}
                                onChange={handleChange}
                                required
                            />

                            <button>
                                Subscribe
                            </button>
                        </motion.form>
                    </div>
                </div>


                <div className="footer-box-fifteen"></div>
                <motion.div
                    className="footer-box-seventeen"
                    initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    @{new Date().getFullYear()} - {copyrightStatement}
                </motion.div>
                <div className="twenty"></div>

                <div className="india">
                    <motion.div
                        initial={{ opacity: 0, y: 2, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='footer-lottie-one'>
                        <Player
                            autoplay
                            loop
                            src={lottie}
                            className='footer-lottie'
                        />
                    </motion.div>
                </div>
            </div>
        </footer >
    )
}

export default Footer