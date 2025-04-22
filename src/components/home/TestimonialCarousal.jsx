import React, { useState, useEffect } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import TestimonialAvatar from "../ui/TestimonialAvatar";
import PaginationDots from "../ui/PaginationDots";

const testimonials = [
  {
    id: 1,
    text: '""Managing a vaccine trial has never been more efficient! With AI-powered participant matching, we recruited eligible candidates 50% faster. The real-time tracking dashboard provided instant data insights, and automated compliance reporting"',
    author: {
      name: "Sarah Johnson",
      role: "Clinical Trial Manager",
      avatar: "../../../public/avatar.png",
    },
  },
  {
    id: 2,
    text: '"AI-powered participant matching helped us recruit 50% faster..."',
    author: {
      name: "Emily Rodriguez",
      role: "Research Director",
      avatar: "../../../public/avatar.png",
    },
  },
  {
    id: 3,
    text: '""Managing a vaccine trial has never been more efficient! With AI-powered participant matching, we recruited eligible candidates 50% faster. The real-time tracking dashboard provided instant data insights, and automated compliance reporting"',
    author: {
      name: "Michelle Chen",
      role: "Clinical Operations",
      avatar: "../../../public/avatar.png",
    },
  },
  {
    id: 4,
    text: '"Incredible tool! We increased efficiency across the board..."',
    author: {
      name: "David Smith",
      role: "Medical Analyst",
      avatar: "../../../public/avatar.png",
    },
  },
  {
    id: 5,
    text: '""Managing a vaccine trial has never been more efficient! With AI-powered participant matching, we recruited eligible candidates 50% faster. The real-time tracking dashboard provided instant data insights, and automated compliance reporting"',
    author: {
      name: "Linda Green",
      role: "Healthcare Strategist",
      avatar: "../../../public/avatar.png",
    },
  },
];

function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const visibleCount = isMobile ? 1 : 3;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  return (
    <div className="w-full max-w-6xl mx-auto md:mt-25 px-4 py-12 ">
      <h2 className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] text-center bg-clip-text text-transparent font-bold text-3xl md:text-[46px] mb-12">Our Clients</h2>
      <div className="flex gap-6 justify-center transition-transform duration-500 ease-in-out">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="relative">
            <TestimonialCard
              text={testimonial.text}
              isAlt={index % 2 === 0}
            />
            <div className="flex justify-center mt-4">
              <TestimonialAvatar image={testimonial.author.avatar} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <PaginationDots
          total={testimonials.length}
          visibleCount={visibleCount}
          active={startIndex}
          onClick={(index) => setStartIndex(index)}
        />
      </div>
    </div>
  );
}

export default TestimonialCarousel;
