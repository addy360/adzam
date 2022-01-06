import React from "react";
const Spinner = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-16 h-16 border-b-2 border-secondary-50 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;