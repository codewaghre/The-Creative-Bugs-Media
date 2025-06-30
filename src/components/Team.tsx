import Heading from "./Heading"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import teamData from '../data/team.json'
import { useState } from "react";

import teamHeading from '../data/heading.json'
import { motion } from "motion/react"


const Team = () => {

    const { one, oneColor, two, twoColor } = teamHeading.team

    const [index, setIndex] = useState(0);
    const [imgOne, setImgOne] = useState(1);
    const [imgTwo, setImgTwo] = useState(2);
    const [fade, setFade] = useState(false);

    const nextMember = () => {
        setIndex((prevIndex) => (prevIndex + 1) % teamData.length);
    };

    const prevMember = () => {
        setIndex((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length);
    };

    const nextImg = () => {
        setImgOne((prevIndex) => (prevIndex + 1) % teamData.length);
        setImgTwo((prevIndex) => (prevIndex + 1) % teamData.length);
    };

    const prevImg = () => {
        setImgOne((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length);
        setImgTwo((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length);
    };



    const member = teamData[index];
    const imgOneData = teamData[imgOne];
    const imgTwoData = teamData[imgTwo];





    const handleClickNext = () => {
        setFade(true);
        setTimeout(() => {
            nextMember();
            nextImg();
            setFade(false);
        }, 200);
    };

    const handlleCLickPrev = () => {
        setFade(true);
        setTimeout(() => {
            prevMember();
            prevImg();
            setFade(false);
        }, 200);
    };




    return (
        <>

            <main className="team">

                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}
                        two={two}
                        twoColor={twoColor}
                    />
                </div>

                <div className="team-grid">

                    <div className="team-box-one">

                        <div className="team-info-card">
                            <div className="team-img">
                                <motion.img
                                    initial={{ opacity: 0, y: 0, filter: 'blur(8px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    src={member.image}
                                    alt="team img" />
                            </div>

                            <div className="team-info">
                                <motion.h1
                                    initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    className="font-paytone"
                                >
                                    {member.name}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    {member.role}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
                                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                >
                                    {member.description}
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    <div className="team-box-two">
                        <div className="team-img-container">
                            <motion.img
                                initial={{ opacity: 0, y: 0, filter: 'blur(8px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={imgOneData.image}
                                alt="team img"
                                className={fade ? "fade-out" : ""} />
                        </div>
                    </div>

                    <div className="team-box-three">
                        <div className="team-img-container">
                            <motion.img
                                initial={{ opacity: 0, y: 0, filter: 'blur(8px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 0.5 }}
                                src={imgTwoData.image}
                                alt="team img"
                                className={fade ? "fade-out" : ""} />
                        </div>
                    </div>

                    <div className="team-box-four">
                        <div
                            className="left-button"
                            onClick={handlleCLickPrev}
                        >
                            <FaArrowLeft />
                        </div>
                    </div>

                    <div className="team-box-five">
                        <div
                            className="right-button"
                            onClick={handleClickNext}

                        >
                            <FaArrowRight />
                        </div>
                    </div>


                    <div className="team-box-six">
                        <motion.p
                            initial={{ opacity: 0, y: 6, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            The Creative Bugs Media team is a dynamic collective of passionate creators based in Mumbai, each bringing unique talents in video editing, animation, podcasting, reels, production, and on-location shooting.
                        </motion.p>
                    </div>


                </div>
            </main>
        </>

    )
}

export default Team