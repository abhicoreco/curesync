import React from 'react'
import StepIndicator from '../ui/StepIndicator';
import StepLabels from '../ui/StepLabels';

const StepsSection = () => {
    
    const steps = [
        { number: 1, icon: "../../../public/add-user.png", active: true },
        { number: 2, icon: "../../../public/test-tube.png", active: true },
        { number: 3, icon: "../../../public/graph-bar.png", active: false },
        { number: 4, icon: "../../../public/certificate.png", active: false },
    ];

    return (
        <section className="mt-[50px] sm:mt-[80px] md:mt-[100px] lg:mb-10 w-full flex flex-col gap-5 px-4 sm:px-10 relative">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 ml-4 sm:ml-10">
                How it <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">
                    Works ?
                </span>
            </h2>

            <div className='flex justify-between relative px-2 sm:px-4'>
                <div className="absolute w-full max-w-[609px] h-[10px] sm:h-[12px] md:h-[15px] top-[14px] sm:top-[18px] md:top-[22px] left-6 sm:left-12 rounded-[10px] bg-gradient-to-r from-[rgba(0,86,179,1)] via-[rgba(136,216,255,1)] to-[rgba(255,255,255,1)]" />
                {steps.map((step, index) => (
                    <StepIndicator key={index} step={step} index={index} />
                ))}
            </div>

            <div className="flex justify-between relative mt-2 sm:mt-3">
                {steps.map((step, index) => (
                    <StepLabels key={index} step={step} />
                ))}
            </div>
        </section>
    )
}

export default StepsSection;
