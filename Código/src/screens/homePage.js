import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import BarraProgresso from '../components/home/barraProcesso';
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
const StatsHeader = ({ setAndamentoCurso, setPerfil }) => {
  const [perfilState, setPerfilState] = useState(null);

  useEffect(() => {
    buscarProgressoCurso();
    buscarDadosPerfil();
  }, []);

  async function buscarDadosPerfil() {
    const { data: userInfo, error: userError } = await supabase.auth.getUser();
    if (userError || !userInfo?.user?.id) {
      console.error("Erro ao obter usuário:", userError?.message);
      return;
    }

    const uid = userInfo.user.id;
    const { data: perfilData, error: perfilError } = await supabase
      .from('info_user')
      .select('xp, cursoandamento')
      .eq('idusuario', uid)
      .single();

    if (perfilError) {
      console.error("Erro ao buscar info_user:", perfilError.message);
    } else {
      setPerfil(perfilData);          // envia para o Home
      setPerfilState(perfilData);     // atualiza o estado interno do StatsHeader
      console.log('Perfil vindo do banco:', perfilData);
    }
  }

  // Função para buscar progresso por curso
  async function buscarProgressoCurso() {
    const { data: userData } = await supabase.auth.getUser();
    const uid = userData?.user?.id;
    if (!uid) {
      console.error('Usuário não autenticado');
      return;
    }

    // Busca todos os capítulos com o campo "curso"
    const { data: capitulos, error: capsError } = await supabase
      .from('capitulos')
      .select('idcapitulo, curso');

    if (capsError) {
      console.error('Erro ao buscar capítulos:', capsError.message);
      return;
    }

    // Busca progresso do usuário
    const { data: progresso, error: progError } = await supabase
      .from('progresso_capitulo')
      .select('idcapitulo, completou')
      .eq('idusuario', uid);

    if (progError) {
      console.error('Erro ao buscar progresso:', progError.message);
      return;
    }

    // Agrupar capítulos por curso
    const cursosProgresso = {};
    capitulos.forEach(c => {
      if (!cursosProgresso[c.curso]) {
        cursosProgresso[c.curso] = { total: 0, concluidos: 0 };
      }
      cursosProgresso[c.curso].total++;
      if (progresso.find(p => p.idcapitulo === c.idcapitulo && p.completou)) {
        cursosProgresso[c.curso].concluidos++;
      }
    });

    // Transformar em percentual
      // Transformar em percentual e arredondar
      const percentuais = {};
      Object.keys(cursosProgresso).forEach(cursoId => {
        const { total, concluidos } = cursosProgresso[cursoId];
        // calcular e arredondar
        percentuais[cursoId] = total > 0 ? parseFloat(((concluidos / total) * 100).toFixed(1)) : 0;
      });

      setAndamentoCurso(percentuais);
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Image source={require('../assets/estrela.png')} style={styles.icon} />
              <Text style={styles.statText}>{perfilState?.xp ?? '0'}</Text>
            </View>
            <View style={styles.statBox}>
              <Image source={require('../assets/kaleb.png')} style={styles.icon} />
              <Text style={styles.statText}>15</Text>
            </View>
            <View style={styles.statBox}>
              <Image source={require('../assets/curso.png')} style={styles.icon} />
              <Text style={styles.statText}>{perfilState?.cursoandamento === 1 ? 'Lógica' : 'Python'}</Text>
            </View>
          </View>
        </View>
      </View>
  );
};

// Componente CourseCard
const CourseCard = ({ title, progress, status, buttonText, tela, bloqueado }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.courseCard}>
      <View style={styles.courseImageContainer}>
        <BarraProgresso percent={progress} size={90} strokeWidth={6} />
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
            style={[
              styles.actionButton,
              bloqueado && { backgroundColor: '#ccc' } // muda a cor se bloqueado
            ]}
            onPress={() => !bloqueado && navigation.navigate(tela)} // só navega se não bloqueado
            disabled={bloqueado} // desabilita toque
          >
            <Text style={styles.buttonText}>
              {bloqueado ? 'Bloqueado' : buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Componente CoursesList
const CoursesList = ({ andamentoCurso, cursoandamento }) => {
  let andamentoLogica = andamentoCurso[1] || 0;
  const andamentoPython = andamentoCurso[2] || 0;

  let pythonBloqueado = true;

  if (cursoandamento === 2) {
    andamentoLogica = 100; // Lógica concluído
    pythonBloqueado = false; // Python liberado
  } else if (cursoandamento === 1) {
    pythonBloqueado = true;
  }


  return (
    <View style={styles.coursesContainer}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Cursos</Text>
      </View>

    <CourseCard
        title="Lógica de Programação"
        progress={andamentoLogica}
        status={andamentoLogica === 100 ? 'Concluído' : (andamentoLogica === 0 ? 'Não Iniciado' : 'Iniciado')}
        buttonText={andamentoLogica === 100 ? 'Concluído' : 'Iniciar'}
        tela={andamentoLogica === 0 ? 'CursoLogica' : 'TelaCurso'}
        bloqueado={false}
      />

      <CourseCard
        title="Python"
        progress={pythonBloqueado ? 0 : andamentoPython}
        status={pythonBloqueado ? 'Bloqueado' : (andamentoPython === 0 ? 'Não Iniciado' : 'Iniciado')}
        buttonText={pythonBloqueado ? 'Bloqueado' : 'Iniciar'}
        tela={pythonBloqueado ? null : (andamentoPython === 0 ? 'CursoPython' : 'TelaCursoPython')}
        bloqueado={pythonBloqueado}
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
  const [andamentoCurso, setAndamentoCurso] = useState({});
  const [perfil, setPerfil] = useState(null); // <--- adicionar aqui

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <StatsHeader setAndamentoCurso={setAndamentoCurso} setPerfil={setPerfil} />
          <CoursesList andamentoCurso={andamentoCurso} cursoandamento={perfil?.cursoandamento} />
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
    backgroundColor: '#0b1658',
  },
  container: { 
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0b1658',
  },
headerRow: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
    borderColor: '#fff',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
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
