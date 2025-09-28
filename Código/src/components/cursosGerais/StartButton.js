import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const StartButton: React.FC = () => {
  const navigation = useNavigation();
  
  const navigateTo = () => {
    navigation.navigate('TelaCurso');
}

  return (
    <View style={styles.content}>
      <TouchableOpacity style={
        [styles.button, 
        { cursor: 'pointer' },
      ]}
        onPress = {navigateTo}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  content: {  
    paddingTop: 32,  
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#0f172a',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
