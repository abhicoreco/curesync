import { Globe } from "lucide-react";
import Carousel from "../ui/Carousel";
import MaskGroup from "/Mask group.png";
import {Button} from "../ui/Button";

const VaccineTrialCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Contribute to Global Health",
      icon: <Globe className="text-blue-600 w-6 h-6" />,
      description: "Help advance vaccine development and protect future generations.",
      subDescription:
        "Your participation contributes to the development of safe and effective vaccines that prevent life-threatening illnesses worldwide.",
    },
    {
      id: 2,
      title: "Receive Expert Medical Care",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      description: "Get access to cutting-edge medical treatments and monitoring.",
      subDescription:
        "Trial participants receive comprehensive health screenings and ongoing medical attention throughout the study period.",
    },
  ];

  return (
    <div className="w-full bg-white md:mt-25 overflow-hidden">
      <div className="max-w-screen flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative">
        {/* Image Section */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[450px] md:h-[550px] overflow-hidden">
            <img
              src={MaskGroup}
              alt="Vaccine Trial"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="w-full md:w-3/5 flex flex-col items-start text-center md:text-left pr-0 md:pr-4">
          <div className=" md:pl-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Why join a vaccine <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">trial?</span>
            </h2>
            <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
              "Clinical trials help ensure vaccines are safe and effective. By participating, you contribute to global health while receiving expert medical care."
            </p>
          </div>
          
          <div className="mt-6 w-full h-auto md:w-auto flex justify-center md:justify-start">
            <Carousel slides={slides} />
          </div>
          <div className=" flex w-full pl-8 justify-center md:justify-start mt-4 md:mt-1">
            <Button varient='trial' className="px-6 py-3 bg-white w-[227px] h-[52px] border border-[#010B2A] text-[#010B2A] text-[14px] hover:text-white rounded-md font-medium hover:bg-gray-800  transition" >
              Check your Eligibility
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VaccineTrialCarousel;
