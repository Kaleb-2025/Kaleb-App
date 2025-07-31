import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from '../../styles/styles';
import stylesP from '../../styles/styleCursoLogica'

export default function PreencherCodigo({ blocos, respostas, setRespostas }) {
  return (
    <>
      <View style={stylesP.containerComputador}>
        <View style={styles.editorContainer}>
          <View style={styles.editorBorder}>
            <View style={styles.editorInnerBorder}>
              <View style={styles.editorContent}>
                    {blocos.map((bloco, index) => (
            <View key={index} style={stylesP.linha}>
              <TextInput
                style={stylesP.input}
                value={respostas[index] || ''}
                onChangeText={(text) => {
                  const novasRespostas = { ...respostas, [index]: text };
                  setRespostas(novasRespostas);
                }}
              />
              <Text style={stylesP.textoA}>{bloco.textoantes}</Text>
              <Text style={stylesP.textoD}>{bloco.textodepois}</Text>
            </View>
          ))}
              </View>
            </View>
          </View>
          <Text style={styles.editorHeaderTextEnd}>{'\n'}● ● ● ⚫ {'\n'}</Text>
        </View>
      </View>
      <View style={stylesP.editorBase}></View>
    </>
  );
}
