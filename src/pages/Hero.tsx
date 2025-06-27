
import { Link } from "react-router-dom";
import homeData from '../data/home.json'

const Hero = () => {

  const { h1, p1, p2, p1_bold, b1, b2 } = homeData

  const handleWorkEnter = () => {
    document.body.classList.add('logo-hover-work');
  };

  const handleWorkLeave = () => {
    document.body.classList.remove('logo-hover-work');
  };

  const handleConnectEnter = () => {
    document.body.classList.add('logo-hover-connect');
  };

  const handleConnectLeave = () => {
    document.body.classList.remove('logo-hover-connect');
  };
  return (

    <main className="hero block-gradient">
      <div className="hero-grid inline-gradient">
        {/* Decorative/structural divs - marked as aria-hidden */}
        <div className="hero-box-one" aria-hidden="true"></div>
        <div className="hero-box-two" aria-hidden="true"></div>
        <div className="hero-box-three" aria-hidden="true"></div>
        <div className="hero-box-four" aria-hidden="true"></div>
        <div className="hero-box-five" aria-hidden="true"></div>
        <div className="hero-box-six" aria-hidden="true"></div>
        <div className="hero-box-eight" aria-hidden="true"></div>

        {/* Content Sections */}
        <section
          className="hero-box-seven flex-center-column"
          aria-labelledby="hero-heading"
        >
          <div className="hero-heading font-paytone">
            <h1 id="hero-heading">
              {h1}
            </h1>
          </div>
        </section>

        <section
          className="hero-box-nine flex-center-column"
          aria-labelledby="hero-stats"
        >
          <div className="hero-para">
            <p id="hero-stats">
              <strong>{p1_bold}</strong>{p1}<br />
              {p2}
            </p>
          </div>
        </section>

        <section
          className="hero-box-ten flex-center"
          aria-label="Call to Action"
        >
          <div className="hero-button">

            <Link to={"/work"}>
              <button
                onMouseEnter={handleWorkEnter}
                onMouseLeave={handleWorkLeave}
                onFocus={handleWorkEnter}
                onBlur={handleWorkLeave}
                className="btn-one-work"
                aria-label="View our portfolio work"
              >
                {b1}
                <span className="sr-only"> - View our portfolio</span>
              </button>
            </Link>

            <Link to={"/connect"}>
              <button
                className="btn-two-connect"
                onMouseEnter={handleConnectEnter}
                onMouseLeave={handleConnectLeave}
                onFocus={handleConnectEnter}
                onBlur={handleConnectLeave}
                aria-label="Contact us"
              >
                {b2}
                <span className="sr-only"> - Get in touch with our team</span>
              </button>
            </Link>

          </div>
        </section>
      </div>
    </main>
  )
}

export default Hero