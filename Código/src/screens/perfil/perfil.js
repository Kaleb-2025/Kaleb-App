import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../../../App';

function TelaPerfil({ navigation }) {
  const [nome, setNome] = useState('');
  const [xp, setXp] = useState('');
  const [nivel, setNivel] = useState('');
  const [curso, setCurso] = useState('');
  const [conquista, setConquista] = useState('');
  const [perfil, setPerfil] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const carregarDados = async () => {
      const { data: { user }, error } = await supabase.auth.getUser(); 
      if (error) {
        console.log('Erro ao buscar usuário:', error.message);
      } else if (user) {
        setNome(user.user_metadata.full_name || '');
      }
    };

    const carregarUsuario = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('info_user')
        .select('*')
        .eq('idusuario', user.id)
        .single();

      if (error) {
        console.log('Erro ao buscar info_user:', error.message);
      } else if (data) {
        setXp(data.xp);
        setCurso(data.cursoandamento);
      }
    };

    const carregarConquistas = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('conquistas_desbloqueadas')
      .select('*')
      .eq('idusuario', user.id);

    if (error) {
      console.log('Erro ao buscar conquistas:', error.message);
    } else if (data) {
      setConquista(data.length); 
    }
  };


    carregarDados();
    carregarUsuario();
    carregarConquistas();
  }, []);

  useEffect(() => {
    if (xp === '') return;

    if (xp <= 150){
      setNivel("Iniciante");
    } else if (xp <= 240){
      setNivel("Intermediário");
    } else {
      setNivel("Avançado");
    }
  }, [xp]);

  const skinsMap = {
  "Ovinho": require('../../assets/skins/ovinho.png'),
  "Baby Kaleb": require('../../assets/skins/babykaleb.png'),
  "Casca Quebrada": require('../../assets/skins/casca.png'),
  "Kaleb": require('../../assets/logo.png'),
  "Pythonete": require('../../assets/skins/pythonete_01.png'),
  "Baby Kaleb Nerd": require('../../assets/skins/baby_kalebNerd.png'),
  "Kaleb Nerd": require('../../assets/skins/kalebNerd.png'),
};

 useFocusEffect(
    React.useCallback(() => {
      buscarDadosPerfil();
    }, [])
  );

  async function buscarDadosPerfil() {
    const { data: userInfo, error: userError } = await supabase.auth.getUser();
    if (userError || !userInfo?.user?.id) return;

    const uid = userInfo.user.id;

    const { data: perfilData } = await supabase
      .from("info_user")
      .select("*")
      .eq("idusuario", uid)
      .single();

    setPerfil(perfilData);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <ImageBackground
          source={skinsMap[perfil?.skin_atual] || skinsMap["Ovinho"]}
          style={styles.header}
          imageStyle={{ resizeMode: 'cover' }}
        >
          <TouchableOpacity
            style={styles.gearIcon}
            onPress={() => navigation.navigate('Configuracoes')}
          >
            <MaterialIcons name="settings" size={32} color="#fff" />
          </TouchableOpacity>
        </ImageBackground>

        {/* Nome e nível */}
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.level}>{nivel}</Text>

        {/* Barra decorativa */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBg} />
        </View>

        {/* Cards de status */}
        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <View style={styles.cardRow}>
              <FontAwesome name="star" size={28} color="#3B82F6" />
              <Text style={styles.cardValue}> {xp} </Text>
            </View>
            <Text style={styles.cardLabel}>XP ganhos</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Image source={require('../../assets/iconkaleb.png')} style={styles.cardIcon} />
              <Text style={styles.cardValue}> 15</Text>
            </View>
            <Text style={styles.cardLabel}>Presença</Text>
          </View>
        </View>

        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <View style={styles.cardRow}>
              <FontAwesome5 name="python" size={28} color="#1E293B" />
              <Text style={styles.cardValue}> {curso === 0 ? "Lógica" : "Python"}</Text>
            </View>
            <Text style={styles.cardLabel}>Cursos</Text>
          </View>
          
          <View style={styles.card}>
            <TouchableOpacity onPress ={ () => navigation.navigate('TelaSkin')}>
              <View style={styles.cardRow}>
                <Image 
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/616/616494.png' }} 
                  style={styles.cardIcon} 
                />
                <Text style={styles.cardValue}> {conquista} </Text>
              </View>
              <Text style={styles.cardLabel}>Conquistas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Footer fixo */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/iconhome.png')} style={styles.navIcon}/>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MeusCursos')}>
          <Image source={require('../../assets/iconcursos.png')} style={styles.navIcon}/>
          <Text style={styles.navText}>Cursos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TelaPerfil')}>
          <Image source={require('../../assets/iconusuario_preto.png')} style={styles.navIcon}/>
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default TelaPerfil;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  },
  header: { 
    height: 340,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%',
    backgroundColor: '#0B1658',
  },
  gearIcon: { 
    position: 'absolute', 
    top: 24,
    left: 20, 
    zIndex: 2 
  },
  content: { 
    flex: 1,
    width: '100%',
  },
  name: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 16 
  },
  level: { 
    fontSize: 18, 
    color: '#888', 
    textAlign: 'center', 
    marginBottom: 8 
  },
  progressBarContainer: { 
    width: '90%', 
    alignSelf: 'center',
    marginBottom: 16
  },
  progressBarBg: { 
    height: 4, 
    backgroundColor: '#E9DDF6', 
    borderRadius: 2, 
    overflow: 'hidden'
  },
  cardsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '75%',
    marginTop: 12 
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#BDBDBD',
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 6,
    paddingVertical: 10,
    minHeight: 80,
  },
  cardValue: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 4
  },
  cardLabel: { 
    fontSize: 14,
    color: '#444', 
    marginTop: 2 
  },
  cardIcon: { 
    width: 32, 
    height: 32, 
  },
  bottomNav: { 
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    paddingVertical: 16, 
    borderTopWidth: 1, 
    borderTopColor: '#e5e7eb' 
  },
  navItem: { 
    alignItems: 'center'
  },
  navIcon: { 
    width: 30.5, 
    height: 28, 
    marginBottom: 4 
  },
  navText: { 
    fontSize: 12,
    color: '#4b5563'
  },
});
