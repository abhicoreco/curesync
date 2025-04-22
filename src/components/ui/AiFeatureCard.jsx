import React from 'react';

const AiFeatureCard = ({ title, description, points, imageElements, reverse, fullWidthLeft }) => (
    <div className={`bg-white border border-solid border-[#0056b3] p-6 md:p-12 ${fullWidthLeft ? 'md:ml-15 rounded-l-2xl' : 'md:mr-15 rounded-r-2xl'}`}>
        <div> 
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} mt-6 md:mt-12 items-center`}> 
                <div className=" max-w-full md:max-w-[566px] text-center md:text-left p-4">
                    <h2 className="font-['Inter',Helvetica] font-semibold text-[#010b2a] text-[28px] md:text-[40px] pb-2">{title}</h2>
                    <p className="font-['Inter',Helvetica] font-medium text-[#515151] text-[18px] md:text-[23px]">{description}</p>
                    <div className="mt-6 md:mt-12 font-['Inter',Helvetica] font-medium text-[#4f4f4f] text-[16px] md:text-[22px]">{points}</div>
                </div>
                <div className="hidden md:block relative md:w-[629px] h-auto md:h-[484px] mt-6 md:mt-0 justify-center p-4">
                    {imageElements}
                </div>
            </div>
        </div>
    </div>
);

export default AiFeatureCard;