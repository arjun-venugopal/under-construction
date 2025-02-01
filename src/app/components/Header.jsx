import React from "react";
import Time from "./Time";

export default function UnderConstruction() {
  const targetDate = new Date('December 31, 2030 23:59:59').getTime();
  
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl p-4 py-4">
        <div className="md:py-32">
          <h1 className="text-4xl md:text-6xl  font-bold text-blue-300 mb-6">
            Site Under Construction
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-950 mb-2">
            We're working hard to bring you something amazing!
          </h2>
          <p className="my-4 text-gray-700 text-sm md:mb-4">
            Our website is currently under construction. We apologize for any
            inconvenience caused. Please check back later for updates.
          </p>
          <Time targetDate={targetDate} />
        </div>
        <div className="relative">
          <img
            src="/website.jpg"
            alt="construction"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <p className="text-sm text-center pb-6">
          &copy; 2025 Arjun | All rights reserved.
        </p>
      </div>
    </section>
  );
}
