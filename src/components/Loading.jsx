import React from "react";

const Loading = () => {
  return (
    <div className="h-[100vh] ">
      <div className="flex items-center justify-center w-[100vw] h-[50vh] ">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
