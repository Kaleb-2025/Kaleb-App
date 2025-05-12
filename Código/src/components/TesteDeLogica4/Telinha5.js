import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/styleEspecial';  

const Telinha5 = () => {
  return (
    <View style={styles.codeContainer}>
      <View style={styles.codeWrapper}>
        <Text style={styleInterno.codeContent}>
          <Text style={styleInterno.yellow}> var</Text>
         <Text style={styleInterno.yellow}>{"\n"}</Text>
          <Text style={styleInterno.blue}>a:</Text>
         <Text style={styleInterno.green}> numérica</Text>
          <Text style={styleInterno.yellow}>{"\n"}</Text>
          <Text style={styleInterno.blue}>b:</Text>
         <Text style={styleInterno.green}> alfanumérica</Text>
          <Text style={styleInterno.yellow}>{"\n"}</Text>
          <Text style={styleInterno.blue}>c:</Text>
         <Text style={styleInterno.green}> constante</Text>
          <Text style={styleInterno.yellow}>{"\n"}</Text>
          <Text style={styleInterno.blue}>d:</Text>
         <Text style={styleInterno.green}> lógica</Text>
          <Text style={styleInterno.yellow}>{"\n"}</Text>
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
    marginTop:20,
    color: '#ffbe0a',
  },
  blue: {
    marginTop:5,
    color: '#42b8d2',
  },
  green: {
    marginTop:5,
    color: '#70b063',
  },
  });
export default Telinha5;
