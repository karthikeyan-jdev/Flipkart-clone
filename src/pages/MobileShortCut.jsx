import React from "react";
import { useNavigate } from "react-router-dom";

const MobileShortCut = () => {
  let navigate = useNavigate();

  return (
    <div className="bg-blue-700 h-screen p-12 pt-24 font-rubik space-y-3">
      <h1 className="text-white font-bold text-[26px]">
        Add Flipkart Shortcut
      </h1>
      <p className="text-gray-200 text-[14px]">
        Click on icon, 'Add to Home Screen' from the brownser menu and add
        Flipkart for easy access.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-white rounded-sm px-2.5 py-2 text-[14px]"
      >
        Got it!
      </button>
    </div>
  );
};

export default MobileShortCut;
