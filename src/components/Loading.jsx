import React from "react";

const Loading = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex items-center justify-center w-[100vw] h-[50vh] ">
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Loading..."
          className="w-24 h-24"
        />
      </div>
    </div>
  );
};

export default Loading;
