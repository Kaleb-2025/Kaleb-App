import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Markdown from 'react-native-markdown-display';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';
import { supabase } from '../../../App';

export default function TelaFinal() {
    // Importação da fonte externa
  const [loaded, error] = useFonts({
    'galindo-font': require('../../fonts/Galindo-Regular.ttf'),
  });

  const { correctCount, resetProgress } = useQuizProgress(); 
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);

const handleFinish = async () => {
  try {
    // pega sessão (se você não passar sessionData via props)
    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData?.session?.user?.id;
    if (!userId) {
      console.error('Usuário não logado!');
      return;
    }

    const cursoSelecionado = correctCount >= 4 ? 2 : 1;
    console.log('correctCount:', correctCount, 'cursoSelecionado:', cursoSelecionado);

    // 1) tenta dar UPDATE
    const { data: updated, error: updateError } = await supabase
      .from('info_user')
      .update({ xp: 0, cursoandamento: cursoSelecionado })
      .eq('idusuario', userId)
      .select(); // .select() retorna os registros atualizados

    if (updateError) {
      console.error('Erro no update:', updateError);
      // (não corta — ainda tentamos o insert abaixo, dependendo do erro você pode querer abortar)
    }

    if (updated && updated.length > 0) {
      console.log('Registro atualizado:', updated);
    } else {
      // 2) se não existia registro, insere
      const { data: inserted, error: insertError } = await supabase
        .from('info_user')
        .insert([{ idusuario: userId, xp: 0, cursoandamento: cursoSelecionado }])
        .select();

      if (insertError) {
        console.error('Erro no insert:', insertError);
      } else {
        console.log('Registro inserido:', inserted);
      }
    }

    resetProgress();
    navigation.navigate('Home');
  } catch (err) {
    console.error('Erro geral:', err);
  }
};

if (!loaded) {
  return ActivityIndicator;
}


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/kaleb-image//image%203.png',
          }}
          style={styles.kalebImagem}
        />

        <Text style={styles.titulo}>Você completou o teste!</Text>

        <Markdown style={{ body: [styles.text] }}>
          {`Seu total de **acertos** foi **${correctCount}/6**.`}
        </Markdown>

        <Markdown style={{ body: [styles.text] }}>
          {correctCount >= 4 
            ? "Parabéns! Você será direcionado para o curso de **Python**." 
            : "Você será direcionado para o curso de **Lógica de Programação** para reforçar a base."}
        </Markdown>

        <TouchableOpacity
          style={[styles.buttonBase, styles.azul]}
          onPress={handleFinish}
        >
          <Text style={[styles.textBase, styles.textBranco]}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#f8faf0',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8faf0',
  },
  titulo: {
    color: '#000',
    fontFamily: 'galindo-font',
    fontSize: 36,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  text:{
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
textBase: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  kalebImagem:{
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: '#0B1658',
    borderRadius: 100,
    padding: 10,
    marginBottom: 25,
  },
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginTop: 25,
    width: 250,
    alignSelf: 'center',
  },
  azul: {
    backgroundColor: '#0B1658',
  },
  textBranco: {
    color: '#FFFFFF',
  },
});