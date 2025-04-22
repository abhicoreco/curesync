import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div
      className={`relative hover:bg-[#0056B3] hover:text-white bg-white text-[#010B2A] rounded-lg shadow-md p-6 text-center max-w-[344px] mx-auto h-[180px] flex flex-col justify-center border border-[#0056B3]`}
    >
      {/* Card Content */}
      <h3 className={`text-xl font-bold mb-2`}>{title}</h3>
      <p className={`text-sm`}>"{description}"</p>

      {/* Circle at bottom */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <div
          className={`w-[40px] h-[40px] flex items-center justify-center bg-[#010B2A] rounded-full border-5 border-white hover:outline-0 outline outline-[#0056B3] shadow-md`}
        >
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
