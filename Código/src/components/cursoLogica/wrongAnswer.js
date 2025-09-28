import React, {useState, useEffect} from 'react';
import { Audio } from 'expo-av'; 
import { View, Text, Image, TouchableOpacity } from 'react-native';
import stylesP from '../../styles/styleCursoLogica';

export default function WrongAnswer({ fechar, rightAnswer }) {
  const [errorSound, setErrorSound] = useState();
  useEffect(() => {
   let soundRef;

  async function carregarSons() {
    try {
      const { sound: success } = await Audio.Sound.createAsync(
        require('../../assets/som/erro.m4a')
      );
      soundRef = success;
      setErrorSound(success);
    } catch (error) {
      console.error('Erro ao carregar o som:', error);
    }
  }

  carregarSons();

  return () => {
    if (soundRef) {
      soundRef.unloadAsync();
    }
  };
  }, [])

  useEffect(() => {
  const reproduzirSomErro = async () => {
      try {
        if (errorSound) {
          await errorSound.replayAsync();
        }
      } catch (error) {
        console.error('Erro ao reproduzir som de acerto:', error);
      }
    };

    reproduzirSomErro();
  }, [errorSound]);
  return (
    <View style={stylesP.redContainer}>
      <View style={stylesP.containerProgress}>
        <View style={stylesP.insideProgress}>
            <Text style={{color:'#FF0000', fontSize: '16', fontWeight: 'bold', textAlign: 'center'}}>Incorreto!</Text>
          </View>
        <View style={stylesP.insideProgress2}>
          <View style={stylesP.insideText}>
            <Text style={{color:'#FF880A', fontSize: '15', fontWeight: 'bold'}}>Resposta esperada:</Text>
            <Text style={{color:'#FFF', fontSize: '14', fontWeight: 'bold', textAlign: 'center'}}>{rightAnswer}</Text>
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
      // <View style={stylesP.containerKaleb2}>
      //   <View style={stylesP.kalebContainer2}>
      //     <Image
      //       source={{
      //         uri: 'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/kaleb-image//image%203.png',
      //       }}
      //       style={stylesP.kalebImagem2}
      //     />
      //   </View>
      // </View>
