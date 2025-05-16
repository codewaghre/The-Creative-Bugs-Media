import React, { useState, useEffect, useRef } from 'react';
import { BlurhashCanvas } from 'react-blurhash';

interface Props {
    src: string;
    hashImg: string;
    autoPlay?: boolean;
    controls?: boolean;
    muted?: boolean;
    preload?: "auto" | "metadata" | "none";
}

const Video = React.forwardRef<HTMLVideoElement, Props>(
    (
        { src, hashImg, controls = false, muted = true, preload = "auto" }: Props, ref
    ) => {
        const [isLoading, setIsLoading] = useState(true);
        const videoRef = useRef<HTMLVideoElement>(null);

        useEffect(() => {
            if (videoRef.current) {
                videoRef.current.muted = muted;
            }
        }, [muted]);

        return (
            <div>
                {/* Show Blurhash Canvas as a placeholder */}
                {isLoading && (
                    <BlurhashCanvas
                        hash={hashImg}
                        className='hashvideo'
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                )}

                {/* Video element */}
                <video
                    width={'100%'}
                    height={'100%'}
                    ref={ref || videoRef}
                    src={src}
                    autoPlay
                    controls={controls}
                    muted={muted}
                    preload={preload}
                    loop
                    playsInline
                    onLoadedData={() => setIsLoading(false)}
                    style={{ opacity: isLoading ? 0 : 1 }}
                />
            </div>
        );
    });

export default Video;
