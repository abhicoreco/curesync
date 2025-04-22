import React from 'react'
import HeroSection from '../components/home/HeroSection';
import AccordionSection from '../components/AccordionSection';
import UpdatesSection from '../components/home/UpdatesSection';
import VaccineTrialCarousel from '../components/home/VaccineTrialCarousal';
import StepsSection from '../components/home/StepsSection';
import DoubtSection from '../components/home/DoubtSection';
import AiChatAssistant from '../components/ui/AiChatAssistant';
import AIFeatures from '../components/home/AiFeatures';
import TestimonialCarousel from '../components/home/TestimonialCarousal';
import AITrialRecommendation from '../components/home/AITrialRecommendation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen space-y-8'>
      {/* Hero Section */}
        <HeroSection />
      {/* News Updates Section */}
        <UpdatesSection />
      {/* Why to join Section */}
        <VaccineTrialCarousel />
      {/* <AccordionSection/> */}
       <StepsSection/>

       <AITrialRecommendation/>

       <AIFeatures/>

       <TestimonialCarousel/>
      {/* FAQ Section */}
        <DoubtSection/> 
{/* 
        <AiChatAssistant/> */}
        <Footer/>
    </div>
  )
};

export default Home;