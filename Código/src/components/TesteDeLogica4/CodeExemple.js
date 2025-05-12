import React from 'react';
import { View, Text } from 'react-native'; 
import styles from '../../styles/styleEspecial';  

const CodeExample = ({ question }) => {
  return (
    <View style={styles.codeContainer}>
      <View style={styles.codeWrapper}>
        <Text style={styles.codeContent}>
          {question}
        </Text>
      </View>
    </View>
  );
};

export default CodeExample;
