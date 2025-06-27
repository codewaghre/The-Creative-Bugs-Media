import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Index from './Routes/Index';
import About from './nav-pages/About'
import Footer from './pages/Footer';
import Work from './nav-pages/Work';
import Connect from './nav-pages/Connect'
import PreLoader from './pages/PreLoader';
import { useState } from 'react';
import NotFound from './pages/NotFound';


const username = import.meta.env.VITE_USERNAME;
const eventId = import.meta.env.VITE_EVENT_ID;


function App() {

  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <Router>
        {!loadingComplete && <PreLoader onComplete={() => setLoadingComplete(true)} />}
        {loadingComplete && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/connect" element={<Connect username={username} eventId={eventId} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router >
    </>
  )
}

export default App
