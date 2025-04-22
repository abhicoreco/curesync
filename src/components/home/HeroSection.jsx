import React from "react";
import { Syringe, FileText, Activity } from "lucide-react";
import Navbar from "../Navbar";
import CustomerRatingCard from "../ui/customerRatingCard";

// Import images
import customerImage from "/Ellipse 6.png";
import customerImage1 from "/Ellipse 7.png";
import customerImage2 from "/Ellipse 8.png";
import customerImage3 from "/Ellipse 9.png";
import doctorImage from "/doctor.png";
import quote from "/quote.svg";
import FeatureCard from "../ui/FeatureCard";
import icon1 from "/icon1.svg";
import icon2 from "/icon2.svg";
import icon3 from "/icon3.svg";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const dummyCustomers = [
    { image: customerImage },
    { image: customerImage1 },
    { image: customerImage2 },
    { image: customerImage3 },
  ];

  const features = [
    {
      icon: icon1,
      title: "AI Powered Trial Matching",
      description: "AI-powered vaccine trial matching, instantly.",
    },
    {
      icon: icon2,
      title: "Secure Immunization Records",
      description: "Secure, blockchain-verified vaccination history.",
    },
    {
      icon: icon3,
      title: "Real-Time Trial Updates & Tracking",
      description: "Live updates on trial progress, approvals, and results.",
    },
  ];

  return (
    <div className="min-h-screen relative w-full lg:mb-10">
      {/* <img
        className="absolute w-full max-w-none md:max-w-full h-[1164px] top-0 left-0 z-0"
        alt="Vector"
        src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-3449.svg"
      /> */}
      <img
        className="absolute w-full h-auto max-w-none md:max-w-full top-[30%] left-0"
        alt="Vector"
        src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-2-1.svg"
      />
      <Navbar />
      {/* Blue curved shape on left */}
      <div className="absolute top-0 left-0 w-16 h-24 md:w-[112px] md:h-[177px] bg-[#0056B3] rounded-br-[100px]"></div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:mb-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-[40px] md:leading-[54px]">
              <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">
                Your trusted partner
              </span>
              <br />
              in digital healthcare.
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Join a Vaccine Trial and Secure your Immunization
              <br className="hidden md:block" />
              Records with AI Powered Transparency
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button varient='trial' className="px-6 py-3 md:w-[162px] md:h-[52px] bg-transparent border border-[#010B2A] text-[#010B2A] text-[15px] hover:text-white rounded-md font-medium hover:bg-gray-800 transition">
                Find a Trial
              </Button>
              <Button to='/signup' varient='trial' className="px-6 py-3 md:w-[162px] md:h-[52px] bg-transparent border border-[#010B2A] text-[#010B2A] text-[15px] hover:text-white rounded-md font-medium hover:bg-gray-800  transition">
                <Link to="/signup">
                Sign up
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Doctor Image & Review Card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Customer rating card */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-6 z-20 w-[90%] sm:w-auto">
              <CustomerRatingCard customers={dummyCustomers} count={2400} rating={4.7} />
            </div>

            {/* Doctor Image */}
            <div className="relative w-[250px] h-[300px] md:w-[354px] md:h-[442px]">
              <img
                src={doctorImage}
                alt="Healthcare Professional"
                className="object-cover w-full h-full"
              />
            </div>

           { /* Testimonial Quote */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-8 z-10">
              <div className="bg-gradient-to-r from-[#0056B3] to-[#C5ECFF] p-[2px] rounded-xl w-[350px] md:w-[400px]">
                <div className="bg-white rounded-xl shadow-md p-4 h-auto flex flex-col gap-2 relative">
                  <img
                    src={quote}
                    alt="quote"
                    className="absolute w-[40px] md:w-[62px] h-[30px] md:h-[50px] top-[-20px] md:top-[-38px] left-5"
                  />
                  <p className="font-medium text-neutrals-900 text-sm md:text-base">
                    "AI-powered vaccine trials, secure tracking, and blockchain protection."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex w-full justify-center mx-auto px-4 pb-24 lg:mt-40 items-center">
        <div className="flex flex-col md:flex-row flex-wrap gap-14 md:gap-6 justify-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
