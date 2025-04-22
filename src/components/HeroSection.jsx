import React from "react";
import { Syringe, FileText, Activity } from "lucide-react";
import Navbar from "./Navbar";
import CustomerRatingCard from "./ui/customerRatingCard";

import customerImage from "../../Ellipse 6.png";
import doctorImage from "../../doctor.png";
import quote from "../../quote.svg";
import FeatureCard from "./ui/FeatureCard";

const HeroSection = () => {
  const dummyCustomers = Array(4).fill({ image: customerImage });

  const features = [
    {
      icon: Syringe,
      title: "AI Powered Trial Matching",
      description: "AI-powered vaccine trial matching, instantly.",
    },
    {
      icon: FileText,
      title: "Secure Immunization Records",
      description: "Secure, blockchain-verified vaccination history.",
    },
    {
      icon: Activity,
      title: "Real-Time Trial Updates & Tracking",
      description: "Live updates on trial progress, approvals, and results.",
    },
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background SVGs */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0 max-h-[1300px] hidden xl:block"
        alt="Background"
        src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-3449.svg"
      />
      <img
        className="absolute top-[400px] left-0 w-full object-cover z-0 hidden xl:block"
        alt="Overlay"
        src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-2-1.svg"
      />

      <Navbar />

      {/* Blue curved shape */}
      <div className="absolute top-0 left-0 w-20 h-28 md:w-28 md:h-44 bg-[#0056B3] rounded-br-[100px] z-10" />

      {/* Hero Content */}
      <section className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">
                Your trusted partner
              </span>
              <br />
              in digital healthcare.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Join a Vaccine Trial and Secure your Immunization<br />
              Records with AI Powered Transparency
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition">
                Find a Trial
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition">
                Sign up
              </button>
            </div>
          </div>

          {/* Right Image & Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -top-8 -left-4 md:-top-10 md:-left-8 z-20">
              <CustomerRatingCard customers={dummyCustomers} count={2400} rating={4.7} />
            </div>

            <div className="relative w-[90%] max-w-[400px] h-auto z-10">
              <img
                src={doctorImage}
                alt="Healthcare Professional"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Quote Card */}
            <div className="absolute bottom-0 left-0 lg:left-8 z-10 bg-white rounded-lg shadow-md px-5 py-4 w-full max-w-[400px] border border-blue-200">
              <img src={quote} alt="quote" className="w-12 h-10 -mt-12 ml-4" />
              <p className="text-gray-800 text-base mt-2 font-medium">
                "AI-powered vaccine trials, secure tracking, and blockchain protection."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 bg-white w-full px-4 pb-24">
        <div className="container mx-auto flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
