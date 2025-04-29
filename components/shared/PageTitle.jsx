const gradientEffect = {
  light: {
    blue: "from-orange-400 to-blue-500",
    none: "from-black to-black",
  },

  dark: {
    blue: "from-orange-300 to-blue-400",
    none: "from-black to-black",
  },
};

export const PageTitle = ({ title, effect }) => {
  return (
    <div className="flex justify-center items-center">
      <h1
        className={`w-fit text-3xl mt-5 mb-5 font-poppins-bold bg-gradient-to-r ${gradientEffect.light[effect]} bg-clip-text text-transparent dark:from-[#0fffb9] dark:to-[#63d7ff]`}
      >
        {title}
      </h1>
    </div>
  );
};
