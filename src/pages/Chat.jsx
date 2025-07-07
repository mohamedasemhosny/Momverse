"use client";

import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCameraOutline, IoVideocam } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import Message from "@/components/common/message";
import activeImg from "../assets/active-img.png";
import archiveImg from "../assets/archive-img.png";
import { FaMicrophone } from "react-icons/fa6";
import { chats, initialChatHistory } from "@/constant";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [chatHistory, setChatHistory] = useState(initialChatHistory);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const currentMessages = chatHistory[selectedChat.name] || [];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      img: "", // No need to show user image
      message: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      fromUser: true,
    };

    setChatHistory((prev) => ({
      ...prev,
      [selectedChat.name]: [...prev[selectedChat.name], newMessage],
    }));

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, selectedChat]);

  return (
    <div className="container mx-auto py-10 px-3">
      <div className="flex flex-col items-center lg:flex-row gap-20 justify-between">
        {/* Sidebar */}
        <div className="flex-[2]">
          <h1 className="text-3xl font-bold mb-6">Chat</h1>
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-[500px] focus:outline-none rounded-2xl p-3 text-black bg-secondary"
          />

          <div className="flex items-center gap-20 my-10">
            <div>
              <span className="text-lg">Active</span>
              <img
                src={activeImg}
                alt="active"
                className="w-5 h-5 ml-2 inline-block"
              />
            </div>
            <div>
              <span className="text-lg">Archives</span>
              <img
                src={archiveImg}
                alt="archive"
                className="w-5 h-5 ml-2 inline-block"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            {chats.map((chat, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 cursor-pointer p-2 rounded-lg ${
                  selectedChat?.name === chat.name ? "bg-secondary" : ""
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                <img
                  src={chat.img}
                  alt="profile"
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-xl">{chat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-[3] bg-[#6c5b50] rounded-[50px] min-h-[500px] flex flex-col justify-between">
          {selectedChat && (
            <>
              <div className="p-5">
                <div className="p-3 border border-secondary rounded-full flex items-center justify-between bg-white">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedChat.img}
                      alt="profile"
                      className="w-9 h-9 rounded-full"
                    />
                    <span className="text-lg text-black font-bold">{selectedChat.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-2xl text-primary" />
                    <IoVideocam className="text-2xl text-primary" />
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-5 max-h-[400px] overflow-y-auto pr-2">
                  {currentMessages.map((msg, i) => (
                    <Message key={i} massage={msg} />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input */}
              <div className="flex items-center gap-4 mt-5 bg-white p-3 rounded-b-[50px]">
                <div className="flex items-center gap-5 text-black">
                  <IoCameraOutline className="text-2xl" />
                  <HiOutlinePhoto className="text-2xl" />
                  <FaMicrophone className="text-2xl" />
                </div>

                <div className="flex-1 relative">
                  <input
                    type="text"
                    name="message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type a message..."
                    className="w-full focus:outline-none border border-black rounded-full p-3 text-black"
                  />
                  <RiSendPlaneFill
                    onClick={handleSend}
                    className="absolute top-1/2 transform -translate-y-1/2 right-5 text-3xl text-black cursor-pointer"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
