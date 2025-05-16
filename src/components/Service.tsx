import Heading from "./Heading"


const Service = () => {
    return (
        <>
            <main className="service">
                <div>
                    <Heading
                        one={"You dream it."}
                        oneColor={"var(--bg-red)"}
                        two={" We frame it."}
                        twoColor={"var(--bg-pink)"}
                    />
                </div>

                <div className="service-para-container">
                    <p>From scroll-stopping reels to soul-stirring documentaries, we blend imagination, strategy, and craft to bring every idea to life — frame by frame, beat by beat. Whether you're launching a brand, telling a story, or just vibing with your audience — we’re the creative crew you've been looking for.</p>
                </div>

                <div className="services-container">

                    <div className="service-container-one">
                        <h1 className="font-paytone">Editing & Post-Production</h1>
                        <p className="p">short-form magic, long-form energy</p>
                    </div>

                    <div className="service-container-two">
                        <h1 className="font-paytone">Video Production</h1>
                        <p>short-form magic</p>
                    </div>

                    <div className="service-container-three">
                        <h1 className="font-paytone">Video Production</h1>
                        <p>short-form magic</p>
                    </div>

                    <div className="service-container-four">
                        <h1 className="font-paytone">Editing & Post-Production</h1>
                        <p>short-form magic, long-form energy</p>
                    </div>

                    <div className="service-container-six">
                        <h1 className="font-paytone"> Animation & Motion Graphics</h1>
                        <p>short-form magic, long-form energy</p>
                    </div>
                </div>


            </main>
        </>
    )
}

export default Service