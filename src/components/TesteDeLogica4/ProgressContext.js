// src/components/TesteDeLogica4/ProgressContext.js
import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [count, setCount] = useState(1); // Começa na pergunta 1

  const next = () => setCount((prev) => prev + 1);
  const reset = () => setCount(1);

  return (
    <ProgressContext.Provider value={{ count, next, reset }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
