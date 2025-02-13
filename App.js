import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';

// Cabeçalho do app, inclui um ícone e uma imagem estilizada.
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e6e1aac8397bbaf663ac7c84718fa28dffa6c0e476f6444cb015a2878833c' }}
        style={styles.headerIcon}
      />
      <View style={styles.headerTitleContainer}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e9033aee8b558072086d6e918ea0d20c5f8d0b12235bdee00ac5a6822efb152' }}
          style={styles.headerTitleImage}
        />
        <View style={styles.headerTitleBorder} />
      </View>
    </View>
  );
};

// Janela onde o código será escrito e exibido.
const EditorWindow = () => {
  return (
    <View style={styles.editorContainer}>
      <View style={styles.editorBorder}>
        <View style={styles.editorInnerBorder}>
          <View style={styles.editorContent}>
            <View style={styles.editorHeader}>
              <View style={styles.editorButtons}>
                <View style={styles.editorButton} />
                <View style={[styles.editorButton, styles.redButton]} />
              </View>
              <Text style={styles.editorHeaderText}>Escreva o código abaixo.</Text>
            </View>
            <Text style={styles.editorCode}>imprima: "Olá Mundo!";</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Barra de entrada onde o usuário pode digitar comandos.
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

// Componente que junta tudo: cabeçalho, editor e entrada de texto.
const CodeEditor = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <EditorWindow />
      <InputBar />
    </ScrollView>
  );
};

// O app renderiza o editor completo e faz tudo funcionar.
export default function App() {
  return <CodeEditor />;
}

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
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  headerTitleContainer: {
    position: 'relative',
    width: 131,
    height: 30,
  },
  headerTitleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTitleBorder: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 5,
    backgroundColor: 'orange',
  },
  editorContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#d1d5db',
  },
  editorBorder: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
  },
  editorInnerBorder: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  editorContent: {
    backgroundColor: '#1f2937',
    padding: 10,
    borderRadius: 10,
  },
  editorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#0284c7',
  },
  editorButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  editorButton: {
    width: 20,
    height: 20,
    backgroundColor: '#d1d5db',
    borderRadius: 5,
  },
  redButton: {
    backgroundColor: 'red',
  },
  editorHeaderText: {
    color: 'black',
    fontWeight: 'bold',
  },
  editorCode: {
    color: '#facc15',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    width: '90%',
  },
  input: {
    fontSize: 16,
    color: '#374151',
  },
});
