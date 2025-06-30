import { useRef } from 'react';
import Video from '@/components/Video';
import { motion } from "motion/react"

interface Props {
    video: string
    reelTwo: string
    reelOne: string
    hashImg: string
    filter?: string
}

const CraftVideoTwo = ({ filter, reelOne, reelTwo, hashImg, video }: Props) => {
    const podcastRef = useRef<HTMLVideoElement | null>(null);
    const reelOneRef = useRef<HTMLVideoElement | null>(null);
    const reelTwoRef = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = (video: HTMLVideoElement | null) => {
        if (video) {
            video.muted = false;
            video.play().catch((error) => {
                console.error('Autoplay with audio failed:', error);
            });
        }
    };

    const handleMouseLeave = (video: HTMLVideoElement | null) => {
        if (video) {
            video.pause();
            // video.currentTime = 0;
        }
    };
    return (
        <>
            <div className="work-bottom-two">

                <div className="work-video-one">
                    <motion.div
                        initial={{ opacity: 0, y: 2, filter: 'blur(2px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className={`video-container ${filter || ''}`}
                        onMouseEnter={() => handleMouseEnter(podcastRef.current)}
                        onMouseLeave={() => handleMouseLeave(podcastRef.current)}
                    >
                        <Video
                            ref={podcastRef}
                            src={video}
                            hashImg={hashImg}
                        />
                    </motion.div>
                </div>

                <div className="work-reel-one">
                    <motion.div
                        initial={{ opacity: 0, y: 2, filter: 'blur(2px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className={`reel-container ${filter || ''}`}
                        onMouseEnter={() => handleMouseEnter(reelOneRef.current)}
                        onMouseLeave={() => handleMouseLeave(reelOneRef.current)}
                    >
                        <Video
                            ref={reelOneRef}
                            src={reelOne}
                            hashImg={hashImg}
                        />

                    </motion.div>
                </div>

                <div className="work-reel-two">
                    <motion.div
                        initial={{ opacity: 0, y: 2, filter: 'blur(2px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className={`reel-container ${filter || ''}`}
                        onMouseEnter={() => handleMouseEnter(reelTwoRef.current)}
                        onMouseLeave={() => handleMouseLeave(reelTwoRef.current)}
                    >
                        <Video
                            ref={reelTwoRef}
                            src={reelTwo}
                            hashImg={hashImg}
                        />
                    </motion.div>
                </div>


            </div>
        </>
    )
}

export default CraftVideoTwo