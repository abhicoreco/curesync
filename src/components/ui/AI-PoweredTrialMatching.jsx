import React from 'react';
import AiFeatureCard from '../ui/AiFeatureCard';

const AITrialMatching = () => (
    <div className="relative">
        <AiFeatureCard
            reverse={true}
            fullWidthLeft={true}  //align Card
            title="AI-Powered Trial Matching"
            description="Get instant updates on trial status & progress."
            points={
                <>
                    AI analyzes user health data (age, medical history, location, eligibility criteria).<br />
                    AI scans active vaccine trials and matches users with the most suitable trials.<br />
                    AI predicts success rates based on similar participant profiles.
                </>
            }
            imageElements={
                <>
                    <div className="absolute w-[412px] h-[428px] top-0 left-24 bg-[#eeeeee] border border-solid border-white" />
                    <div className="absolute w-[279px] h-[97px] top-[102px] left-0 bg-[#0056b3] rounded-[13px]" />
                    <div className="absolute w-[345px] h-[151px] top-[333px] right-0 bg-[#010b2a] rounded-[13px]" />
                </>
            }
        />
    </div>
);

export default AITrialMatching;
