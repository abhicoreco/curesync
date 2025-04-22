import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import VaccineTrials from "./pages/VaccineTrials";
import ImmunizationRecords from "./pages/ImmunizationRecords";
import HowItWorks from "./pages/HowItWorks";
import AISymptomChecker from "./pages/AISymptomChecker";
import Contact from "./pages/Contact";
import VaccineSignup from './pages/Signup';

function App() {

  return (
    <Routes>
       <Route index element={<Home/>} />
       <Route path="/Signup" element={<VaccineSignup />} />
      <Route path='/' element={<Layout/>}> 
       
        <Route path="vaccine-trials" element={<VaccineTrials />} />
        <Route path="immunization-records" element={<ImmunizationRecords />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="ai-symptom-checker" element={<AISymptomChecker />} />
        <Route path="contact" element={<Contact />} />

      </Route>
    </Routes>
  )
};

export default App;
