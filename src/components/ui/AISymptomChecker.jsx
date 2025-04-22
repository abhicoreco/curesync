import React from 'react';
import AiFeatureCard from '../ui/AiFeatureCard';

const AISymptomChecker = () => (
    <div className="relative">
        <AiFeatureCard
            fullWidthLeft={false} // Allign Card Position
            title="AI Symptom Checker"
            description="AI Symptom Checker is an intelligent health assistant designed to help users track, analyze, and manage post-vaccine symptoms in real time."
            points={
                <>
                    Instantly assesses <br />
                    <br /> Possible side effects
                    <br /> Suggests next steps
                    <br /> Provides expert-backed guidance.
                </>
            }
            imageElements={
                <>
                    <div className="absolute max-md:relative w-[412px] h-[428px] top-0 right-[74px] bg-[#eeeeee] border border-solid border-white" />
                    <div className="absolute max-md:relative w-[326px] h-36 top-[102px] left-0 bg-[#0056b3] rounded-[13px]" />
                    <div className="absolute max-md:relative w-[345px] h-[151px] top-[333px] right-0 bg-[#dff4ff] rounded-[13px]" />
                </>
            }
        />
    </div>
);

export default AISymptomChecker;
