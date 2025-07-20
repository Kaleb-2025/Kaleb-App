import React, { useRef, useEffect } from 'react';
import { Animated, Text, StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import stylesP from '../../styles/styleCursoLogica';

const { height } = Dimensions.get('window');

export default function RightAnswer({valorXp}) {
  const navigation = useNavigation();
  const route = useRoute();
  const { idTela = 1 } = route.params || {};

  const translateY = useRef(new Animated.Value(height)).current;
  const opacity = useRef(new Animated.Value(0.5)).current;
  const { next } = useQuizProgress();

  const onPress = () => {
    next();
    navigation.push('TelaDinamica', { idTela: idTela + 1 });
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
