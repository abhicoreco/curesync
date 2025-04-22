import React from 'react'

const StepIndicator = ({ step, index }) => {
    return (
        <>
            {index < 4 && (
                <div
                    className="w-[59px] h-[59px] top-0 bg-[#010B2A] rounded-[29.5px] z-0 flex items-center justify-center"
                    style={{ left: index === 0 ? 0 : "388px" }}
                >
                    {step.icon && (
                        <img
                            className="md:w-[30px] md:h-[30px] w-[12px] h-[12px] filter invert"
                            alt={`Step ${step.number}`}
                            src={step.icon}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export default StepIndicator;