import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useFonts } from 'expo-font';
import { supabase } from '../../../App';

export default function TelaConclusaoLogica() {
    const navigation = useNavigation();
    const [itemNome, setItemNome] = useState('');
    const [itemImagem, setItemImagem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [conquistasLista, setConquistasLista] = useState([]);


    const [loaded] = useFonts({
        'galindo-font': require('../../fonts/Galindo-Regular.ttf'),
    });

    useEffect(() => {
        async function carregarDados() {
            setLoading(true);

            const { data: { user } } = await supabase.auth.getUser();
            const uid = user.id;

            // Buscar TODAS as conquistas desbloqueadas pelo usuário na lógica
            const { data: conquistas, error } = await supabase
                .from("conquistas_desbloqueadas")
                .select("conquista")
                .eq("idusuario", uid)
                .in("conquista", [2, 4]); // Baby Kaleb + Óculos Nerd

            if (error) {
                console.error("Erro ao buscar conquistas:", error.message);
                setLoading(false);
                return;
            }

            // Extrair IDs
            const ids = conquistas.map(c => c.conquista);

            // Buscar informações das duas conquistas
            const { data: conquistasInfo, error: infoError } = await supabase
                .from("conquistas")
                .select("id, nome, imagem")
                .in("id", ids);

            if (infoError) {
                console.error("Erro ao buscar info:", infoError.message);
                setLoading(false);
                return;
            }

            // Salvar lista
            setConquistasLista(conquistasInfo);
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
            'Você concluiu o curso de Lógica e desbloqueou uma nova conquista!',
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
                <Text style={styles.subtitulo}>Você concluiu o curso de Lógica!</Text>

                {conquistasLista.map((item) => (
                    <View key={item.id} style={{ alignItems: "center", marginVertical: 15 }}>
                        <Image
                            source={{ uri: item.imagem }}
                            style={{ width: 160, height: 160, marginBottom: 10 }}
                            resizeMode="contain"
                        />
                        <Text style={styles.texto}>Você desbloqueou: {item.nome}</Text>
                    </View>
                ))}

                <Text style={styles.texto}>Agora pode equipar estes itens na tela de skins.</Text>

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
