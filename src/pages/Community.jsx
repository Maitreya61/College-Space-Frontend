import React from "react";
import MessageBox from "../components/MessageBox";
import useChat from "../components/useChat";
import Messages from "../components/Messages";
import Navbar from "../components/Navbar";

const Community = () => {
  const username = sessionStorage.getItem('username');
  
  const handleSendMessage = (messageObject) => {
    sendMessage(messageObject);
  };

  const {messages, sendMessage} = useChat();
  return (
    <div>
      <Navbar/>
      <Messages messages={messages} username={username} />
      <MessageBox
        username={username}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Community;