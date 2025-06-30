import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { HeadProvider } from 'react-head';

import Navbar from './components/Navbar';
import Index from './Routes/Index';
import About from './nav-pages/About'
import Footer from './pages/Footer';
import Work from './nav-pages/Work';
import Connect from './nav-pages/Connect'
import PreLoader from './pages/PreLoader';

import NotFound from './pages/NotFound';

import { Toaster } from 'react-hot-toast';


const username = import.meta.env.VITE_USERNAME;
const eventId = import.meta.env.VITE_EVENT_ID;


function App() {

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    if (hasSeenPreloader) {
      setLoadingComplete(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasSeenPreloader", "true");
    setLoadingComplete(true);
  };


  return (
    <>
      <HeadProvider>

        <Toaster position="bottom-center" reverseOrder={false} />

        <Router>
          {!loadingComplete && <PreLoader onComplete={handlePreloaderComplete} />}
          {loadingComplete && (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Connect username={username} eventId={eventId} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </>
          )}
        </Router >

      </HeadProvider>

    </>
  )
}

export default App
