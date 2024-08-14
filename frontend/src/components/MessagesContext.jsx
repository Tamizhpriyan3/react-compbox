// MessagesContext.js
import React, { createContext, useState } from 'react';

export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [messageCount, setMessageCount] = useState(0);

  return (
    <MessagesContext.Provider value={{ messageCount, setMessageCount }}>
      {children}
    </MessagesContext.Provider>
  );
};
