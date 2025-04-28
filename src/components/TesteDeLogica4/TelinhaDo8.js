import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/styleEspecial';  

const TelinhaDo8= () => {
  return (
    <View style={styles.codeContainer}>
      <View style={styles.codeWrapper}>
        <Text style={styleInterno.codeContent}>
          <Text style={styleInterno.yellow}>soma = 0 </Text>
           <Text style={styleInterno.yellow}>{"\n"}</Text>
                 <Text style={styleInterno.yellow}>{"\n"}</Text>
            <Text style={styleInterno.green}>i in range(1, 11):  </Text>
                  <Text style={styleInterno.green}>{"\n"}</Text>
                        <Text style={styleInterno.yellow}>{"\n"}</Text>
            <Text style={styleInterno.yellow}>soma += i  </Text>
             <Text style={styleInterno.yellow}>{"\n"}</Text>
              <Text style={styleInterno.blue}>print</Text>
              <Text style={styleInterno.yellow}>(soma)</Text>
        </Text>
      </View>
    </View>
  );
};
const styleInterno = StyleSheet.create({
  codeContent: {
    color: '#70b063',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  yellow: {
    color: '#ffbe0a',
  },
  blue: {
    color: '#42b8d2',
  },
  green: {
    color: '#70b063',
  },
  });
export default TelinhaDo8;
