import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(1); // ou o valor inicial
  const [correctCount, setCorrectCount] = useState(0); // NOVO: conta acertos

  const next = () => {
    setProgress((prev) => prev + 1);
  };

  const incrementCorrect = () => {
    setCorrectCount((prev) => prev + 1);
  };

  const resetProgress = () => {
    setProgress(1);
    setCorrectCount(0);
  };

  return (
    <ProgressContext.Provider value={{ progress, next, correctCount, incrementCorrect, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useQuizProgress = () => useContext(ProgressContext);

