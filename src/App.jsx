import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import SocialPrograms from './pages/SocialPrograms';
import SocialProgram from './pages/SocialProgram';
import Trip from './pages/Trip';
import OptionalTrip from './pages/OptionalTrip';
import Transport from './pages/Transport';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socialprogram" element={<SocialPrograms />} />
        <Route path="/socialprogram/:sName" element={<SocialProgram />} />

        <Route path="/trip" element={<Trip />} />
        <Route path="/trip/:sName" element={<SocialProgram />} />

        <Route path="/optional-trip" element={<OptionalTrip />} />
        <Route path="/optional-trip/:sName" element={<SocialProgram />} />

        <Route path="/transport" element={<Transport />} />


        <Route path="*" element={<div> Not Found </div>} />
      </Routes>
    </>
  )
}

export default App
