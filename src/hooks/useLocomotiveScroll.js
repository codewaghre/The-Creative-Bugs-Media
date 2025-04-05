import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"), // Ensure correct target
            smooth: true,
        });
        setTimeout(() => locomotiveScroll.update(), 1000);

        return () => {
            locomotiveScroll.destroy(); // Cleanup to prevent memory leaks
        };
    }, []);
};

export default useLocomotiveScroll;
