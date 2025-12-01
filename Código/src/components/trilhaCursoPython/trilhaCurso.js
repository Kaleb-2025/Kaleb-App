import React, { useRef, useState, useCallback } from 'react';
import {
    View, Text, Modal, TouchableOpacity, Image,
    ScrollView, Pressable, Animated, StyleSheet
} from 'react-native';
import Svg, { Path, Circle as SvgCircle } from 'react-native-svg';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { supabase } from '../../../App';
import colors from '../../constants/colors';

const CIRCLE_RADIUS = 32;

export default function TrilhaCurso() {
    const navigation = useNavigation();
    const [capitulos, setCapitulos] = useState([]);
    const [capitulosConcluidos, setCapitulosConcluidos] = useState([]);
    const [bloqueadoVisible, setBloqueadoVisible] = useState(false);
    const [liberadoVisible, setLiberadoVisible] = useState(false);
    const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);
    const scales = useRef([]).current;

    useFocusEffect(
        useCallback(() => {
            async function buscarCapitulosComProgresso() {
                const { data: userData } = await supabase.auth.getUser();
                const uid = userData?.user?.id;
                if (!uid) return;

                const { data: caps } = await supabase
                    .from('capitulos')
                    .select(`
            idcapitulo,
            titulo,
            descricao,
            primeiratela,
            urlimagem,
            cores,
            positionX,
            positionY,
            quantidadexp
          `)
                    .eq('curso', 2)
                    .order('idcapitulo', { ascending: true });

                const { data: progresso } = await supabase
                    .from('progresso_capitulo')
                    .select('idcapitulo, completou')
                    .eq('idusuario', uid);

                const idsConcluidos = progresso
                    ?.filter(p => p.completou)
                    .map(p => p.idcapitulo) || [];

                setCapitulosConcluidos(idsConcluidos);

                const capitulosAtualizados = caps.map((cap, index) => {
                    if (index === 0) return { ...cap, bloqueado: false };
                    const anterior = caps[index - 1];
                    const anteriorConcluido = idsConcluidos.includes(anterior.idcapitulo);
                    return { ...cap, bloqueado: !anteriorConcluido };
                });

                setCapitulos(capitulosAtualizados);
                capitulosAtualizados.forEach((_, i) => {
                    scales[i] = new Animated.Value(1);
                });
            }

            buscarCapitulosComProgresso();
        }, [scales])
    );

    const handlePress = (cap) => {
        if (cap.bloqueado) {
            setBloqueadoVisible(true);
        } else {
            setAtividadeSelecionada(cap);
            setLiberadoVisible(true);
        }
    };

    const handlePressIn = (index) => {
        Animated.spring(scales[index], { toValue: 0.85, useNativeDriver: true }).start();
    };
    const handlePressOut = (index) => {
        Animated.spring(scales[index], { toValue: 1, useNativeDriver: true }).start();
    };

    // Função para criar curvas específicas para cada par
    const criarCurvaParaPar = (a, b, index) => {
        const par = `${index + 1}-${index + 2}`;

        switch (par) {
            case '3-4':
                // Curva suave entre 3 e 4
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '4-5':
                // Curva entre 4 e 5
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '6-7':
                // Curva entre 6 e 7
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '7-8':
                // Curva entre 7 e 8
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '9-10':
                // Curva entre 9 e 10
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '10-11':
                // Curva entre 10 e 11
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '12-13':
                // Curva entre 12 e 13
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '13-14':
                // Curva entre 13 e 14
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '15-16':
                // Curva entre 15 e 16
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '16-17':
                // Curva entre 16 e 17
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '18-19':
                // Curva entre 18 e 19
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '19-20':
                // Curva entre 19 e 20
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '21-22':
                // Curva entre 21 e 22
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '22-23':
                // Curva entre 22 e 23
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '24-25':
                // Curva entre 21 e 22
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '25-26':
                // Curva entre 22 e 23
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '27-28':
                // Curva entre 21 e 22
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '28-29':
                // Curva entre 22 e 23
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 + 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            case '30-31':
                // Curva entre 30 e 31
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 - 40} 
                ${b.positionX} ${b.positionY}`;

            case '31-32':
                // Curva entre 31 e 32
                return `M ${a.positionX} ${a.positionY} 
                Q ${(a.positionX + b.positionX) / 2 - 40} ${(a.positionY + b.positionY) / 2 + 40} 
                ${b.positionX} ${b.positionY}`;

            default:
                // Linha reta para outros pares
                return `M ${a.positionX} ${a.positionY} L ${b.positionX} ${b.positionY}`;
        }
    };

    const renderConnections = () => {
        return capitulos.slice(0, -1).map((a, i) => {
            const b = capitulos[i + 1];

            const algumConcluido =
                capitulosConcluidos.includes(a.idcapitulo) || capitulosConcluidos.includes(b.idcapitulo);

            const d = criarCurvaParaPar(a, b, i);

            return (
                <Path
                    key={`path-${i}`}
                    d={d}
                    fill="none"
                    stroke={algumConcluido ? colors.darkGray : colors.lightGray}
                    strokeWidth={7}
                    strokeLinecap="round"
                />
            );
        });
    };

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.centerWrapper}>
                <Svg width="100%" height={1700}>
                    {renderConnections()}
                    {capitulos.map((cap, i) => (
                        <SvgCircle
                            key={`circle-${i}`}
                            cx={cap.positionX}
                            cy={cap.positionY}
                            r={CIRCLE_RADIUS}
                            fill={
                                capitulosConcluidos.includes(cap.idcapitulo)
                                    ? colors.gold
                                    : (cap.bloqueado ? colors.gray : (colors[cap.cores] || colors.gray))
                            }
                            stroke={colors.white}
                            strokeWidth={3}
                        />
                    ))}
                </Svg>

                {capitulos.map((cap, i) => (
                    <Animated.View
                        key={`btn-${i}`}
                        style={[
                            styles.circleButton,
                            {
                                top: cap.positionY - CIRCLE_RADIUS,
                                left: cap.positionX - CIRCLE_RADIUS,
                                transform: [{ scale: scales[i] }],
                            },
                        ]}
                    >
                        <Pressable
                            onPress={() => handlePress(cap)}
                            onPressIn={() => handlePressIn(i)}
                            onPressOut={() => handlePressOut(i)}
                            style={styles.pressableArea}
                        >
                            {capitulosConcluidos.includes(cap.idcapitulo) ? (
                                <Image source={require('../../assets/concluido.png')} style={styles.icon} />
                            ) : (
                                cap.urlimagem && (
                                    <Image
                                        source={{ uri: cap.urlimagem }}
                                        style={[styles.icon, cap.bloqueado && { opacity: 0.4 }]}
                                    />
                                )
                            )}
                        </Pressable>
                    </Animated.View>
                ))}
            </View>

            {/* Modal liberado */}
            <Modal transparent visible={liberadoVisible} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <TouchableOpacity
                            onPress={() =>
                                setLiberadoVisible(false)}
                        >
                            <Image
                                source={require('../../assets/seta_preta.png')}
                                style={styles.backButton}
                            />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{atividadeSelecionada?.titulo}</Text>
                        <Text style={styles.modalText}>{atividadeSelecionada?.descricao}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setLiberadoVisible(false);
                                navigation.navigate('TelaDinamica', {
                                    idTela: atividadeSelecionada.primeiratela,
                                });
                            }}
                            style={[styles.modalButton, styles.activeButton]}
                        >
                            <Text style={styles.modalButtonText}>
                                Começar +{atividadeSelecionada?.quantidadexp}xp
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal bloqueado */}
            <Modal transparent visible={bloqueadoVisible} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Atividade Bloqueada</Text>
                        <Text style={styles.modalText}>Complete as anteriores para desbloquear.</Text>
                        <TouchableOpacity
                            onPress={() => setBloqueadoVisible(false)}
                            style={[styles.modalButton, styles.disabledButton]}
                        >
                            <Text style={styles.disabledButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: { flexGrow: 1, paddingBottom: 80 },
    centerWrapper: { flex: 1, alignItems: 'center' },
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
    icon: { width: 35, height: 35, resizeMode: 'contain' },
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
        width: '80%',
        alignItems: 'center',
    },

    backButton: {
        width: 20,
        height: 20,
    },
    modalTitle: { fontWeight: 'bold', fontSize: 18, marginBottom: 10, textAlign: 'center' },
    modalText: { fontSize: 14, color: '#333', textAlign: 'center', marginBottom: 20 },
    modalButton: { paddingHorizontal: 24, paddingVertical: 10, borderRadius: 12 },
    activeButton: { backgroundColor: colors.primary },
    modalButtonText: { color: 'white', fontWeight: 'bold' },
    disabledButton: { backgroundColor: '#ccc' },
    disabledButtonText: { color: '#666', fontWeight: 'bold' },
});


