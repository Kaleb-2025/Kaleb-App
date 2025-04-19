import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../../styles/styles';

const EditorWindow = () => {
  const [pergunta, setPergunta] = useState(null);

  useEffect(() => {
    fetch('http://192.168.0.165:3000/perguntas/1') // seu IP local aqui
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
  if (data.length > 0) {
    setPergunta(data[0]);
  }
})

      .catch(error => {
        console.error('Erro ao buscar pergunta:', error.message);
      });
  }, []);

  if (!pergunta) {
    return (
      <View style={styles.editorContainer}>
        <Text>Carregando pergunta...</Text>
      </View>
    );
  }

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
              <Text style={styles.editorHeaderText}>
                Categoria: {pergunta.Categoria}
              </Text>
            </View>

            <Text style={styles.editorCode}>{pergunta.Enunciado}</Text>

          </View>
        </View>
      </View>

      <Text style={styles.editorHeaderTextEnd}>{'\n'}● ● ● ⚫ {'\n'}</Text>
    </View>
  );
};

export default EditorWindow;
