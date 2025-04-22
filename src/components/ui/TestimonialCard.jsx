import React from "react";

function TestimonialCard({ text }) {
  return (
    <>
      <div className="group w-[320px] md:w-[380px] h-[320px] md:h-[370px] hover:bg-[#0056B3] hover:text-white max-w-sm p-6 rounded-md border flex flex-col justify-center gap-8 items-center transition-all duration-300 bg-white text-[#0a2540] border-[#0056b3]">
        <div className="flex justify-center mb-4 relative w-[38px] h-[31px]">
          {/* Inactive Quote (default) */}
          <img
            src="../../../inactiveQuote.png"
            alt="Inactive Quote"
            className="absolute w-full h-full group-hover:hidden"
          />
          {/* Active Quote (shown on hover) */}
          <img
            src="../../../activeQuote.png"
            alt="Active Quote"
            className="absolute w-full h-full hidden group-hover:block"
          />
        </div>
        <p className="text-sm leading-relaxed text-center">{text}</p>
      </div>
      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] mx-auto mb-1 transition-all duration-300 group-hover:border-t-[#0056b3] border-t-[#cdd7e2]"></div>
    </>
  );
}

export default TestimonialCard;
