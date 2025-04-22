import { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="w-full max-w-2xl flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#fbfdff] to-[#e9f6ff] border-2 border-transparent">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            {slides[activeSlide].icon}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-[30px] font-bold text-[#3d3d3d]">
            {slides[activeSlide].title}
          </h2>
        </div>

        <p className="mt-4 text-sm sm:text-base md:text-[16px] text-[#949494]">
          {slides[activeSlide].description}
        </p>

        <p className="mt-2 text-sm sm:text-base text-[#8a8a8a]">
          {slides[activeSlide].subDescription}
        </p>
      </div>

      <div className="flex items-center justify-center mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 w-2.5 rounded-full mx-1 ${
              activeSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
