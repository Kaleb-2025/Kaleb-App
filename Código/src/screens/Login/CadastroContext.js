// src/components/Login/CadastroContext.js
import React, { createContext, useContext, useState } from 'react';

const CadastroContext = createContext();

export const CadastroProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  return (
    <CadastroContext.Provider value={{ email, setEmail, senha, setSenha, nome, setNome }}>
      {children}
    </CadastroContext.Provider>
  );
};

export const useCadastro = () => useContext(CadastroContext);
