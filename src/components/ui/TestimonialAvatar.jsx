import React from "react";

function TestimonialAvatar({ image }) {
  return (
    <div className="flex justify-center w-[104px] h-[104px] p-1 rounded-full border-1 border-[#0056B3] overflow-hidden bg-white">
      <img
        src={image || "/placeholder.svg"}
        alt="Testimonial author"
        width={64}
        height={64}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default TestimonialAvatar;
