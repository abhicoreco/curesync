import React from "react";
import { Syringe, FileText, Activity } from "lucide-react";
import Navbar from "./Navbar";
import CustomerRatingCard from "./ui/customerRatingCard";

// Import images
import customerImage from "../../Ellipse 6.png";
import doctorImage from "../../doctor.png";
import quote from "../../quote.svg";
import FeatureCard from "./ui/FeatureCard";

const HeroSection = () => {
  const dummyCustomers = [
    { image: customerImage },
    { image: customerImage },
    { image: customerImage },
    { image: customerImage },
  ];

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
    <div className="min-h-screen h-[1164px] relative w-full">
      <img
        className="absolute w-[1437px] h-[1164px] top-0 left-0 z-0"
        alt="Vector"
        src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-3449.svg"
      />
      <img
        className="absolute w-[1456px] h-[543px] top-[396px] left-[0px]"
        alt="Vector"
        src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-2-1.svg"
      />
      <Navbar />
      {/* Blue curved shape on left */}
      <div className="absolute top-0 left-0 w-24 h-36 md:w-[112px] md:h-[177px] bg-[#0056B3] rounded-br-[100px]"></div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[54px]">
              <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">
                Your trusted partner
              </span>
              <br />
              in digital healthcare.
            </h1>
            <p className="text-gray-600 text-lg">
              Join a Vaccine Trial and Secure your Immunization
              <br />
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

          {/* Right Content - Doctor Image & Review Card */}
          <div className="relative flex justify-end">
            {/* Customer rating card */}
            <div className="absolute -top-6 left-6 z-20">
              <CustomerRatingCard customers={dummyCustomers} count={2400} rating={4.7} />
            </div>

            {/* Doctor Image */}
            <div className="relative w-[354px] h-[442px]">
              <img
                src={doctorImage}
                alt="Healthcare Professional"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Blue Circle Background */}
            {/* <div className="absolute w-[238px] h-[238px] top-[450px] left-[450px] bg-[#0056b380] rounded-[119px] blur-[150px]" /> */}

            {/* Testimonial Quote */}
            <div className="absolute bottom-0 left-8 z-10 bg-white rounded-lg shadow-md p-4 w-[400px] h-[113px] border border-blue-200 flex flex-col gap-2">
              <img src={quote} alt="quote" className="absolute w-[62px] h-[50px] top-[-38px] left-5" />
              <p className="absolute w-[405px] top-[39px] left-[21px] font-medium text-neutrals-900 text-base">
                "AI-powered vaccine trials, secure tracking, and blockchain protection."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container flex justify-center absolute mx-auto px-4 pb-24 top-[830px] items-center">
        <div className="flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
