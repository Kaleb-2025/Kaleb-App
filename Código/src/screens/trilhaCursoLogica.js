import React, { useState } from 'react'; 
import {SafeAreaView,View,Text,StyleSheet,StatusBar,TouchableOpacity,Image,} from 'react-native';
import colors from '../constants/colors';
import textos from '../constants/textos';
import BarraProgresso from '../components/trilhaCursoLogica/barraProcesso';
import TrilhaCurso from '../components/trilhaCursoLogica/trilhaCurso';
import MateriaisCurso from '../components/trilhaCursoLogica/materiaisCurso';

const TelaCurso = () => {
  const [abaAtiva, setAbaAtiva] = useState('trilha');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      {/* Cabeçalho com seta e indicadores */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={require('../assets/seta_branca.png')}
              style={styles.setaImg}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Image source={require('../assets/estrela.png')} style={styles.icon} />
              <Text style={styles.statText}>3598</Text>
            </View>
            <View style={styles.statBox}>
              <Image source={require('../assets/kaleb.png')} style={styles.icon} />
              <Text style={styles.statText}>15</Text>
            </View>
            <View style={styles.statBox}>
              <Image source={require('../assets/curso.png')} style={styles.icon} />
              <Text style={styles.statText}>1</Text>
            </View>
          </View>

          <View style={{ width: 38 }} />
        </View>

        {/* Logo do Python */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logica_logo1.png')}
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
          <BarraProgresso percent={60} size={86} strokeWidth={3} />
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
