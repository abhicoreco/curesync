import React from 'react'
import AccordionContainer from '../ui/AccordionContainer';
import AiChatAssistant from '../ui/AiChatAssistant';

const DoubtSection = () => {
return (
    <div className="max-w-6xl mx-auto md:mt-25 mb-30 p-6 items-center">
        <div className='flex flex-col items-center md:items-start mb-2 md:mb-8'>
            <h1 className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent font-bold text-3xl md:text-[46px] ">Any Questions?</h1>
            <h2 className="font-bold text-[#0a2540] mb-6 text-3xl md:text-[46px]">We Got You!</h2>
        </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 mt-8">
                <AccordionContainer />
            </div>
            <div>
                <AiChatAssistant />
            </div>
        </div>
    </div>
)
}

export default DoubtSection;