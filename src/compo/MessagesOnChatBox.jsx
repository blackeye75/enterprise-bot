import React from "react";
import SendMessage from "./SendMessage";

const MessagesOnChatBox = ({chatData}) => {
  return (
    <div className="h-full bg-gray-200 justify-start items-start p-7 flex flex-col">
      <div className="w-full max-w-full">
        {chatData.map((chat, index) => (
          <div
            key={index}
            className={`mb-4 ${chat.from.type === "user2" ? "text-right" : ""}`}
          >
            <div
              className={`p-3 text-white max-w-fit w-[70%] text-start  ${
                chat.from.type === "user1"
                  ? "bg-white text-black rounded-t-full rounded-r-full rounded-bl-none"
                  : "bg-blue-500 rounded-t-xl rounded-l-xl rounded-br-none ml-auto"
              }`}
            >
              {chat.msg.message}    
            </div>
          </div>
        ))}
      </div>
      <SendMessage/>
    </div>
      
  );
};

export default MessagesOnChatBox;
