import { useState, FormEvent, ChangeEvent } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Footer = () => {

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

    return (
        <footer>
            <div className="footer-container">

                <div className="footer-box-one"></div>
                <div className="footer-box-two"></div>
                <div className="footer-box-three"></div>
                <div className="footer-box-four"></div>

                <div className="footer-box-five"></div>
                <div className="footer-box-six">
                    <h1 >
                        <a href="">
                            Creative<span className="font-outfit bugs">BUG'S</span>
                        </a>
                    </h1>
                </div>
                <div className="footer-box-seven">
                    <h1>
                        <a href="">Work.</a>
                    </h1>
                </div>
                <div className="footer-box-eight">
                    <h1>
                        <a href="">Connect.</a>
                    </h1>
                </div>

                <div className="footer-box-nine">
                    <h1><a href="">About.</a></h1>
                </div>



                <div className="footer-box-ten">
                </div>
                <div className="footer-box-eleven">
                    <img className="about-box-img" src="/bg.png" alt="Background" />
                    <div>
                        x
                    </div>
                </div>
                <div className="footer-box-twelve">
                    <div>
                        LinkdIn
                    </div>
                </div>
                <div className="footer-box-thirteen">
                    <div>
                        <h1>cretivebugsmedia@gmail.com</h1>
                    </div>
                </div>
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
                <div className="footer-box-seventeen">@2022 - @2025 thecreativebugsmedia.com</div>
                <div className="footer-box-eighteen">Disclaimer</div>
                <div className="footer-box-nineteen">Terms and Conditions</div>

                <div className="twenty"></div>

                <div className="india">
                    <div className='footer-lottie-one'>
                        <Player
                            autoplay
                            loop
                            src="/lottie/india.json"
                            className='footer-lottie'
                        />
                    </div>
                </div>


            </div>
        </footer >
    )
}

export default Footer