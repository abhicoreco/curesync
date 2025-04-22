import React from 'react';
import Accordion from './ui/Accordion';

const AccordionSection = () => {
  const faqData = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner and follow the registration process.",
    },
    {
      question: "I forgot my password. What should I do?",
      answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to 'My Account' settings and select 'Edit Profile' to make changes.",
    },
  ];
  
  return (
    <section>
        <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </div>
    </section>
  )
}

export default AccordionSection;