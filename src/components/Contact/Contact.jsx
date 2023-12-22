import React from "react";

const gradientStyle = {
  background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const Contact = () => {
  return (
    <div className="flex h-full w-full justify-center items-start flex-col px-[30px]">
      <p className="text-title-bg text-section-title-color font-bold sm:text-[25px]">
        For any questions please mail me:
      </p>
      <p
        className="text-title-bg text-section-title-color font-bold sm:text-[20px]"
        style={gradientStyle}
      >
        vangogimomo@gmail.com
      </p>
    </div>
  );
};
