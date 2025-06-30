import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "motion/react"

import CraftVideoOne from '@/components/CraftVideoOne';
import CraftVideoTwo from '@/components/CraftVideoTwo';

import work from "../data/work.json";
import craftHeading from '../data/heading.json'


const Craft = () => {


    const { craftOne, craftTwo, hashImg, p1, p2, lottieOne } = work
    const { one, two, oneColor, twoColor } = craftHeading.craft


    return (
        <main className="craft">

            <div className='craft-top'>

                <div className='craft-head-container'>

                    <div className='head-one'>
                        <div className='craft-lottie-one'>
                            <Player
                                autoplay
                                loop
                                src={lottieOne}
                            />
                        </div>
                    </div>

                    <div className='head-two font-paytone'>
                        <motion.h1
                            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <span className={oneColor}>{one}</span> <span className={twoColor}> {two}</span>
                        </motion.h1>
                    </div>

                    <div className='head-three'>
                        <motion.div
                            initial={{ opacity: 0, y: 4, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='craft-lottie-two'>
                            <Player
                                autoplay
                                loop
                                src={lottieOne}
                            />
                        </motion.div>
                    </div>
                </div>

                <div className='craft-para'>
                    <motion.p
                        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >{p1}</motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >{p2}</motion.p>
                </div>

                <div>
                    <CraftVideoOne filter={"filter-grey"} hashImg={hashImg} video={craftOne.video} reelOne={craftOne.reelOne} reelTwo={craftOne.reelTwo} />
                </div>

                <div>
                    <CraftVideoTwo filter={"filter-grey"} hashImg={hashImg} video={craftTwo.video} reelOne={craftTwo.reelOne} reelTwo={craftTwo.reelTwo} />
                </div>
            </div>
        </main>
    )
}

export default Craft