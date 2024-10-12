import "./App.css";
import ChatBox from "./compo/ChatBox";
import ChatSession from "./compo/ChatSession";
import data from "./assets/data.json";
import { useState } from "react";
import user from "./assets/user.json";

function App() {
  // console.log(user);
  const [selectedChat, setSelectedChat] = useState(data.data.chat1); // Default to the first chat
  const [userData, setUserData] = useState(user.users[0]); // Default to the first user
  const [activeSession, setActiveSession] = useState(1); // Default active session

  const handleChatSelect = (chatId, userId) => {
    setSelectedChat(data.data[chatId]); // Update selected chat based on chatId
    const selectedUser = user.users.find((user) => user.id === userId); // Find the user by id
    setUserData(selectedUser); // Update selected user data
    setActiveSession(userId); // Set the active session ID
  };

  return (
    <main className="flex">
      <ChatSession
        onChatSelect={handleChatSelect}
        activeSession={activeSession}
      />
      <ChatBox chatData={selectedChat} userData={userData} />
    </main>
  );
}

export default App;
