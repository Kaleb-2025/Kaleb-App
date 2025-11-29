import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import stylesP from '../../styles/styleCursoLogica';
import Markdown from "react-native-markdown-display";

export default function PreencherCodigo({ blocos, respostas, setRespostas }) {
  return (
    <>
      <View style={stylesP.containerComputador}>
        <View style={stylesP.editorContainer}>
          <View style={stylesP.editorBorder}>
            <View style={stylesP.editorInnerBorder}>
              <View style={stylesP.editorContent}>
                    {blocos.map((bloco, index) => (
            <View key={index} style={stylesP.linha}>
             <Markdown 
                style={{ 
                  body: [
                    stylesP.textoA,
                  ],
                  strong: { 
                    color: '#fff', 
                    fontWeight: 'normal' },
                  em: { 
                    color: '#0A8DFF', 
                    fontStyle: 'normal' },
                }}
                >
                {bloco.textoantesinput}
              </Markdown>
              <TextInput
                style={stylesP.input}
                value={respostas[index] || ''}
                onChangeText={(text) => {
                  const novasRespostas = { ...respostas, [index]: text };
                  setRespostas(novasRespostas);
                }}
              />
              <Markdown 
                style={{ 
                  body: [
                    stylesP.textoA,
                  ],
                  strong: { 
                    color: '#fff', 
                    fontWeight: 'normal' },
                  em: { 
                    color: '#0A8DFF', 
                    fontStyle: 'normal' },
                }}
                >
                {bloco.textoantes}
              </Markdown>
              <Markdown
                style={{ 
                  body: [
                    stylesP.textoD,
                  ],
                  strong: { color: '#fff', fontWeight: 'normal' },
                  em: { color: '#0A8DFF', fontStyle: 'normal' },
                }}
                >
                {bloco.textodepois}
              </Markdown>
            </View>
          ))}
              </View>
            </View>
          </View>
          <Text style={stylesP.editorHeaderTextEnd}>{'\n'}● ● ● ⚫ {'\n'}</Text>
        </View>
      </View>
      <View style={stylesP.editorBase}></View>
    </>
  );
}
