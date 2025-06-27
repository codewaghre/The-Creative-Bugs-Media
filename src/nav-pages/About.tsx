import Heading from '@/components/Heading'
import Service from '@/components/Service'
import Team from '@/components/Team'

import about from '../data/about.json'
import aboutHeading from '../data/heading.json'



const About = () => {

    const { p1, p2, p3, p4 } = about.content
    const { one, oneColor, two, twoColor } = aboutHeading.aboutus
    return (
        <main className='nav-about content-container'>

            <div>
                <Heading
                    one={one}
                    oneColor={oneColor}
                    two={two}
                    twoColor={twoColor}
                />
            </div>

            <div className='nav-about-grid'>

                <div className='nav-about-box-one'></div>
                <div className='nav-about-box-two'></div>
                <div className='nav-about-box-three'></div>
                <div className='nav-about-box-four'>
                    <p>{p1}</p>
                </div>
                <div className='nav-about-box-five'>
                    <p>{p4}</p>
                </div>
                <div className='nav-about-box-six'>
                    <p>{p2}</p>
                </div>
                <div className='nav-about-box-seven'>
                    <p>
                        {p3.map((part, i) =>
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
                {
                    about.socialsLinks.map((data) => (
                        <a href={data.link} target='blank' className={data.className}>
                            <div key={data.id}>
                                <img className="about-box-img" src={data.img} alt="Background" />
                                <a target='blank' href={data.link}>{data.linkName}</a>

                            </div>
                        </a>
                    ))
                }
                <div className='nav-about-box-eleven'></div>
            </div>

            <div className='team-container'>
                <Team />
            </div>

            <div className='service-container'>
                <Service />
            </div>
        </main>
    )
}

export default About