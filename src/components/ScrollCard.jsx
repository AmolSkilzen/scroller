import React from "react";

export const ScrollCard = ({ title, text }) => {
  return (
    <div class="flex flex-col p-[20px] bg-white rounded-xl shadow-md snap-start transition-all w-[fit]">
      <div>
        <h3 class="text-xl capitalize">{title}</h3>
        <div class="my-[20px] max-w-[85%]">
          <p>{text}</p>
        </div>
      </div>
      <div class="mt-auto">
        <a
          href=""
          class="inline-block no-underline text-white bg-orange-400 px-[18px] py-[12px] rounded-md transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
