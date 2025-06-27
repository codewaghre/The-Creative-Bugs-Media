import Heading from "@/components/Heading"
import TestimonialsSlider from "@/components/TestimonialsSlider"

const Testimonials = () => {
    return (
        <main className="testimonials">
            <div>
                <Heading one={"Work That Speaks for Itself"}
                    oneColor={"var(--bg-orange)"}
                />
            </div>

            <div className="testimonials-para">
                <p>
                    High-trust content for founders and <span className='bg-green'>experts - tailored, distributed</span>, and designed to grow across platforms.
                </p>
            </div>

            <div>
                <TestimonialsSlider />
            </div>

        </main >
    )
}

export default Testimonials