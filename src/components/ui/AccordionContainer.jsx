import { useState } from "react";

import Accordion from "./Accordion";

const faqData = [
  {
    id: 1,
    question: "What is this platform, and how does it work?",
    answer:
      "Our platform connects users with vaccine trials and provides easy access to immunization records. Users can create a profile, search for trials, and manage their health information all in one place.",
  },
  {
    id: 2,
    question: "Is this platform free to use?",
    answer:
      "Yes! Signing up, finding a vaccine trial, and accessing immunization records are completely free for users. However, certain advanced features (such as premium AI-driven analytics for researchers) may require a subscription.",
  },
  {
    id: 3,
    question: "How does the AI-powered trial matching system work?",
    answer:
      "Our AI system analyzes your health profile and preferences to match you with suitable vaccine trials. It considers factors like medical history, location, and eligibility criteria to provide personalized recommendations.",
  },
  {
    id: 4,
    question: "How do I know if I am eligible for a vaccine trial?",
    answer:
      "Each trial has specific eligibility criteria. After creating your profile, our system will show you trials you may qualify for. You can also speak with our AI assistant for more personalized guidance.",
  },
  {
    id: 5,
    question: "How do I know if I am eligible for a vaccine trial?",
    answer:
      "Each trial has specific eligibility criteria. After creating your profile, our system will show you trials you may qualify for. You can also speak with our AI assistant for more personalized guidance.",
  },
];

export default function AccordionContainer() {
  const [activeId, setActiveId] = useState(2);

  const toggleItem = (id) => {
    setActiveId(id === activeId ? 0 : id);
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {faqData.map((item) => (
          <Accordion key={item.id} item={item} isActive={item.id === activeId} onToggle={() => toggleItem(item.id)} />
        ))}
      </div>
    </div>
  );
}
