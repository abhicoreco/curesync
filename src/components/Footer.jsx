import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#010B2A] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img
                src="../../public/logoWhite.png"
                alt="Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link
              to="/"
              className="text-sm md:text-base text-[#BBBBBB] hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/vaccine-trials"
              className="text-sm md:text-base text-[#BBBBBB] hover:text-white transition-colors duration-300"
            >
              Vaccine Trials
            </Link>
            <Link
              to="/immunization-records"
              className="text-sm md:text-base text-[#BBBBBB] hover:text-white transition-colors duration-300"
            >
              Immunization Records
            </Link>
            <Link
              to="/how-it-works"
              className="text-sm md:text-base text-[#BBBBBB] hover:text-white transition-colors duration-300"
            >
              How it Works
            </Link>
            <Link
              to="/ai-symptom-checker"
              className="text-sm md:text-base text-[#BBBBBB] hover:text-white transition-colors duration-300"
            >
              AI Symptom Checker
            </Link>
            <Link
              to="/contact"
              className="text-sm md:text-base text-[#BBBBBB] hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm text-[#BBBBBB]">
          &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
