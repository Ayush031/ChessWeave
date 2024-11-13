import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create the context
interface ConnectionContextType {
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectionContext = createContext<ConnectionContextType | undefined>(undefined);

// Create the provider component
export const ConnectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState<boolean>(false);

  return (
    <ConnectionContext.Provider value={{ connected, setConnected }}>
      {children}
    </ConnectionContext.Provider>
  );
};

// Custom hook to use the context
export const useConnectionContext = () => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error('useConnectionContext must be used within a ConnectionProvider');
  }
  return context;
};
