import React, { useState, useEffect } from 'react'; 
import {View,Text,StyleSheet,StatusBar,TouchableOpacity,Image,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import colors from '../../constants/colors';
import textos from '../../constants/textos';
import BarraProgresso from '../../components/trilhaCursoLogica/barraProcesso';
import TrilhaCurso from '../../components/trilhaCursoLogica/trilhaCurso';
import MateriaisCurso from '../../components/trilhaCursoLogica/materiaisCurso';
import {supabase} from '../../../App';

const TelaCurso = () => {
  const [abaAtiva, setAbaAtiva] = useState('trilha');
  const navigation = useNavigation();
  const [andamentoCurso, setAndamentoCurso] = useState([]); // aqui preciso separar o progresso do usuário COM o curso para que haja separação entre os cursos

async function buscarProgressoCurso() {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  const uid = userData?.user?.id;

  if (!uid) {
    console.error('Usuário não autenticado');
    return;
  }

  const { data: progresso, error: progError } = await supabase
    .from('progresso_capitulo')
    .select('idcapitulo, completou')
    .eq('idusuario', uid);

  if (progError) {
    console.error('Erro ao buscar progresso:', progError.message);
    return;
  }

  const capsConcluidos = progresso.filter(p => p.completou === true).length;
  const totalCapitulos = 18;

  const progressoPercentual = parseFloat(((capsConcluidos / totalCapitulos) * 100).toFixed(1));

  setAndamentoCurso(progressoPercentual);
}
    const [perfil, setPerfil] = useState(null);
    useEffect(() => {
    buscarDados();
  }, []);

  async function buscarDados() {
    const { data: userInfo, error: userError } = await supabase.auth.getUser();

    if (userError || !userInfo?.user?.id) {
      console.error("Erro ao obter usuário:", userError?.message);
      return;
    }

    const uid = userInfo.user.id;
    const { data: perfilData, error: perfilError } = await supabase
      .from('info_user')
      .select('*')
      .eq('idusuario', uid)
      .single();

    if (perfilError) {
      console.error("Erro ao buscar info_user:", perfilError.message);
    } else {
      setPerfil(perfilData);
    }
  }
  useEffect(() => {
  buscarProgressoCurso();
}, []);


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Cabeçalho com seta e indicadores */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backButton}
           onPress={() => navigation.navigate('Home')}
          >
            
            <Image
              source={require('../../assets/seta_branca.png')}
              style={styles.setaImg}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Image source={require('../../assets/estrela.png')} style={styles.icon} />
              <Text style={styles.statText}>{perfil?.xp ?? '0'}</Text>
            </View>
            <View style={styles.statBox}>
              <Image source={require('../../assets/kaleb.png')} style={styles.icon} />
              <Text style={styles.statText}>15</Text>
            </View>
            <View style={styles.statBox}>
              <Image source={require('../../assets/curso.png')} style={styles.icon} />
              <Text style={styles.statText}>{perfil?.cursoandamento === 1 ? 'Lógica' : 'Python'}</Text>
            </View>
          </View>

          <View style={{ width: 38 }} />
        </View>

        {/* Logo do Python */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logica_logo1.png')}
            style={styles.logoImg}
            resizeMode="contain"
          />
        </View>

        {/* Linha de separação (decorativa) */}
        <View style={styles.linhaseparacao}></View>

        {/* Textos + Barra de progresso */}
        <View style={styles.progressRow}>
          <View style={styles.progressTextGroup}>
            <Text style={styles.courseName}>{textos.courseName}</Text>
            <Text style={styles.difficulty}>{textos.difficulty}</Text>
            <Text style={styles.duration}>{textos.duration}</Text>
          </View>
          <BarraProgresso percent={andamentoCurso} size={86} strokeWidth={3} />
        </View>
      </View>

      {/* Abas */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, abaAtiva === 'trilha' && styles.tabActive]}
          onPress={() => setAbaAtiva('trilha')}
        >
          <Text
            style={[styles.tabText, abaAtiva === 'trilha' && styles.tabTextActive]}
          >
            {textos.tabCourse}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, abaAtiva === 'materiais' && styles.tabActive]}
          onPress={() => setAbaAtiva('materiais')}
        >
          <Text
            style={[styles.tabText, abaAtiva === 'materiais' && styles.tabTextActive]}
          >
            {textos.tabMaterials}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <View style={styles.areaConteudo}>
        {abaAtiva === 'trilha' ? <TrilhaCurso /> : <MateriaisCurso />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: colors.primary,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backButton: {
    padding: 8,
    marginRight: 7,
  },
  setaImg: {
    width: 30,
    height: 30,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
  statText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  logoImg: {
    width: 150,
    height: 150,
  },
  linhaseparacao: {
    borderTopWidth: 2,
    borderTopColor: colors.white,
    paddingTop: 8,
  },
  courseName: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 2,
    marginBottom:15,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  progressTextGroup: {
    flex: 1,
  },
  difficulty: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  duration: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 0,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 16,
    paddingHorizontal: 24,
  },
  areaConteudo: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: colors.tabActive,
  },
  tabText: {
    color: colors.tabInactive,
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabTextActive: {
    color: colors.tabActive,
  },
});

export default TelaCurso;
