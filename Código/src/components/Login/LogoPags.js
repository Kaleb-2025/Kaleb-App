import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const LogoPags = () => {
  return (
    <View style={styleInterno.logoContainer}>
     <Image
         source={require('../../assets/logo.png')}
        style={styleInterno.logoImage}
      />
      
      <Text style={styleInterno.logoText}>KALEB</Text>
    </View>
  );
};
const styleInterno = StyleSheet.create({
logoContainer: {
  marginTop: -10, 
  flexDirection: 'row',
  width: 200,
  alignItems: 'flex-start',
  gap: 6,
},

  logoImage: {
    aspectRatio: 1.22,
    width: 55,
  },
  logoText: {
    fontWeight: 'bold',
    flexGrow: 1,
    fontSize: 45,
    color: '#000',
  },
});


export default LogoPags;
