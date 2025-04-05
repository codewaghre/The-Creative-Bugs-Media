import React from 'react'
import Home from '../pages/Home'
import Collaboration from '../pages/Collaboration'
import Numbers from '../pages/Numbers'
import Craft from '../pages/Craft'
import Partner from '../pages/Partner'
import Profiles from '../pages/Profiles'
import WorkFlow from '../pages/WorkFlow'
import We from '../pages/We'
import FrameVideo from '../pages/FrameVideo'
import Footer from '../components/Footer'
import CallUs from '../pages/CallUs'




function Index() {
    return (
        <>
            <div className="bg-grid-small"></div>
            <div className="scroll-container" style={{ position: 'relative' }}>
                <div className="content">
                    <Home />
                    <Collaboration />
                    <Numbers />
                    <Craft />
                    <Partner />
                    <Profiles />
                    <CallUs />
                    <FrameVideo />
                    <WorkFlow />
                    <We />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Index