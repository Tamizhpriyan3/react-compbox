import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Messages.css'; 

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/contact');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendResponse = async (id) => {
    try {
      await axios.post(`http://localhost:8080/api/contact/respond/${id}`, response);
      alert('Response sent successfully.');
    } catch (error) {
      console.error('Error sending response:', error);
    }
  };

  return (
    <div className="messages-container">
      <h1>Contact Messages</h1>
      <div className="messages-list">
        {messages.map((message) => (
          <div key={message.id} className="message-item" onClick={() => setSelectedMessage(message)}>
            <h2>{message.name}</h2>
            <p>{message.email}</p>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
      {selectedMessage && (
        <div className="message-response">
          <h2>Respond to {selectedMessage.name}</h2>
          <textarea
            placeholder="Write your response here..."
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          ></textarea>
          <button onClick={() => handleSendResponse(selectedMessage.id)}>Send Response</button>
        </div>
      )}
    </div>
  );
};

export default Messages;
