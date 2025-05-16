

const Hero = () => {

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
              Crafting Stories & Building Brands<br />
              for the Future
            </h1>
          </div>
        </section>

        <section
          className="hero-box-nine flex-center-column"
          aria-labelledby="hero-stats"
        >
          <div className="hero-para">
            <p id="hero-stats">
              <strong>87% of marketers</strong> say video boosts lead generation.<br />
              This isn’t just a passing trend—it’s a powerful shift that’s transforming engagement,
              boosting conversions, and shaping the future of marketing.
            </p>
          </div>
        </section>

        <section
          className="hero-box-ten flex-center"
          aria-label="Call to Action"
        >
          <div className="hero-button">
            <button
              onMouseEnter={handleWorkEnter}
              onMouseLeave={handleWorkLeave}
              onFocus={handleWorkEnter}
              onBlur={handleWorkLeave}
              className="btn-one-work"
              aria-label="View our portfolio work"
            >
              Our Work
              <span className="sr-only"> - View our portfolio</span>
            </button>

            <button
              className="btn-two-connect"
              onMouseEnter={handleConnectEnter}
              onMouseLeave={handleConnectLeave}
              onFocus={handleConnectEnter}
              onBlur={handleConnectLeave}
              aria-label="Contact us"
            >
              Connect
              <span className="sr-only"> - Get in touch with our team</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Hero