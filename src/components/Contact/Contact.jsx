const gradientStyle = {
  background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const Contact = () => {
  return (
    <div className="flex h-full w-full justify-center items-start flex-col px-[30px]">
      <p className="text-title-bg text-section-title-color font-bold sm:text-[25px]">
        For any questions:
      </p>
      <a href="mailto:ivanzhigalev@outlook.com"  
        className="text-title-bg text-section-title-color font-bold sm:text-[20px]"
        style={gradientStyle}
      >
        ivanzhigalev@outlook.com
      </a>
    </div>
  );
};
