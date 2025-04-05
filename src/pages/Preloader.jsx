import React, { useEffect, useState } from 'react'
// import '../css/blurTwo.css'
import '../css/blur.css'

function Preloader() {
    const [loadState, setLoadState] = useState('preload');
    useEffect(() => {
        let isHandled = false; // Prevent double execution

        const handleLoad = () => {
            if (isHandled) return; // Stop if already handled
            isHandled = true;

            setLoadState('loaded');

            setTimeout(() => {
                setLoadState('hidden');
            }, 100);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);

            const fallbackTimer = setTimeout(handleLoad, 3000);

            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(fallbackTimer);
            };
        }
    }, []);

    if (loadState === 'hidden') return null;

    return (

        <div className={`glass-container ${loadState}`}>
            {/* <div className="glass-content"></div> */}
        </div>


    )
}

export default Preloader