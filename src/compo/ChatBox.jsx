import React from "react";
import MessagesOnChatBox from "./MessagesOnChatBox";

const ChatBox = ({ chatData, userData }) => {
  return (
    <div className=" md:w-[70%]  ">
      {/* heading */}
      <div className="heading w-full h-[3vw] flex pl-7  items-center justify-start font-semibold bg-[#00A0AE] text-lg">
        <h1 className="uppercase text-white">CHAT Details</h1>
      </div>
      {/* user details */}
      <div className="sessionDets h-[5.5vw] flex border-b-[1px]">
        <div className="avatar w-[10%] h-full relative">
          <div className="flex items-center justify-center w-full h-full">
            <img
              className="w-14 h-14 rounded-full"
              src={userData.avatar}
              alt={userData.name}
            />
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full left-[4.1vw] bottom-3 absolute"></div>
        </div>
        <div className="w-[80%] flex flex-col justify-center">
          <div className="text-[#4D4F5C] font-[400] text-lg">{userData.name}</div>
          <div className="text-[#43425D] font-[400] opacity-55 text-sm">
            {userData.bio}
          </div>
        </div>
      </div>
      {/* chatBox */}
      <div className="chat w-full h-[82vh]">
        <MessagesOnChatBox chatData={chatData} />
      </div>
    </div>
  );
};

export default ChatBox;
