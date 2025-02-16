import React from 'react'; 
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';

// Componente do cabeçalho do app, basicamente uma imagem e um ícone pra dar um charme.
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
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e6e1aac8397bbaf663ac7c84718fa28dffa6c0e476f6444cb015a2878833c' }}
        style={styles.headerIconRed}
      />
              </View>
            
            </View>
            // Parte branca do cabeçalho
            <View style={styles.editorHeaderD}>
              {/* Simula aqueles botões que aparecem em editores tipo VS Code */}
              <Text style={styles.editorHeaderText}>Escreva o código abaixo.</Text>
            </View>
            {/* Trecho de código fake dentro do editor */}
            <Text style={styles.editorCode}>Imprima: "Olá Mundo!";</Text>
          </View>
        </View>
      </View>
      <Text style={styles.editorHeaderTextEnd}>{'\n'}● ● ● ⚫ {'\n'}</Text>
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
    <ScrollView contentContainerStyle={styles.container}> // espaço invisivel
      <View style={{ height: 50 }} /> 
      <Header />
      <EditorWindow />
      <InputBar />
    </ScrollView>
  );
};

// O app em si, que só renderiza o editor completo.
export default function App() {
  return <CodeEditor />;
}

// Estilos bonitinhos pra deixar a interface organizada
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
    padding:4, 
    resizeMode: 'contain',
  },
  headerIconRed: {
    borderWidth: 2,
   color:'white',
    backgroundColor: '#FF4A4A',
    borderRadius: 10,
    width: 25, 
    height: 25,
    padding:4, 
    resizeMode: 'contain',
  },
  headerTitleContainer: {
    position: 'relative',
    width: 130,
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
    height: 305, 
    width:320,
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
    height:150,
    width: '90%',
  },
  input: {
    fontSize: 16,
    color: '#374151',
  },
});
