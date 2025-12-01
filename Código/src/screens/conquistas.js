import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useFonts } from 'expo-font';
import { supabase } from '../../App';

export default function TelaConquista() {
    const navigation = useNavigation();
    const [itemNome, setItemNome] = useState('');
    const [itemImagem, setItemImagem] = useState(null);
    const [loading, setLoading] = useState(true);

    const [loaded] = useFonts({
        'galindo-font': require('../fonts/Galindo-Regular.ttf'),
    });

    useEffect(() => {
        async function carregarDados() {
            setLoading(true);

            const { data: { user } } = await supabase.auth.getUser();

            const { data: conquistas, error: conquistasError } = await supabase
                .from('conquistas_desbloqueadas')
                .select('*')
                .eq('idusuario', user.id)
                .order('id', { ascending: true }); // garante ordem correta

            if (conquistasError) {
                console.error('Erro ao buscar conquista desbloqueada:', conquistasError.message);
                setLoading(false);
                return;
            }

            if (!conquistas || conquistas.length === 0) {
                console.error('Nenhuma conquista encontrada.');
                setLoading(false);
                return;
            }

            // Pega a última conquista desbloqueada
            const ultimaConquista = conquistas[conquistas.length - 1];
            const conquistaId = ultimaConquista.conquista;

            const { data: conquistaInfo, error: conquistaError } = await supabase
                .from("conquistas")
                .select("nome, imagem")
                .eq("id", conquistaId)
                .single();

            console.log("Resultado da busca na tabela conquistas:", conquistaInfo, conquistaError);

            if (conquistaError) {
                console.error('Erro ao buscar conquista:', conquistaError.message);
                setLoading(false);
                return;
            }

            setItemNome(conquistaInfo.nome);
            setItemImagem(conquistaInfo.imagem);

            setLoading(false);
        }

        carregarDados();
    }, []);



    if (!loaded || loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0B1658" />
            </View>
        );
    }

    const irParaProximo = () => {
        Alert.alert(
            'Parabéns! 🎉',
            'Você desbloqueou uma nova conquista!',
            [
                {
                    text: 'Ir para a tela de Skins',
                    onPress: () => navigation.navigate('TelaSkin'),
                },
                {
                    text: 'Voltar para a Home',
                    onPress: () => navigation.navigate('Home'),
                    style: 'cancel',
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.titulo}>🎉 PARABÉNS!</Text>
                <Text style={styles.subtitulo}>Você ganhou uma nova skin!</Text>

                {itemImagem && (
                    <Image
                        source={{ uri: itemImagem }}
                        style={styles.itemImagem}
                        resizeMode="contain"
                    />
                )}

                <Text style={styles.texto}>Você desbloqueou: {itemNome}</Text>
                <Text style={styles.texto}>Agora pode equipar este item na tela de skins.</Text>

                <TouchableOpacity
                    onPress={irParaProximo}
                    style={styles.botao}
                >
                    <Text style={styles.botaoTexto}>Continuar</Text>
                </TouchableOpacity>
            </View>

            <ConfettiCannon
                count={200}
                origin={{ x: 0, y: 0 }}
                fadeOut={true}
                autoStart={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8faf0',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontFamily: 'galindo-font',
        fontSize: 42,
        color: '#0B1658',
    },
    subtitulo: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0B1658',
    },
    texto: {
        fontSize: 16,
        marginTop: 8,
        textAlign: 'center',
    },
    itemImagem: {
        width: 200,
        height: 200,
        marginVertical: 25,
    },
    botao: {
        backgroundColor: '#0B1658',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 50,
        marginTop: 25,
        width: 250,
        alignSelf: 'center',
    },
    botaoTexto: {
        color: '#f8faf0',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
    },
});
