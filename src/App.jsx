import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/index';
import About from './pages/About';
import Programs from './pages/Programs';
import FamilyFoodPack from './pages/FamilyFoodPack';
import Donate from './pages/Donate';
import WaterProjects from './pages/WaterProjects';
import Education from './pages/Education';
import EmergencyRelief from './pages/EmergencyRelief';
import MedicalAid from './pages/MedicalAid';
import SeasonalGiving from './pages/SeasonalGiving';
import Impact from './pages/Impact';
import News from './pages/News';
import Contact from './pages/Contact';
import SponsorATeacher from './pages/SponsorATeacher';
import SponsorAWidow from './pages/SponsorAWidow';
import SponsorAStudent from './pages/SponsorAStudent';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/family-food-pack" element={<FamilyFoodPack />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/programs/water-projects" element={<WaterProjects />} />
                <Route path="/programs/education" element={<Education />} />
                <Route path="/programs/emergency-relief" element={<EmergencyRelief />} />
                <Route path="/programs/medical-aid" element={<MedicalAid />} />
                <Route path="/programs/sponsor-a-teacher" element={<SponsorATeacher />} />
                <Route path="/programs/sponsor-a-student" element={<SponsorAStudent />} />
                <Route path="/programs/sponsor-a-widow" element={<SponsorAWidow />} />
                <Route path="/programs/seasonal-giving" element={<SeasonalGiving />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

