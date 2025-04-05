import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Preloader from './pages/Preloader';
import Index from './routes/Index';
import Gallery from './pages/Gallery'
import Numbers from './pages/Numbers';
import Profiles from './pages/Profiles';
import Partner from './pages/Partner';
import WorkFlow from './pages/WorkFlow';
import We from './pages/We';
import NotFound from './pages/NotFound'
import CallUs from './pages/CallUs';
import BookCallLink from './hooks/BookCallLink';




function GridLayout({ children }) {
  return (
    <>
      <div className="bg-grid-small"></div>
      {children}
    </>
  );
}

function App() {


  return (
    <>
      <Router>
        {/* <Preloader /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/achive" element={<Numbers />} />
          <Route path="/team" element={<Profiles />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/workflow" element={<WorkFlow />} />
          <Route path="/about" element={<We />} />
          <Route path='/bookcall' element={<BookCallLink />} />

          <Route path='/gallery' element={
            <GridLayout>
              <Gallery />
            </GridLayout>
          } />

          <Route path="*" element={
            <GridLayout>
              <NotFound />
            </GridLayout>
          } />

        </Routes>

      </Router >
    </>
  )
}

export default App
