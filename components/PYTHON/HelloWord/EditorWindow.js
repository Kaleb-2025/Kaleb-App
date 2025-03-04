/*Comando ao usuário*/
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../../styles/styles';


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

export default EditorWindow;
