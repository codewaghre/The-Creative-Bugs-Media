import { useState, FormEvent, ChangeEvent } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

import footer from '../data/footer.json'

const Footer = () => {

    const { logo, lottie, navLinkAbout, navLinkConnect, navLinkWork, socials } = footer
    const [email, setEmail] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted Email:', email);
        alert(`Email submitted: ${email}`);
        // You can add further logic like API call here
    };

    // handle Craft Nav 
    const handleCraftEnter = () => {
        document.body.classList.add('logo-hover-craft');
    };
    const handleCraftLeave = () => {
        document.body.classList.remove('logo-hover-craft');
    };

    // handle About Nav 
    const handleAboutEnter = () => {
        document.body.classList.add('logo-hover-about');
    };
    const handleAboutLeave = () => {
        document.body.classList.remove('logo-hover-about');
    };

    // handle Connect us Nav 
    const handleConnectEnter = () => {
        document.body.classList.add('logo-hover-connect-nav');
    };
    const handleConnectLeave = () => {
        document.body.classList.remove('logo-hover-connect-nav');
    };



    return (
        <footer>
            <div className="footer-container">

                <div className="footer-box-one"></div>
                <div className="footer-box-two"></div>
                <div className="footer-box-three"></div>
                <div className="footer-box-four"></div>
                <div className="footer-box-five"></div>


                <Link className="footer-box-six" to={logo.to}>
                    <div>
                        <h1>{logo.h1}<span className="font-outfit bugs ">{logo.h2}</span></h1>
                    </div>
                </Link>


                <Link className="footer-box-seven" to={navLinkWork.to}>
                    <div
                        onMouseEnter={handleCraftEnter}
                        onMouseLeave={handleCraftLeave}
                        onFocus={handleCraftEnter}
                        onBlur={handleCraftEnter}
                    >
                        <h1>{navLinkWork.h1}</h1>
                    </div>
                </Link>


                <Link className="footer-box-eight" to={navLinkConnect.to}>
                    <div
                        onMouseEnter={handleConnectEnter}
                        onMouseLeave={handleConnectLeave}
                        onFocus={handleConnectEnter}
                        onBlur={handleConnectEnter}
                    >
                        <h1>{navLinkConnect.h1}</h1>
                    </div>
                </Link>


                <Link className="footer-box-nine" to={navLinkAbout.to}>
                    <div
                        onMouseEnter={handleAboutEnter}
                        onMouseLeave={handleAboutLeave}
                        onFocus={handleAboutEnter}
                        onBlur={handleAboutEnter}
                    >
                        <h1>About.</h1>
                    </div>
                </Link>


                <div className="footer-box-ten"></div>


                {
                    socials.map((data) => (
                        <Link key={data.id} className={data.className} to={data.to} target={data.target} >
                            <div>
                                <img className="about-box-img" src="/bg.png" alt="Background" />
                                <div>{data.h1}</div>
                            </div>
                        </Link>
                    ))
                }
                <div className="footer-box-fourteen">
                    <div className='form'>
                        <form
                            action=""
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                placeholder='Enter your email'
                                value={email}
                                onChange={handleChange}
                                required
                            />

                            <button>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>


                <div className="footer-box-fifteen"></div>
                <div className="footer-box-seventeen">@2025 thecreativebugsmedia.com</div>
                <div className="twenty"></div>

                <div className="india">
                    <div className='footer-lottie-one'>
                        <Player
                            autoplay
                            loop
                            src={lottie}
                            className='footer-lottie'
                        />
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer