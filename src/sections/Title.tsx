import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="w-40 h-40 bg-blue-600 blur-3xl opacity-15 absolute top-40 left-1/4"></div>
      <div className="w-40 h-40 bg-blue-600 blur-3xl opacity-15 absolute top-96 left-1/2"></div>

      <h1 className="py-4 capitalize font-semibold md:font-bold bg-clip-text text-center  bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-300 dark:to-white text-3xl md:text-3xl lg:text-4xl xl:text-6xl">
        {title}
      </h1>
    </div>
  );
};

export default Title;
