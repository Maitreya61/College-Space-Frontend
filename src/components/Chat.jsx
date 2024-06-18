import React, { useState } from 'react';

const Chat = ({ messages, onMessageSubmit }) => {
  const [messageContent, setMessageContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageContent.trim() === '') return;
    onMessageSubmit(messageContent);
    setMessageContent('');
  };

  return (
    <div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === 'currentUserId' ? 'right' : 'left'}`}>
            <p>{message.user.username}</p>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
