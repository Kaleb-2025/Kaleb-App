import React, { useRef, useState } from 'react';
import {View,StyleSheet,Image,Pressable,Animated,Modal,Text,TouchableOpacity,ScrollView,} from 'react-native';
import Svg, { Path, Circle as SvgCircle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../../App';
import colors from '../../constants/colors';

const CIRCLE_RADIUS = 32;


const points = [
  { x: 60, y: 40, color: colors.orange, icon: require('../../assets/teclado.png'),  idTela: 1,  titulo: 'Definição de Variável', descricao: 'Familiarize-se com os conceitos básicos de variáveis.' },
  { x: 150, y: 40, color: colors.green, icon: require('../../assets/CPU.png'), idTela: 10, titulo: ' O que é proibido de as variáveis receberem', descricao: 'Entenda o que não pode haver em uma variável.' },
  { x: 240, y: 40, color: colors.blue, icon: require('../../assets/computador.png'), idTela: 15, titulo: 'Como referenciar uma variável no texto', descricao: 'Aprenda como é feita a referência de uma variável.' },
  { x: 320, y: 120, color: colors.red, icon: require('../../assets/internet.png'), idTela: 20, titulo: 'Chamando a variável', descricao: 'Chame sua primeira variável.' },
  { x: 240, y: 190, color: colors.gray, icon: require('../../assets/pagina_web.png') },
  { x: 140, y: 190, color: colors.gray, icon: require('../../assets/banco_dados.png') },
  { x: 60, y: 270, color: colors.gray, icon: require('../../assets/nuvem.png') },
  { x: 140, y: 350, color: colors.gray, icon: require('../../assets/seguranca.png') },
  { x: 240, y: 350, color: colors.gray, icon: require('../../assets/dispositivos.png') },
  { x: 320, y: 440, color: colors.gray, icon: require('../../assets/banco_dados.png') },
  { x: 240, y: 520, color: colors.gray, icon: require('../../assets/nuvem.png') },
  { x: 140, y: 520, color: colors.gray, icon: require('../../assets/seguranca.png') },
  { x: 60, y: 600, color: colors.gray, icon: require('../../assets/nuvem.png') },
  { x: 140, y: 690, color: colors.gray, icon: require('../../assets/seguranca.png') },
  { x: 240, y: 690, color: colors.gray, icon: require('../../assets/dispositivos.png') },
  { x: 320, y: 690, color: colors.gray, icon: require('../../assets/banco_dados.png') },
];


const TrilhaCurso = () => {

  const navigation = useNavigation();
  const scales = useRef(points.map(() => new Animated.Value(1))).current;

  const [bloqueadoVisible, setBloqueadoVisible] = useState(false);
  const [liberadoVisible, setLiberadoVisible] = useState(false);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);

  const handlePress = (index) => {
    const isLocked = points[index].color === colors.gray;

    if (isLocked) {
      setBloqueadoVisible(true);
    } else {
      setAtividadeSelecionada(points[index]);
      setLiberadoVisible(true);
    }
  };

  const handlePressIn = (index) => {
    Animated.spring(scales[index], {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (index) => {
    Animated.spring(scales[index], {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.bgWrapper}>
        <View style={{ height: 720 }}>
          <Svg width={380} height={720}>
            <Path
              d={`M60 40
                Q105 40 150 40
                Q195 40 240 40
                Q310 60 320 120
                Q300 180 240 190
                Q190 190 140 190
                Q65 215 60 270
                Q80 330 140 350
                Q190 350 240 350
                Q320 360 320 440
                Q310 510 240 520
                Q190 520 140 520
                Q70 520 50 600
                Q60 670 140 690
                Q200 690 240 690
                Q280 690 320 690`}
              stroke={colors.lightGray}
              strokeWidth={10}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {points.map((p, i) => (
              <SvgCircle
                key={i}
                cx={p.x}
                cy={p.y}
                r={CIRCLE_RADIUS}
                fill={p.color}
                stroke={colors.white}
                strokeWidth={3}
              />
            ))}
          </Svg>

          {points.map((p, i) => (
            <Animated.View
              key={`btn-${i}`}
              style={[
                styles.circleButton,
                {
                  top: p.y - CIRCLE_RADIUS,
                  left: p.x - CIRCLE_RADIUS,
                  transform: [{ scale: scales[i] }],
                },
              ]}
            >
              <Pressable
                onPress={() => handlePress(i)}
                onPressIn={() => handlePressIn(i)}
                onPressOut={() => handlePressOut(i)}
                style={styles.pressableArea}
              >
                {p.icon && <Image source={p.icon} style={styles.icon} />}
              </Pressable>
            </Animated.View>
          ))}
        </View>
      </View>

      {/* Modal Bloqueado */}
      <Modal transparent visible={bloqueadoVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Atividade Bloqueada</Text>
            <Text style={styles.modalText}>
              Complete as atividades anteriores para desbloquear esse conteúdo.
            </Text>
            <TouchableOpacity
              onPress={() => setBloqueadoVisible(false)}
              style={[styles.modalButton, styles.disabledButton]}
            >
              <Text style={styles.disabledButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Liberado */}
      <Modal transparent visible={liberadoVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>{atividadeSelecionada?.titulo}</Text>
            <Text style={styles.modalText}>{atividadeSelecionada?.descricao}</Text>
            <TouchableOpacity
              onPress={() => {
                setLiberadoVisible(false);
                navigation.navigate('TelaDinamica', { idTela: atividadeSelecionada.idTela });
              }}
              style={[styles.modalButton, styles.activeButton]}
            >
              <Text style={styles.modalButtonText}>Começar  +10xp</Text>
</TouchableOpacity>

          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 80,
  },
  bgWrapper: {
    alignItems: 'center',
    marginVertical: 24,
  },
  circleButton: {
    position: 'absolute',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableArea: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  // Modais
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    maxWidth: 320,
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
  },
  activeButton: {
    backgroundColor: colors.primary,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  disabledButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
});

export default TrilhaCurso;
