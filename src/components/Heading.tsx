
import { motion } from "motion/react"

interface Props {
    one: string;
    two?: string;
    three?: string;
    oneColor?: string;
    twoColor?: string;
    threeColor?: string;
}


const Heading = ({ one, two, three, oneColor, twoColor, threeColor }: Props) => {
    return (
        <section aria-labelledby="main-heading">
            <div className="number-grid block-gradient" role="presentation">
                {/* Decorative boxes - hidden from screen readers */}
                <div className="number-box-one" aria-hidden="true"></div>
                <div className="number-box-two" aria-hidden="true"></div>
                <div className="number-box-three" aria-hidden="true"></div>
                <div className="number-box-four" aria-hidden="true"></div>
                <div className="number-box-five" aria-hidden="true"></div>

                {/* Main heading content */}
                <div className="number-heading font-paytone">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.8 }}
                        id="main-heading">
                        <span className="number-text-one" style={{ color: oneColor }}>{one}</span>
                        {two && <span className="number-text-two" style={{ color: twoColor }}>{two}</span>}
                        {three && <span className="number-text-three" style={{ color: threeColor }}>{three}</span>}
                    </motion.h1>
                </div>
            </div>
        </section>
    )
}

export default Heading