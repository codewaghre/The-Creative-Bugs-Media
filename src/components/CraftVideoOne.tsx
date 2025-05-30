import { useRef } from 'react';
import Video from '@/components/Video';

interface Props {
    filter?: string
}

const CraftVideoOne = ({ filter }: Props) => {

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
            <div className="craft-bottom-one">

                <div className="video-one">
                    <div
                        className={`video-container ${filter || ''}`}
                        onMouseEnter={() => handleMouseEnter(podcastRef.current)}
                        onMouseLeave={() => handleMouseLeave(podcastRef.current)}
                    >
                        <Video
                            ref={podcastRef}
                            src="/videos/podcast/p1.mp4"
                            hashImg="L29tJvt700t7IUIU~q-;00_3%MIU"
                        />
                    </div>
                </div>

                <div className="reel-one">
                    <div
                        className={`reel-container ${filter || ''}`}
                        onMouseEnter={() => handleMouseEnter(reelOneRef.current)}
                        onMouseLeave={() => handleMouseLeave(reelOneRef.current)}
                    >
                        <Video
                            ref={reelOneRef}
                            src="/videos/reel/r1.mp4"
                            hashImg="L29tJvt700t7IUIU~q-;00_3%MIU"
                        />

                    </div>
                </div>

                <div className="reel-two">
                    <div
                        className={`reel-container ${filter || ''}`}
                        onMouseEnter={() => handleMouseEnter(reelTwoRef.current)}
                        onMouseLeave={() => handleMouseLeave(reelTwoRef.current)}
                    >
                        <Video
                            ref={reelTwoRef}
                            src="/videos/reel/r1.mp4"
                            hashImg="L29tJvt700t7IUIU~q-;00_3%MIU"
                        />
                    </div>
                </div>


            </div >
        </>
    )
}

export default CraftVideoOne