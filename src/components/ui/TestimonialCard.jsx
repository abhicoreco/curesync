import React from "react";

function TestimonialCard({ text }) {
  const baseStyles =
    "w-[320px] md:w-[380px] h-[320px] md:h-[370px] hover:bg-[#0056B3] hover:text-white max-w-sm p-6 rounded-md border flex flex-col justify-center gap-8 items-center transition-all duration-300 bg-white text-[#0a2540] border-[#0056b3]";
  const triangleBaseStyles =
    "w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] mx-auto mb-1 transition-all duration-300";

  return (
    <>
      <div className={baseStyles}>
        <div className="flex justify-center mb-4">
          <img
            src="../../../public/activeQuote.png"
            alt="Quote"
            className="w-[38px] h-[31px] hover:hidden "
          />
          <img
            src="../../../public/inactiveQuote.png"
            alt="Quote"
            className="w-[38px] h-[31px] hover:hidden"
          />
        </div>
        <p className="text-sm leading-relaxed text-center">{text}</p>
      </div>
      <div
        className={`${triangleBaseStyles} hover:border-t-[#0056b3] border-t-[#cdd7e2]`}
      ></div>
    </>
  );
}

export default TestimonialCard;
