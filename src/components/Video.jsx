import React, { useRef, useState } from 'react'
import { BlurhashCanvas } from 'react-blurhash';

function Video({ src, placeholder }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>

            <div className="video-container" style={{ position: 'relative' }}>
                {!isLoading && (
                    <BlurhashCanvas
                        hash="LAFYZ99F00_N00^+%g4n00?a={D$"
                        style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100%" }}
                    />
                )}
                <video
                    src={src ? src : ""}
                    autoPlay
                    muted
                    controls
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsLoading(true)}
                    style={{ opacity: isLoading ? 1 : 0 }}
                />
            </div>


        </>
    )
}

export default Video