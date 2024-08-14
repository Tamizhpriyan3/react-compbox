import React, { createContext, useState } from 'react';

export const ComplaintsContext = createContext();

export const ComplaintsProvider = ({ children }) => {
  const [totalComplaints, setTotalComplaints] = useState(0);

  const incrementComplaints = () => {
    setTotalComplaints((prevCount) => prevCount + 1);
  };

  return (
    <ComplaintsContext.Provider value={{ totalComplaints, incrementComplaints }}>
      {children}
    </ComplaintsContext.Provider>
  );
};
