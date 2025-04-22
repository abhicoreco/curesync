import React from "react";

function PaginationDots({ total, visibleCount, active, onClick }) {
  const pageCount = Math.ceil(total / visibleCount);

  return (
    <div className="flex space-x-2">
      {Array.from({ length: pageCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index * visibleCount)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            active >= index * visibleCount && active < (index + 1) * visibleCount
              ? "bg-[#0a2540]"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Go to slide group ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default PaginationDots;
