import React from "react";

const Messages = ({ messages, username }) => {
    const currentuser = sessionStorage.getItem('username');
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((messageObject, index) => (
        <div key={index} className={`mb-4 flex ${currentuser === messageObject.username ? 'justify-end':'justify-start' }`}>
          
          <div
            className={`bg-white rounded-lg py-2 px-4`}
          >
            <p className={ currentuser === messageObject.username ? 'text-red-500' :'text-blue-500'}>{messageObject.username}</p>
            <p className="text-gray-800">{messageObject.message_text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
