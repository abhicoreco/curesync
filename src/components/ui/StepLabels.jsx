import React from 'react';

const StepLabels = ({ step }) => {
  return (
    <div className="text-center">
      <div className="flex items-center mb-1 sm:mb-2">
        <div
          className={`w-2.5 sm:w-3 md:w-[13px] h-2.5 sm:h-3 md:h-[13px] rounded-full ${step.active ? "bg-[#0056b3]" : "bg-[#c3c3c3]"} mr-1 sm:mr-2`}
        />
        <h3 className="font-['Manrope',Helvetica] font-medium text-[#3d3d3d] text-lg sm:text-xl md:text-2xl">
          Step {step.number}
        </h3>
      </div>
    </div>
  );
};

export default StepLabels;
