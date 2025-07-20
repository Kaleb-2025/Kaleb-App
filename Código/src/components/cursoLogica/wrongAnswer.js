import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import stylesP from '../../styles/styleCursoLogica';

export default function WrongAnswer({ fechar, rightAnswer }) {
  return (
    <View style={stylesP.redContainer}>
      <View style={stylesP.containerKaleb2}>
        <View style={stylesP.kalebContainer2}>
          <Image
            source={{
              uri: 'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/kaleb-image//image%203.png',
            }}
            style={stylesP.kalebImagem2}
          />
        </View>
      </View>
      <View style={stylesP.containerProgress}>
        <View style={stylesP.insideProgress}>
            <Text style={{color:'#FF0000', fontSize: '16', fontWeight: 'bold', left: '-15%'}}>Incorreto!</Text>
          </View>
        <View style={stylesP.insideProgress2}>
          <View style={stylesP.insideText}>
            <Text style={{color:'#FF880A', fontSize: '15', fontWeight: 'bold'}}>Resposta esperada:</Text>
            <Text style={{color:'#FFF', fontSize: '14', fontWeight: 'bold'}}>{rightAnswer}</Text>
          </View>
          <TouchableOpacity style={stylesP.tryButton} onPress={fechar}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
              }}
            >
              tentar novamente
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
