import React from "react";

const CustomerRatingCard = ({ customers, count, rating }) => {
  return (
    <div className="relative">
      {/* Customer rating card */}
      <div className="absolute top-4 left-0 lg:left-4 z-10 bg-white rounded-xl shadow-md p-4 w-[241.95px] h-[128px] border-2 border-[#C5ECFF]">
        <div className="flex items-center gap-1 mb-1">
          <div className="flex -space-x-2">
            {customers.map((customer, index) => (
              <img
                key={index}
                src={customer.image}
                width={32}
                height={32}
                className="rounded-full border-2 border-white w-[37.46px] h-[37.46px]"
                alt="Customer"
              />
            ))}
          </div>
          <span className="font-bold text-lg ml-2">
            {count}
            <span className="text-blue-500">+</span>
          </span>
        </div>
        <p className="text-[#0056B3] font-bold w-[135 px]">Happy Customers</p>
        <div className="flex items-center mt-1">
          <div className="flex">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            {rating % 1 !== 0 && (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <clipPath id="half-star">
                    <rect width="10" height="20" fill="white" />
                  </clipPath>
                </defs>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  clipPath="url(#half-star)"
                />
              </svg>
            )}
          </div>
          <span className="text-gray-500 ml-1">({rating} Stars)</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerRatingCard;
