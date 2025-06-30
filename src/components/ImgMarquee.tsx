
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
    images: { id: number; brand: string }[];
    from: number | string;
    to: number | string;
};


function ImgMarquee({ images, from, to }: Props) {

    const controls1 = useAnimation();
    const controls2 = useAnimation();

    const startAnimation = () => {
        controls1.start({
            x: to,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
        });
        controls2.start({
            x: to,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
        });
    };

    const stopAnimation = () => {
        controls1.stop();
        controls2.stop();
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <>
            <div
                className="brands MyGradient"
                onMouseEnter={stopAnimation}
                onMouseLeave={startAnimation}
                style={{ overflow: 'hidden' }}
                aria-label="Brand logos carousel"
                role="region"
            >
                <motion.div
                    className="brand-one"
                    initial={{ x: from }}
                    animate={controls1}
                    aria-hidden="true"
                >
                    {images.map((brand, index) => (
                        <motion.img
                            initial={{ opacity: 0, y: 0, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false, amount: 0.8 }}
                            className="brand-img"
                            key={`first-${index}`}
                            src={brand.brand}
                            alt=""
                            role="presentation"
                            loading="lazy"
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="brand-one"
                    initial={{ x: from }}
                    animate={controls2}
                >
                    {images.map((brand) => (
                        <img
                            className="brand-img"
                            key={`second-${brand.id}`}
                            src={brand.brand}
                            alt={`Brand logo ${brand.id}`}
                            loading="lazy"
                        />
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default ImgMarquee