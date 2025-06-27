

import { Player } from '@lottiefiles/react-lottie-player';
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
                        <h1>
                            <span className={oneColor}>{one}</span> <span className={twoColor}> {two}</span>
                        </h1>
                    </div>

                    <div className='head-three'>
                        <div className='craft-lottie-two'>
                            <Player
                                autoplay
                                loop
                                src={lottieOne}
                            />
                        </div>
                    </div>
                </div>

                <div className='craft-para'>
                    <p>{p1}</p>
                    <p>{p2}</p>
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