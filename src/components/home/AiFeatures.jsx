import React from 'react';
import AISymptomChecker from '../ui/AISymptomChecker';
import AITrialMatching from '../ui/AI-PoweredTrialMatching';

const AIFeatures = () => {
    return (
        <section className="mt-[100px]">
                <AISymptomChecker/>
            <div className="mt-16">
                <AITrialMatching />
            </div>
        </section>
    );
};

export default AIFeatures;