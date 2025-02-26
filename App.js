import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Animated, TouchableOpacity, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando ícones do Ionicons

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

const sairDoApp = () => {
  BackHandler.exitApp()
} 
// Botão Acerto
const ContinuarButton = () => {
  return (
    <TouchableOpacity onPress={sairDoApp}style={styles.button}>
      <Text style={styles.buttonText}>Continuar</Text>
    </TouchableOpacity>
  );
};
//Botão Erro
const ButtonErro = ({ onRetry }) => { // onRetry: Recebe a função handleRetry como propriedade || utilizando outro nome dá pra reutilizar o componente
  return (
    <TouchableOpacity style={styles.button_erro} onPress={onRetry}>
      <Text style={styles.buttonText_erro}>Tente novamente!</Text>
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

  const handleRetry = () => { /* função é responsável por definir setError
   handleRetry:  usado para reset ou recuperação de estado em um app*/
    setError(false); // Fecha o card de erro
    setInputText(''); // Limpa a caixa de texto (inputText)
  };

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
          <Text style={styles.cardSubText}>
            print("Olá Mundo!")
            </Text>
            <Text style={styles.cardText}>
              “print()” é uma função que permite a saída de dados na tela. O texto deve ser escrito
              entre com as aspas (“”) para indicar o que será mostrado.
            </Text>
          <ContinuarButton />
        </View>
        </View>
      )}


      {/* CARD/TELA DO ERRO */}
      {error && (
        <View style={styles.overlay}> 
        <View style={styles.card_erro}>
        <View style={styles.card_header}>
          <Ionicons name="close-circle" size={24} color="#f00" />
          <Text style={styles.cardTitle_erro}>Erro!</Text>
          </View>
          <Text style={styles.cardText}>
            <b>Resposta correta:</b>
            <p>print("Olá Mundo!")</p>
          </Text>
          <ButtonErro onRetry={handleRetry} /> {/* Passa a função de handleRetry */}
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
    width: 150,
    textAlign: 'center',
    boxShadow: '0px 2px 3px 0px #9E9E9E',
  },
   button_erro: {
    backgroundColor: '#FF4A4A',
    padding: 10,
    borderRadius: 50,
    width: 150,
    textAlign: 'center',
    boxShadow: '0px 2px 3px 0px #9E9E9E',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  buttonText_erro: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
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
    width: 250,
    height:240,
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
    cardSubText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardText: {
    textAlign: 'center',
  },
    card_erro: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFE8E8',
    width: "250px",
    height:"200px",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: "center",
    boxShadow: '0px 2px 3px 0px #9E9E9E',
  },
    card_header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    cardTitle_erro: {
    color: '#CF0000',
    fontWeight: "bold",
    fontSize: 20,
  },
});