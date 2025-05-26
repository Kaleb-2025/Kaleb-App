import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const LogoPags = () => {
  return (
    <View style={styleInterno.logoContainer}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8f2687fa68c291a57c6b98a362754f9b70577b08?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
        }}
        style={styleInterno.logoImage}
      />
      <Text style={styleInterno.logoText}>KALEB</Text>
    </View>
  );
};
const styleInterno = StyleSheet.create({
 logoContainer: {
   marginTop:0,
    flexDirection: 'row',
    width: 200,
    alignItems: 'flex-start',
    gap: 6, 
    
  },
  logoImage: {
    marginTop: 10,
    aspectRatio: 1.22,
    width: 55,
  },
  logoText: {
    fontWeight: 'bold',
    flexGrow: 1,
    fontSize: 40,
    color: '#000',
  },
});


export default LogoPags;
