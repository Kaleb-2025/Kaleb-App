import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const SocialLoginButton = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.socialButton} onPress={onPress}>
      <Image source={icon} style={styles.socialIcon} />
      <Text style={styles.socialText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
