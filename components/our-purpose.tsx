"use client";

import React from "react";

export default function OurPurpose() {
  return (
    <section className="w-full px-[8.34%] pt-[6.95%] pb-[9.72%] bg-white">
      <div className="max-w-[1200px] mx-auto flex justify-start items-start lg:flex-row md:flex-col md:gap-8 ">
        {/* Left: Title */}
        <h2 className="text-[64px] sm:text-[48px] font-normal leading-[110%] pr-[15%] tracking-[-4%] uppercase font-helvetica whitespace-nowrap w-fit">
            Our Purpose
        </h2>


        {/* Right: Description */}
        <p className="ml-[7%] text-[20px] sm:text-[20px] font-normal leading-[120%] tracking-normal font-helvetica max-w-[536px] md:w-[536px] sm:w-full h-fit">
          The underlying natural order of the universe -
          circular continuity of the natural world.
          Undifferentiated, endlessly self-replenishing,
          immensely powerful and impassively generous.
        </p>
      </div>
    </section>
  );
}
