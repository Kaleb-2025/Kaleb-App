import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Animated, TouchableOpacity } from 'react-native';

const Header = () => {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 33 ? 33 : prev + 5));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(loaderValue, {
      toValue: count,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [count, loaderValue]);

  const width = loaderValue.interpolate({
    inputRange: [0, 33],
    outputRange: ['0%', '33%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e6e1aac8397bbaf663ac7c84718fa28dffa6c0e476f6444cb015a2878833c' }}
        style={styles.headerIcon}
      />
      <View style={styles.headerTitleContainer}>
        <View style={styles.progressBar}>
          <Animated.View style={[styles.progressFill, { width }]} />
        </View>
      </View>
    </View>
  );
};

const EditorWindow = () => {
  return (
    <View style={styles.editorContainer}>
      <View style={styles.editorBorder}>
        <View style={styles.editorInnerBorder}>
          <View style={styles.editorContent}>
            <View style={styles.editorHeader}>
              <View style={styles.editorButtons}>
                <View style={styles.editorButton} />
                <Image
                  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e6e1aac8397bbaf663ac7c84718fa28dffa6c0e476f6444cb015a2878833c' }}
                  style={styles.headerIconRed}
                />
              </View>
            </View>
            <View style={styles.editorHeaderD}>
              <Text style={styles.editorHeaderText}>Em PYTHON, imprima a seguinte mensagem.</Text>
            </View>
            <Text style={styles.editorCode}>"Olá Mundo!"</Text>
          </View>
        </View>
      </View>
      <Text style={styles.editorHeaderTextEnd}>{'\n'}● ● ● ⚫ {'\n'}</Text>
    </View>
  );
};

const InputBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="|"
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText} 
      />
    </View>
  );
};

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Continuar</Text>
    </TouchableOpacity>
  );
};

const CodeEditor = () => {
  const [showCard, setShowCard] = useState(false); 
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState(false); 

  const toggleCard = () => {
    if (inputText === 'print("Olá Mundo!")') {
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ height: 50 }} />
      <Header />
      <EditorWindow />

      <InputBar value={inputText} onChangeText={setInputText} />

      <TouchableOpacity
        onPress={toggleCard}
        style={[styles.toggleButton, inputText === '' && styles.disabledButton]} 
        disabled={inputText === ''}
      >
        <Text style={styles.toggleButtonText}>Verificar</Text>
      </TouchableOpacity>

      {/*CARD DO DEU CERTO VERY GOOD*/}
      {showCard && (
        // p ficar no meio centralizado
        <View style={styles.overlay}> 
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Parabéns!</Text>
          <Text style={styles.cardText}>
            <b>print("Olá Mundo!")</b>
            <p>
              “print()” é uma função que permite a saída de dados na tela. O texto deve ser escrito
              entre com as aspas (“”) para indicar o que será mostrado.
            </p>
          </Text>
          <Button />
        </View>
        </View>
      )}

      {/* CARD/TELA DO ERRO (lelets mude aqui a sua parte diva) */}
      {error && (
        <View style={styles.overlay}> 
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Erro!</Text>
          <Text style={styles.cardText}>
            <b>O código digitado está incorreto.</b>
            <p>Tente novamente!</p>
          </Text>
        </View>
        </View>
      )}
    </ScrollView>
  );
};

export default function App() {
  return <CodeEditor />;
};

const styles = StyleSheet.create({
  // p o card ficar na frente de tudo.
  overlay: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  justifyContent: "center", 
  alignItems: "center",
},
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerIcon: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 25,
    height: 25,
    padding: 4,
    resizeMode: 'contain',
  },
  headerIconRed: {
    borderWidth: 2,
    color: 'white',
    backgroundColor: '#FF4A4A',
    borderRadius: 10,
    width: 20,
    height: 20,
    padding: 4,
    resizeMode: 'contain',
  },
  progressFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FF880A',
  },
  headerTitleContainer: {
    justifyContent: 'center',
    height: 20,
  },
  progressBar: {
    height: 15,
    flexDirection: 'row',
    width: 200,
    backgroundColor: '#CACACA',
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  editorContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#d1d5db',
    height: 305,
    width: 320,
    position: 'relative',
  },
  editorBorder: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    height: 250,
  },
  editorInnerBorder: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    height: 230,
  },
  editorContent: {
    backgroundColor: '#2B2E28',
    padding: 10,
    borderRadius: 10,
    height: 230,
  },
  editorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 6,
    backgroundColor: '#0A8DFF',
  },
  editorHeaderD: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FCF9F9',
  },
  editorButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'flex-end',
  },
  editorButton: {
    width: 20,
    height: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },
  editorHeaderText: {
    color: 'black',
    fontWeight: 'bold',
  },
  editorHeaderTextEnd: {
    color: 'black',
    fontSize: 10,
    gap: 5,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  editorCode: {
    color: '#FFBE0A',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    height: 150,
    width: '90%',
  },
  input: {
    fontSize: 16,
    color: '#374151',
  },
  button: {
    backgroundColor: '#FF880A',
    padding: 10,
    borderRadius: 50,
    width: 100,
    textAlign: 'center',
    boxShadow: '0px 2px 3px 0px #9E9E9E',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  toggleButton: {
    backgroundColor: '#FF880A',
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    width: 150,
    boxShadow: '0px 2px 3px 0px #9E9E9E',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFECD8',
    width: "250px",
    height:"240px",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: "center",
    boxShadow: '0px 2px 3px 0px #9E9E9E',
  },
  cardTitle: {
    color: '#FF880A',
    fontWeight: "bold",
    fontSize: 20,
  },
  cardText: {
    textAlign: 'center',
  },
});
