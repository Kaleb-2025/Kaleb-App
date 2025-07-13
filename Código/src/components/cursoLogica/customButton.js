import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import stylesP from '../../styles/styleCursoLogica'

export default function CustomButton({ tipoBotao, onPress, align = 'center' }) {
  const isContinuar = tipoBotao === 0;

  return (
    <View style={[stylesP.containerButton, align === 'right' ? stylesP.alignRight : stylesP.alignCenter]}>
      <TouchableOpacity
        style={[stylesP.buttonBase, isContinuar ? stylesP.amarelo : stylesP.azul]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={[stylesP.textBase, isContinuar ? stylesP.textPreto : stylesP.textBranco]}>
          {isContinuar ? 'Continuar' : 'Verificar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}