import { cn } from "@/utils/cn";
import React from "react";

const Button = ({ name, className }) => {
  return (
    <button
      className={cn(
        "cursor-pointer h-12 bg-primary text-white py-2 px-4 rounded-2xl shadow-xl",
        className
      )}
    >
      {name}
    </button>
  );
};

export default Button;
