import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center gap-5 h-[80vh]">
      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default LoadingSpinner;
