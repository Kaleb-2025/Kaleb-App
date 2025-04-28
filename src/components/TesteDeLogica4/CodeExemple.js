import React from 'react';
import { View, Text } from 'react-native'; 
import styles from '../../styles/styleEspecial';  

const CodeExample = () => {
  return (
    <View style={styles.codeContainer}>
      <View style={styles.codeWrapper}>
        <Text style={styles.codeContent}>
          <Text style={styles.yellow}>valor = </Text>
          <Text style={styles.blue}>float</Text>
          <Text style={styles.yellow}>(</Text>
          <Text style={styles.blue}>input</Text>
          <Text style={styles.yellow}>(</Text>
          <Text style={styles.green}>"Digite um valor: "</Text>
          <Text style={styles.yellow}>)){"\n"}</Text>
          <Text style={styles.blue}>IF </Text>
          <Text style={styles.yellow}>valor &gt; 0:{"\n"}</Text>
          <Text style={styles.blue}>print</Text>
          <Text style={styles.yellow}>(</Text>
          <Text style={styles.green}>"O valor é positivo"</Text>
          <Text style={styles.yellow}>){"\n"}</Text>
          <Text style={styles.blue}>ELSE</Text>
          <Text style={styles.yellow}>:{"\n"}</Text>
          <Text style={styles.blue}>print</Text>
          <Text style={styles.yellow}>(</Text>
          <Text style={styles.green}>"O valor é negativo"</Text>
          <Text style={styles.yellow}>)</Text>
        </Text>
      </View>
    </View>
  );
};

export default CodeExample;
