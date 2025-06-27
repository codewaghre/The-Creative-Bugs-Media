import Heading from "./Heading"

import service from '../data/services.json'
import serviceHeading from '../data/heading.json'

const Service = () => {
    const { one, two, twoColor, oneColor } = serviceHeading.services
    return (
        <>
            <main className="service">
                <div>
                    <Heading
                        one={one}
                        oneColor={oneColor}
                        two={two}
                        twoColor={twoColor}
                    />
                </div>

                <div className="service-para-container">
                    <p>
                        {service.p1.map((part, i) =>
                            typeof part === 'string' ? (
                                part
                            ) : (
                                <span key={i} className={part.className}>
                                    {part.text}
                                </span>
                            )
                        )}
                    </p>
                </div>

                <div className="services-container">

                    {/* <div className="service-container-one">
                        <h1 className="font-paytone">Editing & Post-Production</h1>
                        <p className="p">short-form magic, long-form energy</p>
                    </div> */}

                    {
                        service.services.map((service) => (
                            <div key={service.id} className={service.className}>
                                <h1 className="font-paytone">{service.h1}</h1>
                                <p>{service.p}</p>
                            </div>
                        ))

                    }


                </div>


            </main>
        </>
    )
}

export default Service