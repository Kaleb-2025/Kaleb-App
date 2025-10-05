import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import BarraProgresso from '../components/trilhaCursoLogica/barraProcesso';
import { supabase } from '../../App';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Componente StatsHeader
const StatsHeader = ({ setAndamentoCurso }) => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    buscarProgressoCurso();
    buscarDadosPerfil();
  }, []);

  async function buscarProgressoCurso() {
    const { data: userData } = await supabase.auth.getUser();
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
    const totalCapitulos = 16;
    const progressoPercentual = (capsConcluidos / totalCapitulos) * 100;

    setAndamentoCurso(progressoPercentual); 
  }

  // Busca dados do perfil do usuário
  async function buscarDadosPerfil() {
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
  return (
    <><View style={styles.header}>
      <View style={styles.headerRow}>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Image source={require('../assets/estrela.png')} style={styles.icon} />
            <Text style={styles.statText}>{perfil?.xp ?? '0'}</Text>
          </View>
          <View style={styles.statBox}>
            <Image source={require('../assets/kaleb.png')} style={styles.icon} />
            <Text style={styles.statText}>15</Text>
          </View>
          <View style={styles.statBox}>
            <Image source={require('../assets/curso.png')} style={styles.icon} />
            <Text style={styles.statText}>{(perfil?.cursoAtual) ?? '1'}</Text>
          </View>
        </View>
      </View>
    </View><View style={styles.statItem}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fde0415441b903316c19e55ea5dd3c71a9ab891" }}
          style={styles.statIcon} />
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View><View style={styles.statItem}>
        <Image
          source={{ uri: "https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/home//python-icon.png" }}
          style={styles.statIcon} />
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View><View style={styles.statItemNoBorder}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4987ee9e912bad68f5067d74441d6d730ed47a9c" }}
          style={styles.statIcon} />
      </View></>
    </View>
  );
};

// Componente CourseCard
const CourseCard = ({ title, progress, status, buttonText, tela, bloqueado }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.courseCard}>
      <View style={styles.courseImageContainer}>
        <BarraProgresso percent={progress} size={75} strokeWidth={6} />
         <Text style={styles.courseProgress}>{progress}%</Text>
      </View>
      <View style={styles.courseInfo}>
        <View style={styles.courseTitleContainer}>
          <Text style={styles.courseTitle}>{title}</Text>
        </View>
        <View style={styles.courseFooter}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('CursoLogica')}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Componente CoursesList
const CoursesList = ({ andamentoCurso }) => {
  return (
    <View style={styles.coursesContainer}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Cursos</Text>
      </View>

      <CourseCard
        title="Lógica de Programação"
        progress={andamentoCurso} 
        status="Não iniciado"
        buttonText="Iniciar"
      />

    <CourseCard
      title="Python"
      progress={pythonBloqueado ? 0 : andamentoPython}
      status={pythonBloqueado ? 'Bloqueado' : (andamentoPython === 0 ? 'Não Iniciado' : 'Iniciado')}
      buttonText={pythonBloqueado ? 'Bloqueado' : 'Iniciar'}
      tela={pythonBloqueado ? null : (andamentoPython === 0 ? 'CursoPython' : 'TelaCursoPython')}
      bloqueado={pythonBloqueado} // <--- importante
    />


      {/*<CourseCard
        title="Java"
        progress={0}
        status="Não iniciado"
        buttonText="Iniciar"
        tela = 'naotem'
      /> */}

    </View>
  );
};

// Componente BottomNavigation
const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3ffa6481197d2dd98d73b0050be78682639e12" }}
          style={styles.navIcon}
        />
        <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/60e4c3d7ab9848c86b5decd6a94821bd7f3e3783" }}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Cursos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('TelaPerfil')}
      >
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0296e8b6f65174798cae7c22f2d743ceb252ba2" }}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente Principal
export default function Home() {
  const [andamentoCurso, setAndamentoCurso] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <StatsHeader setAndamentoCurso={setAndamentoCurso}/>
          <CoursesList andamentoCurso={andamentoCurso}/>
        </ScrollView>
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  safeArea: { 
    flex: 1,
    backgroundColor: '#f9fafb' 
  },
  container: { 
    flex: 1
  },
  statsHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#8AEAFF' 
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8AEAFF',
    borderRadius: 30,
    borderColor: '#4B5563',
    borderWidth: 2, 
    padding: 6, 
    marginHorizontal: 4, 
    flex: 1 
  },
  statIcon: { 
    width: 32, 
    height: 32, 
    marginRight: 8 
  },
  statValueContainer: { 
    backgroundColor: 'transparent', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 4 
  },
  statValue: { 
    color: '#1f2937', 
    fontWeight: '500' 
  },
  statItemNoBorder: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#8AEAFF',
    borderRadius: 30, 
    padding: 6, 
    marginHorizontal: 4, 
    flex: 1 
  },
  icon: { 
    width: 24, 
    height: 24,
    marginRight: 4 
  },
  courseCard: { 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    padding: 16, 
    marginBottom: 16, 
    borderRadius: 8, 
    shadowColor: '#000',  
    shadowOffset: { 
      width: 0,
       height: 2 
      }, 
    shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 
  },
  courseImageContainer: { 
    marginRight: 16, 
    alignItems: 'center' 
  },
  courseInfo: { 
    flex: 1 
  },
  courseTitleContainer: { 
    marginBottom: 8
  },
  courseTitle: { 
    fontSize: 18,
     fontWeight: 'bold', 
     color: '#1f2937' },
  courseFooter: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' },
  statusBadge: { 
    backgroundColor: '#f3f4f6', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 4 },
  statusText: { 
    color: '#4b5563' },
  actionButton: { 
    backgroundColor: '#0B1658', 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    borderRadius: 50 },
  buttonText: { 
    color: 'white', 
    fontWeight: '500' 
  },
  coursesContainer: { 
    padding: 16 
  },
  sectionTitleContainer: { 
    marginBottom: 16 
  },
  sectionTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#1f2937' 
  },
    courseProgress: {
    marginTop: 4,
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 14,
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
    width: 24, 
    height: 24, 
    marginBottom: 4 
  },
  navText: { 
    fontSize: 12,
    color: '#4b5563'
  },
  activeNavText: { 
    color: '#3b82f6' 
  },
});
