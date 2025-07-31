import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import stylesP from '../../styles/styleCursoLogica'

export default function Kaleb({ falas = [] }) {
  const [indexFala, setIndexFala] = useState(0);

  const falaAtual = falas[indexFala];

  function proximaFala() {
    if (indexFala < falas.length - 1) {
      setIndexFala(indexFala + 1);
    }
  }

  return (
    <View style={stylesP.containerKaleb}>
      <View style={stylesP.balao}>
      <Text style={stylesP.falaTexto}>
        {falaAtual?.texto || '...'}
      </Text>
      <View style={stylesP.trianguloBorda} />
      <View style={stylesP.triangulo} />
    </View>
      <View style={stylesP.kalebContainer}>
        <Image source={{ uri: 'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/kaleb-image//image%203.png'}} style={stylesP.kalebImagem} />
      </View>
    </View>
  );
}

