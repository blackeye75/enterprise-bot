// import "./App.css";
// import ChatBox from "./compo/ChatBox";
// import ChatSession from "./compo/ChatSession";
// import data from "./assets/data.json";
// import { useState } from "react";
// import user from "./assets/user.json";

// function App() {
//   // console.log(user);
//   const [selectedChat, setSelectedChat] = useState(data.data.chat1); // Default to the first chat
//   const [userData, setUserData] = useState(user.users[0]); // Default to the first user
//   const [activeSession, setActiveSession] = useState(1); // Default active session

//   const handleChatSelect = (chatId, userId) => {
//     setSelectedChat(data.data[chatId]); // Update selected chat based on chatId
//     const selectedUser = user.users.find((user) => user.id === userId); // Find the user by id
//     setUserData(selectedUser); // Update selected user data
//     setActiveSession(userId); // Set the active session ID
//   };

//   return (
//     <main className="flex w-full">
//       <div className="md:w-[30%] w-full h-screen sm:w-full">
//         <ChatSession
//           onChatSelect={handleChatSelect}
//           activeSession={activeSession}
//         />
//       </div>
//       <div className="md:w-[70%] sm:block hidden ">
//         <ChatBox chatData={selectedChat} userData={userData} />
//       </div>
//     </main>
//   );
// }

// export default App;


import "./App.css";
import ChatBox from "./compo/ChatBox";
import ChatSession from "./compo/ChatSession";
import data from "./assets/data.json";
import { useState, useEffect } from "react";
import user from "./assets/user.json";

function App() {
  const [selectedChat, setSelectedChat] = useState(data.data.chat1); // Default to the first chat
  const [userData, setUserData] = useState(user.users[0]); // Default to the first user
  const [activeSession, setActiveSession] = useState(1); // Default active session
  const [isChatOpen, setIsChatOpen] = useState(false); // Track whether chat is open on small screens
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640); // Check for small screen

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChatSelect = (chatId, userId) => {
    setSelectedChat(data.data[chatId]); // Update selected chat based on chatId
    const selectedUser = user.users.find((user) => user.id === userId); // Find the user by id
    setUserData(selectedUser); // Update selected user data
    setActiveSession(userId); // Set the active session ID
    setIsChatOpen(true); // Set chat open for small screens
  };

  const handleBackToSessions = () => {
    setIsChatOpen(false); // Close chat and show session list on small screens
  };

  return (
    <main className="flex w-full">
      {/* Chat Session Panel */}
      <div className={`md:w-[30%] w-full h-screen ${isSmallScreen && isChatOpen ? "hidden" : "block"}`}>
        <ChatSession
          onChatSelect={handleChatSelect}
          activeSession={activeSession}
        />
      </div>

      {/* Chat Box */}
      <div className={`md:w-[70%] w-full ${isSmallScreen && !isChatOpen ? "hidden" : "block"}`}>
        <ChatBox
          chatData={selectedChat}
          userData={userData}
          onBack={isSmallScreen ? handleBackToSessions : null}
        />
      </div>
    </main>
  );
}

export default App;
