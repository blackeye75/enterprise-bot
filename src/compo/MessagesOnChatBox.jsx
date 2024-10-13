import React from "react";
import SendMessage from "./SendMessage";

const MessagesOnChatBox = ({chatData}) => {
  return (
    <div className="h-full bg-gray-200 justify-start items-start sm:p-7 p-5 flex flex-col">
      <div className="w-full max-w-full">
        {chatData.map((chat, index) => (
          
          <div
            key={index}
            className={`mb-4 ${chat.from.type === "user2" ? "text-right" : ""}`}
          >
            <div
              className={`p-3  max-w-fit w-[70%] text-start  ${
                chat.from.type === "user1"
                  ? "bg-white text-gray-900 rounded-t-full rounded-r-full rounded-bl-none"
                  : "bg-blue-500 text-white rounded-t-xl rounded-l-xl rounded-br-none ml-auto"
              }`}
            >
              {chat.msg.message}    
              {/* {console.log(chat)}  */}
            </div>
          </div>
        ))}
      </div>
      <SendMessage/>
    </div>
      
  );
};

export default MessagesOnChatBox;
