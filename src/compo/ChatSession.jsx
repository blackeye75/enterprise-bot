// import React from "react";
// import SingleSession from "./SingleSession";
// import { IoIosSearch } from "react-icons/io";
// import { FiFilter } from "react-icons/fi";
// import sessions from "../assets/user.json";

// const ChatSession = ({ onChatSelect, activeSession }) => {
//   return (
//     <div className="chatSession md:w-[30%] h-screen space-y-2 border-r-[1px] border-white">
//       <div className="heading w-full h-[3vw] flex pl-7 items-center justify-start font-semibold bg-[#00A0AE] text-lg">
//         <h1 className="uppercase text-white">CHAT SESSIONS</h1>
//       </div>
//       <div className="searchbar bg-white w-full pr-5 pl-7 flex items-center justify-center gap-3">
//         <div className="flex py-2 px-2 w-full rounded-md border gap-3">
//           <IoIosSearch size={30} color="gray" />
//           <input placeholder="Search here" className="w-full outline-none" type="text" />
//         </div>
//         <FiFilter color="navyblue" size={30} />
//       </div>
//       <div className="chatsession border-t-[1px] border-zinc-300">
//         {sessions.users.map((session) => (
//           <div
//             key={session.id}
//             onClick={() => onChatSelect(`chat${session.id}`, session.id)} // Pass chatId and userId
//             className={` ${activeSession === session.id ? ' border-b-[1px] border-t-[1px] duration-300 bg-zinc-200' : 'bg-white'} cursor-pointer`} // Change background if active
//           >
//             <SingleSession
//               name={session.name}
//               avatar={session.avatar}
//               lastseen={session.last_seen}
//               PreviewMessage={session.preview_message}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatSession;


import React, { useState } from "react";
import SingleSession from "./SingleSession";
import { IoIosSearch } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import sessions from "../assets/user.json";

const ChatSession = ({ onChatSelect, activeSession }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search input

  // Filter the sessions based on the search term
  const filteredSessions = sessions.users.filter((session) =>
    session.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chatSession md:w-[30%] h-screen space-y-2 border-r-[1px] border-white overflow-auto">
      <div className="heading w-full h-[3vw] flex pl-7 items-center justify-start font-semibold bg-[#00A0AE] text-lg">
        <h1 className="uppercase text-white">CHAT SESSIONS</h1>
      </div>
      <div className="searchbar bg-white w-full pr-5 pl-7 flex items-center justify-center gap-3">
        <div className="flex py-2 px-2 w-full rounded-md border gap-3">
          <IoIosSearch size={30} color="gray" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full outline-none"
            value={searchTerm} // Bind input value to searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          />
        </div>
        <FiFilter color="navyblue" size={30} />
      </div>
      <div className="chatsession border-t-[1px] border-zinc-300">
        {filteredSessions.map((session) => (
          <div
            key={session.id}
            onClick={() => onChatSelect(`chat${session.id}`, session.id)} // Pass chatId and userId
            className={` ${activeSession === session.id ? 'border-b-[1px] border-t-[1px] duration-300 bg-zinc-200' : 'bg-white'} cursor-pointer`} // Change background if active
          >
            <SingleSession
              name={session.name}
              avatar={session.avatar}
              lastseen={session.last_seen}
              PreviewMessage={session.preview_message}
            />
          </div>
        ))}
        {/* Show a message if no sessions match the search term */}
        {filteredSessions.length === 0 && (
          <div className="text-center p-4 text-gray-500">No chats found</div>
        )}
      </div>
    </div>
  );
};

export default ChatSession;
