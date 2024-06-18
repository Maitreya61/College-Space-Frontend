import React, { useState } from "react";

const MessageBox = (props) => {
  const [message, setMessage] = useState("");

  const sendMessageClick = () => {
    if (message.trim() === "") {
      return;
    }
    const messageObject = {
      username: props.username,
      message: message.trim()
    };
    props.onSendMessage(messageObject);
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your message..."
          className="flex-1 px-4 py-2 rounded-full border-none bg-gray-100 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessageClick();
            }
          }}
        />
        <button
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          onClick={sendMessageClick}
        >
          <ion-icon name="send"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
