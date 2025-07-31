import React, { useRef, useEffect } from 'react';
import { Animated, Text, StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import stylesP from '../../styles/styleCursoLogica';
import {supabase} from '../../../App';

const { height } = Dimensions.get('window');

  async function registrarConclusaoCapitulo(idcapitulo) {
  const { data: userInfo, error: userError } = await supabase.auth.getUser();
  if (userError || !userInfo?.user?.id) {
    console.error('Erro ao obter usuário:', userError?.message);
    return;
  }

  const uid = userInfo.user.id;

  const { data: existente, error: consultaError } = await supabase
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
      completou: true,
    });

    if (insertError) {
      console.error('Erro ao registrar progresso:', insertError.message);
    } else {
      console.log('Progresso registrado para capítulo:', idcapitulo);
    }
  }
}

export default function RightAnswer({ valorXp, ganhouXp, finaldoCapitulo, idcapitulo}) {
  const navigation = useNavigation();
  const route = useRoute();
  const { idTela = 1 } = route.params || {};

  const translateY = useRef(new Animated.Value(height)).current;
  const opacity = useRef(new Animated.Value(0.5)).current;
  const { next } = useQuizProgress();

const onPress = async () => {
  if (finaldoCapitulo) {
    await registrarConclusaoCapitulo(idcapitulo);
    alert("Parabéns! Você finalizou o capítulo " + idcapitulo + " 🎉");
    navigation.navigate('TelaCurso');
  } else {
    next();
    navigation.push('TelaDinamica', { idTela: idTela + 1 });
  }
};

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
  }, []);

  return (
    <View style={stylesP.greenContainer}>
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
      <View style={stylesP.containerKaleb2}>
        <View style={stylesP.kalebContainer2}>
          <Image
            source={{ uri: 'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/kaleb-image//image%203.png' }}
            style={stylesP.kalebImagem2}
          />
        </View>
      </View>
       <View style={stylesP.containerProgress}>
          <View style={stylesP.insideProgress}>
            <Text style={{color:'#2CDA3B', fontSize: '16', fontWeight: 'bold', left: -35, posiiton: 'absolute'}}>Correto!</Text>
          </View>
          <View style={stylesP.insideProgress2}>
            <TouchableOpacity style={stylesP.continueButton} onPress={onPress}>
              <Text style={{color:'#FFF', fontSize: '14', fontWeight: 'bold'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}
