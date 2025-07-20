import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { supabase } from '../../../App';

export default function TelaPerfil() {
  const [perfil, setPerfil] = useState(null);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [dataCriacao, setDataCriacao] = useState('');
  const [nomeCurso, setNomeCurso] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarDados();
  }, []);

  async function buscarDados() {
    setLoading(true);

    const { data: userInfo, error: userError } = await supabase.auth.getUser();

    if (userError || !userInfo?.user?.id) {
      console.error("Erro ao obter usuário:", userError?.message);
      setLoading(false);
      return;
    }

    const uid = userInfo.user.id;
    setNomeUsuario(userInfo.user.user_metadata?.full_name ?? 'Usuário sem nome');
    setDataCriacao(new Date(userInfo.user.created_at).toLocaleDateString('pt-BR'));

    const { data: perfilData, error: perfilError } = await supabase
      .from('info_user')
      .select('*')
      .eq('idusuario', uid)
      .single();

    if (perfilError) {
      console.error("Erro ao buscar info_user:", perfilError.message);
    } else {
      setPerfil(perfilData);
    
    if(perfilData.cursoandamento == 1){
      setNomeCurso("Lógica de Programação");
    }else if (perfilData.cursoandamento == 2){
      setNomeCurso("Python");
    }else{
      setNomeCurso("Nenhum curso em andamento");
    }
    }
    
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0A165A" />
        <Text style={styles.loadingText}>Carregando perfil...</Text>
      </View>
    );
  }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Perfil do Usuário</Text>
        <Text style={styles.text}>Nome: {nomeUsuario}</Text>
        <Text style={styles.text}>Criado em: {dataCriacao}</Text>
        <Text style={styles.text}>XP: {perfil?.xp ?? '0'}</Text>
        <Text style={styles.text}>Curso atual: {nomeCurso}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0A165A',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});
