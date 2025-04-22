import React from "react";

const AITrialRecommendation = () => {
  return (
    <div className="relative mt-10 w-full max-w-screen left-0 mx-0 py-12  md:px-6 ">
      {/* Content container */}
      <div className="relative  z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left side with flow diagram */}
          <div className="relative w-full md:w-2/5 md:flex hidden justify-center">
            {/* Vertical line/rectangle */}
            <img src="/screen.png" className="" alt="" />
            {/* Background image for the left side */}
            <img src="/signupbg.png" className="absolute top-[-40px] left-0 z-[-1]" />
          </div>

          {/* Right side with text and illustration */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-enter justify-center px-4 space-y-8 md:pl-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#0A2463]">
            <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">Sign Up </span> and
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2463] mt-1">Get Matched</h2>
            <p className="text-gray-600 mt-3 text-lg">AI recommends the best trial for you</p>
          </div>

          {/* Medical professionals illustration */}
          <div className="w-full max-w-[320px] md:max-w-[400px] h-[180px] md:h-[220px] mt-4 items-end right-0 ">
        {/* Storyboard Image */}
          <img
            className=" w-[100%] sm:w-[634px] h-auto max-h-[319px] top-[50%]  sm:right-[30px] "
            alt="Story board"
            src="https://c.animaapp.com/m8sv2x5wuEhcZn/img/story-board-21-2.png"
          />
          </div>
        </div>
      </div>
    </div>
    // <div className="mt-12 relative flex flex-col items-center px-4">
    //   {/* Text Section */}
    //   <div className="absolute top-[40%] sm:top-[50%] right-4 sm:right-[100px] text-center sm:text-left text-lg sm:text-xl md:text-2xl font-bold leading-tight">
    //     <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent block">
    //       Your trusted partner
    //     </span>
    //     <span className="block text-gray-900">
    //       AI recommends the best trial for you
    //     </span>
    //   </div>

    //   {/* Background Image */}
    //   <img
    //     className="w-full max-w-[918px] h-auto"
    //     alt="Process flow"
    //     src="https://c.animaapp.com/m8sv2x5wuEhcZn/img/vector-3460.svg"
    //   />

    //   {/* Box Overlays */}
    //   <div className="absolute w-[90%] sm:w-[382px] h-auto sm:h-[776px] top-0 left-4 sm:left-[196px] bg-white border border-black rounded-lg" />
    //   <div className="absolute w-[85%] sm:w-[326px] h-28 sm:h-36 top-[20%] left-4 sm:left-[87px] bg-[#0056b3] rounded-lg" />
    //   <div className="absolute w-[90%] sm:w-[345px] h-24 sm:h-[102px] top-[55%] left-8 sm:left-[371px] bg-[#010b2a] rounded-lg" />

    //   {/* Storyboard Image */}
    //   <img
    //     className="absolute w-[95%] sm:w-[634px] h-auto max-h-[319px] top-[60%] right-0 sm:right-[30px] object-contain"
    //     alt="Story board"
    //     src="https://c.animaapp.com/m8sv2x5wuEhcZn/img/story-board-21-2.png"
    //   />
    // </div>
  );
};

export default AITrialRecommendation;
