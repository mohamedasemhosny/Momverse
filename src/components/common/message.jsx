import React from "react";

const Message = ({ massage }) => {
  const isUser = massage.fromUser;

  return (
    <div className={`flex items-start gap-4 ${isUser ? "justify-end" : ""}`}>
      {!isUser && (
        <img src={massage.img} alt="" className="size-12 rounded-full" />
      )}
      <div
        className={`p-3 rounded-xl max-w-[70%] ${
          isUser
            ? "bg-blue-500 text-white ml-auto"
            : "bg-white text-black border"
        }`}
      >
        <p className="text-lg">{massage.message}</p>
        <span className="text-sm text-right block text-secondary">
          {massage.time}
        </span>
      </div>
    </div>
  );
};

export default Message;
