import { Linking } from 'react-native';

export const handleTermsPress = () => {
  Linking.openURL('https://seusite.com/termos');
};

export const handlePrivacyPress = () => {
  Linking.openURL('https://seusite.com/privacidade');
};
