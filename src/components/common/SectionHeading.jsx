import React from "react";

const SectionHeading = ({ title, description, className }) => {
  return (
    <div className={`text-center m-3 my-20 ${className}`}>
      <h1 className="text-3xl font-bold mb-5">{title}</h1>
      <p className="text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;
