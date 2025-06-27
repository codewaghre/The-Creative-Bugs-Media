import Hero from "@/pages/Hero"
import Numbers from "@/pages/Numbers"
import Craft from "../pages/Craft"
import Workflow from "@/pages/Workflow"
// import Partnership from "@/pages/Partnership"
import About from "@/pages/About"
import Connect from '../nav-pages/Connect'
import Testimonials from "@/pages/Testimonials"

const username = import.meta.env.VITE_USERNAME;
const eventId = import.meta.env.VITE_EVENT_ID;



const Index = () => {
    return (
        <div className='content-container'>
            <Hero />
            <Numbers />
            <Craft />
            <Workflow />
            <Testimonials />
            {/* <Partnership /> */}
            <About />
            <Connect username={username} eventId={eventId} />
        </div>
    )
}

export default Index