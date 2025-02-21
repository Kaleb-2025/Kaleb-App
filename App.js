import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';

const Header = () => {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 33 ? 33 : prev + 5)); // Para no 33%
    }, 200); // Reduzi para 200ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(loaderValue, {
      toValue: count,
      duration: 100, // Reduzi para 100ms
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
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e6e1aac8397bbaf663ac7c84718fa28dffa6c0e476f6444cb015a2878833c',
        }}
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
// Editor de código fake, só pra enfeite, mostrando um trecho "Olá Mundo!"
const EditorWindow = () => {
  return (
    <View style={styles.editorContainer}>
      <View style={styles.editorBorder}>
        <View style={styles.editorInnerBorder}>
          <View style={styles.editorContent}>
            <View style={styles.editorHeader}>
              {/* Simula aqueles botões que aparecem em editores tipo VS Code */}
              <View style={styles.editorButtons}>
                <View style={styles.editorButton} />
                <Image
                  source={{
                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e6e1aac8397bbaf663ac7c84718fa28dffa6c0e476f6444cb015a2878833c',
                  }}
                  style={styles.headerIconRed}
                />
              </View>
            </View>
            // Parte branca do cabeçalho
            <View style={styles.editorHeaderD}>
              {/* Simula aqueles botões que aparecem em editores tipo VS Code */}
              <Text style={styles.editorHeaderText}>
                Escreva o código abaixo.
              </Text>
            </View>
            {/* Trecho de código fake dentro do editor */}
            <Text style={styles.editorCode}>Imprima: "Olá Mundo!";</Text>
          </View>
        </View>
      </View>
      <Text style={styles.editorHeaderTextEnd}>
        {'\n'}● ● ● ⚫ {'\n'}
      </Text>
    </View>
  );
};

// Caixa de input onde o usuário pode digitar alguma coisa (mas sem funcionalidade real)
const InputBar = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="|"
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

// Junta tudo num componente só, pra organizar a tela bonitinha.
const CodeEditor = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {' '}
      // espaço invisivel
      <View style={{ height: 50 }} />
      <Header />
      <EditorWindow />
      <InputBar />
    </ScrollView>
  );
};

// Função que faz o app rodar.
export default function App() {
  return <CodeEditor />;
}

// CSS
const styles = StyleSheet.create({
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
  //css da barra de carregamento
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
});
