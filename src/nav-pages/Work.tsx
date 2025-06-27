import CraftVideoOne from "@/components/CraftVideoOne"
import CraftVideoTwo from "@/components/CraftVideoTwo"
import Heading from "@/components/Heading"

import craftHeading from '../data/heading.json'
import work from '../data/work.json'

const Work = () => {

    const { one, two, oneColor, twoColor } = craftHeading.work
    const { p1, p2, hashImg, craftOne, craftThree, craftTwo } = work
    return (
        <>
            <main className="work">

                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}
                        two={two}
                        twoColor={twoColor}
                    />
                </div>

                <div className="connect-para">
                    <p>{p1}</p>
                    <span className="bg-green">{p2}</span>
                </div>

                <div className="work-container">
                    <div>
                        <CraftVideoOne filter={"filter-grey"} hashImg={hashImg} video={craftOne.video} reelOne={craftOne.reelOne} reelTwo={craftOne.reelTwo} />
                    </div>

                    <div>
                        <CraftVideoTwo filter={"filter-grey"} hashImg={hashImg} video={craftTwo.video} reelOne={craftTwo.reelOne} reelTwo={craftTwo.reelTwo} />
                    </div>

                    <div>
                        <CraftVideoOne filter={"filter-grey"} hashImg={hashImg} video={craftThree.video} reelOne={craftThree.reelOne} reelTwo={craftThree.reelTwo} />
                    </div>
                </div>

            </main>
        </>
    )
}

export default Work