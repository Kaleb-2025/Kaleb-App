import React from 'react';
import { View, Text } from 'react-native'; 
import Markdown from 'react-native-markdown-display';
import stylesP from '../../styles/styleCursoLogica';
import styles from '../../styles/styleEspecial';  

const CodeExample = ({ question }) => {
  return (
    <>
      <View style={stylesP.containerComputador}>
        <View style={[stylesP.editorContainer, { width: 300 }]}>
          <View style={stylesP.editorBorder}>
            <View style={stylesP.editorInnerBorder}>
          <View style={[stylesP.editorContent, { height: 180}]}>
        <Markdown
          style={{ 
            body: {
              color: '#70B063',
              fontSize: 16,
            },
            strong: { 
              color: '#42B8D2', 
              fontWeight: 'normal',
            },
            em: { 
              color: '#FFBE0A', 
              fontStyle: 'normal',
            },
          }}
        >
          {question}
        </Markdown>
        </View>
      </View>
     </View>
          <Text style={[stylesP.editorHeaderTextEnd, { height: 20 }]}>{'\n'}● ● ● ⚫ {'\n'}</Text>
        </View>
      </View>
      <View style={[stylesP.editorBase, { width: 250 }]}></View>
      </>
  );
};

export default CodeExample;
