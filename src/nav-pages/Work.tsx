import CraftVideoOne from "@/components/CraftVideoOne"
import CraftVideoTwo from "@/components/CraftVideoTwo"
import Heading from "@/components/Heading"


const Work = () => {
    return (
        <>
            <main className="work">

                <div>
                    <Heading
                        one="Our Imapact"
                        oneColor={"var(--bg-orange)"}
                        two=" and Expertise"
                        twoColor={"var(--bg-green)"}
                    />
                </div>

                <div className="work-para">
                    <h1 className="font-paytone">Bringing visions to life</h1>
                    <p>Transforming ideas into captivating realities, one project at a time</p>
                    <p>At The Creative Bugs Media, every frame is a canvas, and every project is a masterpiece in motion. With a fearless blend of storytelling and visual design, our Craft Project embodies the soul of cinematic expression — where color, sound, and rhythm collide to craft unforgettable narratives. From the first sketch to the final cut, we weave intention into every pixel, embracing emotion, movement, and innovation. Whether it’s a podcast that stirs thought, a reel that electrifies scrolls, or a short film that lingers in memory, our team of artists, editors, and visionaries pour raw creativity into refined production. Craft isn’t just a project — <span className="bg-green">it’s our tribute to the art of impact.</span></p>
                </div>

                <div className="work-container">
                    <div>
                        <CraftVideoOne />
                    </div>

                    <div>
                        <CraftVideoTwo />
                    </div>
                </div>


                <div className="work-para">
                    <h1 className="font-paytone">Welcome to the Gallery</h1>
                    <p>experience the art — frame by frame.</p>
                    <p>Step into a visual journey where every image tells a story, every frame captures a feeling, and every detail reveals the soul of our craft. From behind-the-scenes moments to polished productions, this gallery is a window into the vibrant world of The Creative Bugs Media.<span className="bg-green">passion, precision, and creativity</span></p>
                </div>

                <div className="gallery">
                    <div className="image-container">
                        <img src="1.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="2.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="https://images.unsplash.com/photo-1585802540745-bb23da2d6246?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="image-container">
                        <img src="4.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="5.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="6.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="7.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="8.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="9.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="10.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="11.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="12.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="13.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="14.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="15.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="16.jpg" />
                    </div>
                    <div className="grid-item">
                        <img src="17.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="18.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="19.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="20.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="21.jpg" />
                    </div>
                    <div className="image-container tall">
                        <img src="22.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="23.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="24.jpg" />
                    </div>
                    <div className="image-container">
                        <img src="25.jpg" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Work