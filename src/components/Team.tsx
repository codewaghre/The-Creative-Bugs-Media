import Heading from "./Heading"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import teamData from '../data/team.json'
import { useState } from "react";


const Team = () => {

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
                        one={"Meet the Bugs Team"}
                        oneColor={"var(--bg-red)"}
                    />
                </div>

                <div className="team-grid">

                    <div className="team-box-one">

                        <div className="team-info-card">
                            <div className="team-img">
                                <img src={member.image} alt="" />
                            </div>

                            <div className="team-info">
                                <h1 className="font-paytone">{member.name}</h1>
                                <p>{member.role}</p>

                                <p>{member.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-box-two">
                        <div className="team-img-container">
                            <img src={imgOneData.image} alt="" className={fade ? "fade-out" : ""} />
                        </div>
                    </div>

                    <div className="team-box-three">
                        <div className="team-img-container">
                            <img src={imgTwoData.image} alt="" className={fade ? "fade-out" : ""} />
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
                        <p>
                            The Creative Bugs Media team is a dynamic collective of passionate creators based in Mumbai, each bringing unique talents in video editing, animation, podcasting, reels, production, and on-location shooting.
                        </p>
                    </div>


                </div>
            </main>
        </>

    )
}

export default Team