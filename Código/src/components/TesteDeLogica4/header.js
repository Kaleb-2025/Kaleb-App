// src/components/TesteDeLogica4/header.js
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styleteste';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';

const Header = ({ total = 6 }) => {
const { progress, resetProgress } = useQuizProgress();

 const handleBackPress = () => {
  resetProgress(); // ✅ correto agora
  navigation.navigate('Opcao.js'); // ou apenas 'Opcao' se for o nome da rota
};


  return (
    <View style={styles.header}>
       <TouchableOpacity onPress={handleBackPress}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d6912de51c1e6ab60d5ca03faf297d850ab42052?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea'
        }}
        style={styles.backButton}
      />
      </TouchableOpacity>
      <View style={styles.progressSection}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/09acdc9d594350046f62c89815b129e0c33cefd1?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea'
          }}
          style={[styles.progressIcon, { marginRight: 10 }]}
        />
      <Text style={styles.progressText}>{progress}/{total}</Text>
      </View>
    </View>
  );
};

export default Header;
