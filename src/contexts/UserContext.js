import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [vault, setVault] = useState([]);

  const addToVault = (product) => {
    setVault(prev => [...prev, product]);
  };

  return (
    <UserContext.Provider value={{ user, setUser, vault, addToVault }}>
      {children}
    </UserContext.Provider>
  );
};
