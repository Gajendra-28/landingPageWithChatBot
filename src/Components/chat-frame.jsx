import { BotIcon, SendHorizontalIcon } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatFrame = () => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAnswer = async () => {
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDST5A-8WIsA6_LeppZcNKdd7pnUxuDVos",
      method: "post",
      data: {
        contents: [
          { parts: [{ text: question }] },
        ],
      },
    });
    return response.data.candidates[0].content.parts[0].text;
  };

  const handleSendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = { text: question, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setQuestion(""); // Clear input field

    const answer = await generateAnswer();
    const botReply = { text: answer, isUser: false };
    setMessages((prevMessages) => [...prevMessages, botReply]);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      <div className="chatbox-container bg-opacity-75 bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-md">
        <div className="chatbox-header flex items-center justify-start mb-4">
          <figure className="avatar">
            <BotIcon size="24" color="white" />
          </figure>
          
          <h1 className="text-lg font-semibold ml-2">ChatBot</h1>
        </div>
        <div className="messages h-64 overflow-auto mb-4 p-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-container mb-2 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`message bg-gray-300 text-gray-800 rounded-lg p-2 ${msg.isUser ? 'bg-teal-200' : 'bg-gray-300'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="message-box flex items-center">
          <input
            type="text"
            className="message-input bg-transparent border-b border-white text-white p-2 focus:outline-none flex-grow"
            placeholder="Type message..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="button"
            className="message-submit bg-teal-200 text-white py-1 px-4 rounded-lg ml-2 focus:outline-none"
            onClick={handleSendMessage}
          >
            <SendHorizontalIcon color='black' size="20" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatFrame;
