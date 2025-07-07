import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SectionAccordion = ({ title, description, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-3 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>

      <div className="space-y-3 my-10">
        {items.map((item, index) => (
          <div key={index} className="p-4 cursor-pointer">
            <button
              className="cursor-pointer flex justify-between items-center w-full font-medium text-left"
              onClick={() => toggle(index)}
            >
              {item.question}
              <IoIosArrowDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionAccordion;
