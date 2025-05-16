

import { Player } from '@lottiefiles/react-lottie-player';
import { MdArrowOutward } from "react-icons/md";
import CraftVideoOne from '@/components/CraftVideoOne';


const Craft = () => {



    return (
        <main className="craft">

            <div className='craft-top'>

                <div className='craft-head-container'>

                    <div className='head-one'>
                        <div className='craft-lottie-one'>
                            <Player
                                autoplay
                                loop
                                src="/lottie/run.json"
                            />
                        </div>
                    </div>

                    <div className='head-two font-paytone'>
                        <h1 className='bg-pink'>
                            Mastering the Art of Creativity
                        </h1>

                        <h1 className='bg-green'>
                            Bugs Media.
                        </h1>
                    </div>

                    <div className='head-three'>
                        <div className='craft-lottie-two'>
                            <Player
                                autoplay
                                loop
                                src="/lottie/run.json"
                            />
                        </div>
                    </div>
                </div>

                <div className='craft-para'>
                    <p>At The Creative Bugs Media, we don’t just create; we craft experiences. With our team of talented professionals, we bring together cutting-edge technology and timeless artistry to deliver visually stunning work. a it's dynamic editing, cinematic shooting, animation, podcast production, or reel creation, our expertise spans across every facet of visual storytelling.</p>

                    <p>Let us transform your vision into reality —<span className='bg-yellow'> one masterpiece at a time.</span></p>
                </div>

                <div>
                    <CraftVideoOne filter={"filter-grey"} />
                </div>

                <div className='gallery-para'>
                    <h1>
                        <span className='bg-red'>Creative Touches.</span>
                        <span className='bg-orange'>Color & Clarity.</span>
                        <span className='bg-green'>Visual Consistency.</span>
                        <span className='bg-pink'>Real Results.</span></h1>
                </div>

                <div className='craft-gallery'>
                    <div className='craft-img-one'>

                        <img src="/gallery/g2.jpg" alt="" />

                    </div>
                    <div className='craft-img-two'>

                        <img src="/gallery/g4.jpg" alt="" />

                    </div>
                    <div className='craft-img-three'>
                        <div className='craft-img-container'>
                            <img src="/gallery/g1.jpg" alt="" />
                        </div>
                    </div>
                    <div className='craft-img-four'>
                        <div className='craft-img-container'>
                            <img src="/gallery/p3.webp" alt="" />
                        </div>
                    </div>
                    <div className='craft-img-five'>
                        <div className='craft-img-container'>
                            <img src="/gallery/g4.jpg" alt="" />
                        </div>
                    </div>
                    <div className='craft-img-six'>
                        <div className='craft-img-container'>
                            <img src="/gallery/g3.jpg" alt="" />
                        </div>
                    </div>
                    <div className='craft-img-seven'>
                        <div className='craft-img-container'>
                            <img src="/gallery/g1.jpg" alt="" />
                        </div>
                    </div>
                    <div className='craft-img-eight'>
                        <button>
                            Explore Experties
                            <span><MdArrowOutward /></span>
                        </button>
                    </div>
                </div>
            </div>



        </main>
    )
}

export default Craft