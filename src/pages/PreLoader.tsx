import { useState, useEffect } from "react";
import home from '../data/home.json'

const words = ["Bold.", "Unique.", "Creative.", "Studio."];

const PreLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [visibleIndex, setVisibleIndex] = useState<number>(-1);
    const [audio] = useState(() => new Audio(home.audio));
    const [hasInteracted, setHasInteracted] = useState(false);


    // Play audio when user interacts (click or scroll)
    const handleUserInteraction = () => {
        if (!hasInteracted) {
            audio.play().catch((err) => {
                console.warn("Audio autoplay blocked by browser:", err);
            });
            setHasInteracted(true);
        }
    };

    useEffect(() => {
        // Add event listeners for user interactions (click and scroll)
        window.addEventListener("click", handleUserInteraction);
        window.addEventListener("scroll", handleUserInteraction);

        return () => {
            // Clean up event listeners
            window.removeEventListener("click", handleUserInteraction);
            window.removeEventListener("scroll", handleUserInteraction);
        };
    }, [hasInteracted]);

    useEffect(() => {
        // Try autoplay audio using muted trick
        // audio.muted = true;
        // audio.play().then(() => {
        //     audio.muted = false;
        // }).catch((err) => {
        //     console.warn("Audio autoplay blocked:", err);
        // });

        let current = 0;
        const interval = setInterval(() => {
            if (current < words.length) {
                setVisibleIndex(current);
                current++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        }, 500);

        return () => clearInterval(interval);
    }, [audio, onComplete]);

    return (
        <div className="preloader-container">
            <div className="text-group">
                {words.map((word, i) => (
                    <p
                        key={i}
                        className={`word  ${i <= visibleIndex ? "pop-in" : "hidden"}`}
                    >
                        {word}
                    </p>
                ))}
            </div>

            {visibleIndex === words.length - 1 && (
                <div className="presented">
                    presented by –{" "}
                    <span>
                        The Creative <span className="bg-red">Bugs</span> Media
                    </span>
                </div>
            )}
        </div>
    );
};

export default PreLoader;
