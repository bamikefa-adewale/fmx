"use client";
import { useState, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import { Sidebar } from "./Sidebar";
import Message from "./Message";
import ChatInput from "./ChatInput";

type Friend = {
  id: string;
  name: string;
  avatarUrl?: string; // Optional avatar URL
};  

const MainMsg = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [friends, setFriends] = useState<Friend[]>([
    { id: "1", name: "Loading Friends...", avatarUrl: "" }, // Initial state
  ]);
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null);

  useEffect(() => {
    // Simulate updating the friends list after a delay
    const updateFriendsList = () => {
      setTimeout(() => {
        const newFriends: Friend[] = [
          {
            id: "1",
            name: "Master felix",
            avatarUrl:
              "https://res.cloudinary.com/dbrub0d6r/image/upload/v1712663746/user3_bqqzod.png",
          },

          {
            id: "4",
            name: "Engr adex",
            avatarUrl:
              "https://res.cloudinary.com/dbrub0d6r/image/upload/v1712663746/user3_bqqzod.png",
          },
        ];
        setFriends(newFriends); // *THIS* is where setFriends is actually used!
      }, 2000); // Wait 2 seconds
    };

    updateFriendsList(); // Call the function to update friends

    // Establish WebSocket connection (replace with your server URL)
    const newSocket = io("http://localhost:3000"); // Example server
    setSocket(newSocket);

    // Listen for incoming messages
    newSocket.on("chat message", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up on unmount
    return () => {
      newSocket.off("chat message");
      newSocket.disconnect();
    };
  }, []); // Empty dependency array, runs only once

  const handleSendMessage = (message: string) => {
    if (socket) {
      console.log(socket);
      socket.emit("chat message", message); // Send message to server
      setMessages((prevMessages) => [...prevMessages, `You: ${message}`]); //Optimistic update
    }
  };

  const handleSelectFriend = (friendId: string) => {
    setSelectedFriendId(friendId);
    // In a real app, fetch messages for this friend from an API here
    console.log(`Selected friend: ${friendId}`);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 my-5">
      <Sidebar friends={friends} onSelectFriend={handleSelectFriend} />
      <div className="flex flex-col flex-1">
        <div className="bg-white dark:bg-gray-700 shadow-md p-4">
          <h1 className="text-2xl font-bold mb-2 text-green-400"> Chat</h1>
          {selectedFriendId && (
            <p className="text-gray-600 dark:text-gray-400">
              Chatting with:{" "}
              {friends.find((f) => f.id === selectedFriendId)?.name}
            </p>
          )}
        </div>
        <div className="flex-1 overflow-y-scroll p-4">
          {messages.map((msg, index) => (
            <Message key={index} text={msg} />
          ))}
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default MainMsg;
