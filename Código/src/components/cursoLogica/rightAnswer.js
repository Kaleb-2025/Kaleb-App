<<<<<<< Updated upstream
// Importações
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, Dimensions, View, TouchableOpacity } from 'react-native';
=======
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
>>>>>>> Stashed changes
import { useNavigation, useRoute } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import stylesP from '../../styles/styleCursoLogica';
import { Audio } from 'expo-av'; 
<<<<<<< Updated upstream
import { supabase } from '../../../App';
=======
import {supabase} from '../../../App';
>>>>>>> Stashed changes

export default function RightAnswer({ valorXp, ganhouXp, finaldoCapitulo, idcapitulo, fechar, resetProgress }) {
  const navigation = useNavigation();
  const route = useRoute();
  const { idTela = 1 } = route.params || {};
  const { next } = useQuizProgress();
  const [successSound, setSuccessSound] = useState();

  // Dimensões e animações
  const { height } = Dimensions.get('window');
  const translateY = useRef(new Animated.Value(height)).current;
  const opacity = useRef(new Animated.Value(0.5)).current;

  // Som
  const soundRef = useRef(new Audio.Sound());

  // Registrar conclusão do capítulo
  async function registrarConclusaoCapitulo(idcapitulo) {
    const { data: userInfo, error: userError } = await supabase.auth.getUser();
    if (userError || !userInfo?.user?.id) {
      console.error('Erro ao obter usuário:', userError?.message);
      return;
    }
    
    const uid = userInfo.user.id;

    const { data: caps } = await supabase
      .from('capitulos')
      .select('curso')
      .eq('idcapitulo', idcapitulo)
      .single();

    const { data: existente } = await supabase
      .from('progresso_capitulo')
      .select('idcapitulo')
      .eq('idusuario', uid)
      .eq('idcapitulo', idcapitulo)
      .single();

    if (!existente) {
      const { error: insertError } = await supabase
        .from('progresso_capitulo')
        .insert({
          idusuario: uid,
          idcapitulo: idcapitulo,
          curso: caps.curso,
          completou: true,
        });

      if (insertError) {
        console.error('Erro ao registrar progresso:', insertError.message);
      } else {
        console.log('Progresso registrado para capítulo:', idcapitulo);
      }
    }
  }

  // Botão Continuar
  const onPress = async () => {
    fechar(); // fecha o modal
    if (finaldoCapitulo) {
      await registrarConclusaoCapitulo(idcapitulo);
      alert(`Parabéns! Você finalizou o capítulo ${idcapitulo} 🎉`);
       resetProgress?.();
      navigation.navigate('TelaCurso');
    } else {
      next();
      navigation.push('TelaDinamica', { idTela: idTela + 1 });
    }
  };


  // Efeito para tocar o som
  useEffect(() => {
    let isMounted = true;

    async function playSuccessSound() {
      try {
        await soundRef.current.loadAsync(require('../../assets/som/xp.mp3'));
        await soundRef.current.playAsync();
      } catch (error) {
        console.log('Erro ao tocar som:', error);
      }
    }

    if (isMounted) playSuccessSound();

    return () => {
      isMounted = false;
      soundRef.current.unloadAsync();
    };
  }, []);

  // Efeito da animação
  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: height / 2 - 50,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1000),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -100,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

   let soundRef;

  async function carregarSons() {
    try {
      const { sound: success } = await Audio.Sound.createAsync(
        require('../../assets/som/xp.m4a')
      );
      soundRef = success;
      setSuccessSound(success);
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
  const reproduzirSomSucesso = async () => {
      try {
        if (successSound) {
          await successSound.replayAsync();
        }
      } catch (error) {
        console.error('Erro ao reproduzir som de acerto:', error);
      }
    };

    reproduzirSomSucesso();
  }, [successSound]);

  return (
    <View style={stylesP.greenContainer}>
<<<<<<< Updated upstream
      {ganhouXp && (
        <Animated.View
          style={[
            stylesP.caixa,
            {
              transform: [{ translateY }],
              opacity: opacity,
            },
          ]}
        >
          <Text style={stylesP.xpText}>+ {valorXp} xp</Text>
        </Animated.View>
      )}

        {/*confetes*/}
        <ConfettiCannon
          count={150}
          origin={{ x: 0, y: 0 }}
          fadeOut={true}
          autoStart={true}
        />

      <View style={stylesP.containerProgress}>
        <View style={stylesP.insideProgress}>
          <Text
            style={{
              color: '#F8FAF0',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'galindo-font',
            }}
          >

            PARABÉNS!
          </Text>
        </View>
        <View style={stylesP.insideProgress2}>
          <TouchableOpacity style={stylesP.continueButton} onPress={onPress}>
            <Text style={{ color: '#FFF', fontSize: 14, fontWeight: 'bold' }}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
=======
    {ganhouXp && (
      <Animated.View
        style={[
          stylesP.caixa,
          {
            transform: [{ translateY }],
            opacity: opacity,
          },
        ]}
      >
        <Text style={stylesP.xpText}>+ {valorXp} xp</Text>
      </Animated.View>
    )}
       <View style={stylesP.containerProgress}>
          <View style={stylesP.insideProgress}>
            <Text style={{color:'#2CDA3B', fontSize: '16', fontWeight: 'bold', textAlign: 'center'}}>Correto!</Text>
          </View>
          <View style={stylesP.insideProgress2}>
            <TouchableOpacity style={stylesP.continueButton} onPress={onPress}>
              <Text style={{color:'#FFF', fontSize: '14', fontWeight: 'bold'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
>>>>>>> Stashed changes
    </View>
  );
}
      // <View style={stylesP.containerKaleb2}>
      //   <View style={stylesP.kalebContainer2}>
      //     <Image
      //       source={{ uri: 'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/kaleb-image//image%203.png' }}
      //       style={stylesP.kalebImagem2}
      //     />
      //   </View>
      // </View>
