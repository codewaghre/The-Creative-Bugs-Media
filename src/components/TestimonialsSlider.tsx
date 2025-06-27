
import testimonialsData from '../data/testimonials.json'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <div className="testimonials-slider">

                <Slider {...settings}>

                    {
                        testimonialsData.map((data) => (

                            <div key={data.id} className="testimonials-slider-container">
                                <div className='testimonials-data'>
                                    <div>
                                        <p>" {data.testimonial} "</p>
                                    </div>

                                    <div className="client-info-container">
                                        <div
                                            className="client-img-container">
                                            <img className="client-img" src={data.user_img} alt="" />
                                        </div>

                                        <div className="user-info-containers">
                                            <h1>{data.name}</h1>
                                            <h2> {data.work} </h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>







        </>
    )
}

export default TestimonialsSlider