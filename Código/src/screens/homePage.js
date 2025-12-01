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

// ================== HEADER ==================
const StatsHeader = ({ setAndamentoCurso, setPerfil }) => {
  const [perfilState, setPerfilState] = useState(null);

  useEffect(() => {
    buscarProgressoCurso();
    buscarDadosPerfil();
  }, []);

  async function buscarDadosPerfil() {
    const { data: userInfo, error: userError } = await supabase.auth.getUser();
    if (userError || !userInfo?.user?.id) return;

    const uid = userInfo.user.id;
    const { data: perfilData, error: perfilError } = await supabase
      .from('info_user')
      .select('xp, cursoandamento')
      .eq('idusuario', uid)
      .single();

    if (!perfilError) {
      setPerfil(perfilData);
      setPerfilState(perfilData);
    }
  }

  async function buscarProgressoCurso() {
    const { data: userData } = await supabase.auth.getUser();
    const uid = userData?.user?.id;
    if (!uid) return;

    const { data: capitulos } = await supabase
      .from('capitulos')
      .select('idcapitulo, curso');

    const { data: progresso } = await supabase
      .from('progresso_capitulo')
      .select('idcapitulo, completou')
      .eq('idusuario', uid);

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

    const percentuais = {};
    Object.keys(cursosProgresso).forEach(cursoId => {
      const { total, concluidos } = cursosProgresso[cursoId];
      percentuais[cursoId] =
        total > 0 ? parseFloat(((concluidos / total) * 100).toFixed(1)) : 0;
    });

    setAndamentoCurso(percentuais);
  }
  const [presenca, setPresenca] = useState("");
  useEffect(() => {
    const buscarPresenca = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("progresso_capitulo")
        .select("data_completado")
        .eq("idusuario", user.id)
        .order("data_completado", { ascending: false })
        .limit(1);

      if (error) {
        console.log(error);
        return;
      }

      if (data && data.length > 0) {
        const ultimaData = new Date(data[0].data_completado);
        setPresenca(formatarDiaSemana(ultimaData));
      } else {
        setPresenca(0);
      }
    };

    buscarPresenca();
  }, []);

  const formatarDiaSemana = (data) => {
    const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    return dias[data.getDay()];
  };

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
            <Text style={styles.statText}>{presenca}</Text>
          </View>
          <View style={styles.statBox}>
            <Image source={require('../assets/curso.png')} style={styles.icon} />
            <Text style={styles.statText}>
              {perfilState?.cursoandamento === 1 ? 'Lógica' : 'Python'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// ================== COURSE CARD ==================
const CourseCard = ({ title, progress, status, buttonText, tela, bloqueado }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.courseCard}>
      <View style={styles.courseImageContainer}>
        <BarraProgresso percent={progress} size={90} strokeWidth={6} />
      </View>
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{title}</Text>
        <View style={styles.courseFooter}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
          <TouchableOpacity
            style={[styles.actionButton, bloqueado && { backgroundColor: '#ccc' }]}
            onPress={() => !bloqueado && navigation.navigate(tela)}
            disabled={bloqueado}
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

// ================== COURSES LIST ==================
const CoursesList = ({ andamentoCurso, cursoandamento }) => {
  let andamentoLogica = andamentoCurso[1] || 0;
  const andamentoPython = andamentoCurso[2] || 0;
  let pythonBloqueado = cursoandamento !== 2;

  if (cursoandamento === 2) andamentoLogica = 100;

  return (
    <View style={styles.coursesContainer}>
      <Text style={styles.sectionTitle}>Cursos</Text>

      <CourseCard
        title="Lógica de Programação"
        progress={andamentoLogica}
        status={
          andamentoLogica === 100
            ? 'Concluído'
            : andamentoLogica === 0
              ? 'Não Iniciado'
              : 'Iniciado'
        }
        buttonText={andamentoLogica === 100 ? 'Concluído' : 'Iniciar'}
        tela={andamentoLogica === 0 ? 'CursoLogica' : 'TelaCurso'}
        bloqueado={false}
      />

      <CourseCard
        title="Python"
        progress={pythonBloqueado ? 0 : andamentoPython}
        status={
          pythonBloqueado
            ? 'Bloqueado'
            : andamentoPython === 0
              ? 'Não Iniciado'
              : 'Iniciado'
        }
        buttonText={pythonBloqueado ? 'Bloqueado' : 'Iniciar'}
        tela={
          pythonBloqueado
            ? null
            : andamentoPython === 0
              ? 'CursoPython'
              : 'TelaCursoPython'
        }
        bloqueado={pythonBloqueado}
      />
    </View>
  );
};

// ================== NOVO FOOTER ==================
const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/iconhome_preto.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MeusCursos')}>
        <Image source={require('../assets/iconcursos.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Cursos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TelaPerfil')}>
        <Image source={require('../assets/iconusuario.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

// ================== MAIN SCREEN ==================
export default function Home() {
  const [andamentoCurso, setAndamentoCurso] = useState({});
  const [perfil, setPerfil] = useState(null);

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

// ================== STYLES ==================
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#f9fafb' },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0b1658',
  },
  headerRow: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 },
  statsRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
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
  icon: { width: 18, height: 18, marginRight: 4 },
  statText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },

  // COURSES
  courseCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  courseImageContainer: { marginRight: 16, alignItems: 'center' },
  courseInfo: { flex: 1 },
  courseTitle: { fontSize: 18, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 },
  courseFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  statusBadge: { backgroundColor: '#f3f4f6', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 4 },
  statusText: { color: '#4b5563' },
  actionButton: { backgroundColor: '#0B1658', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 50 },
  buttonText: { color: 'white', fontWeight: '500' },
  coursesContainer: { padding: 16 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#1f2937', marginBottom: 16 },

  // NOVO FOOTER
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  navItem: { alignItems: 'center' },
  navIcon: { width: 30.5, height: 28, marginBottom: 4 },
  navText: { fontSize: 12, color: '#4b5563' },
});
