import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

const useChat = () => {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketRef.current = socketIOClient("http://localhost:3002");

    socketRef.current.on("mostRecentMessages", (mostRecentMessages) => {
      setMessages((prevMessages) => [...mostRecentMessages]);
    });

    socketRef.current.on("newChatMessage", ({ username, message_text }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { username: username, message_text: message_text },
      ]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (messageObject) => {
    socketRef.current.emit("newChatMessage", messageObject);
  };

  return { messages, sendMessage };
};

export default useChat;
