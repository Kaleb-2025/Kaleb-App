import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/PYTHON/HelloWord/Header';
import EditorWindow from '../components/PYTHON/HelloWord/EditorWindow';
import InputBar from '../components/PYTHON/HelloWord/InputBar';
import ContinuarButton from '../components/PYTHON/HelloWord/ContinuarButton';
import ButtonErro from '../components/PYTHON/HelloWord/ButtonErro';
import styles from '../styles/styles';

const CodeEditor = () => {
  const [showCard, setShowCard] = useState(false);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState(false);

  const toggleCard = () => {
    if (inputText === 'print("Olá Mundo!")' || inputText === 'print("Ola Mundo!")'|| inputText === 'print("Hello World!")') {
      setShowCard(true);
      setError(false);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  useEffect(() => {
    if (inputText === '') {
      setShowCard(false);
      setError(false);
    }
  }, [inputText]);

  const handleRetry = () => {
    setError(false);
    setInputText('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header progresso={showCard ? 1 : 0} />
      <EditorWindow />
      <InputBar value={inputText} onChangeText={setInputText} />
      <TouchableOpacity onPress={toggleCard} style={[styles.toggleButton, inputText === '' && styles.disabledButton]} disabled={inputText === ''}>
        <Text style={styles.toggleButtonText}>Verificar</Text>
      </TouchableOpacity>
    {/*CARD DO DEU CERTO VERY GOOD*/}
{showCard && (
  <View style={styles.overlay}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Parabéns!</Text>
        <Text style={styles.cardSubText}>print("ㅤ")</Text>
      <Text style={styles.cardSubText}>print("Olá Mundo!")</Text>
         <Text style={styles.cardSubText}>print("ㅤ")</Text>
      <Text style={styles.cardText}>
        “print()” é uma função que permite a saída de dados na tela. O texto deve ser escrito
        entre aspas (“”) para indicar o que será mostrado.
      </Text>
        <Text style={styles.cardSubText}>print("ㅤ")</Text>
      <ContinuarButton />
    </View>
  </View>
)}
{error && <ButtonErro onRetry={handleRetry} />}
</ScrollView>

  );
};

export default CodeEditor;
