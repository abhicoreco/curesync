import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 container mx-auto px-3 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#010B2A]">
          <img
            src="../../logo.png"
            alt="Logo"
            className="h-20 md:h-30 w-auto"
          />
        </Link>

        {/* Hamburger Icon (Visible on small screens) */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex text-lg font-bold text-[#BBBBBB] ${
            isOpen ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          <Link
            to="/"
            className="block md:inline py-2 px-4 text-[#BBBBBB] hover:text-[#010B2A] active:text-[#010B2A] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/vaccine-trials"
            className="block md:inline py-2 px-4 text-[#BBBBBB] hover:text-[#010B2A] active:text-[#010B2A] transition-colors duration-300"
          >
            Vaccine Trials
          </Link>
          <Link
            to="/immunization-records"
            className="block md:inline py-2 px-4 text-[#BBBBBB] hover:text-[#010B2A] active:text-[#010B2A] transition-colors duration-300"
          >
            Immunization Records
          </Link>
          <Link
            to="/how-it-works"
            className="block md:inline py-2 px-4 text-[#BBBBBB] hover:text-[#010B2A] active:text-[#010B2A] transition-colors duration-300"
          >
            How it Works
          </Link>
          <Link
            to="/ai-symptom-checker"
            className="block md:inline py-2 px-4 text-[#BBBBBB] hover:text-[#010B2A] active:text-[#010B2A] transition-colors duration-300"
          >
            AI Symptom Checker
          </Link>
          <Link
            to="/contact"
            className="block md:inline py-2 px-4 text-[#BBBBBB] hover:text-[#010B2A] active:text-[#010B2A] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;