import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import SocialPrograms from './pages/SocialPrograms';
import SocialProgram from './pages/SocialProgram';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socialprogram" element={<SocialPrograms />} />
        <Route path="/socialprogram/:sName" element={<SocialProgram />} />

        <Route path="*" element={<div> Not Found </div>} />
      </Routes>
    </>
  )
}

export default App
