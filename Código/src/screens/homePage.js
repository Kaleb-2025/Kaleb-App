import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

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

const StatsHeader = () => {
  return (
    <View style={styles.statsHeader}>
      <View style={styles.statItem}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c032681c1c5654daf16e97d0a148b341dae808bc" }}
          style={styles.statIcon}
        />
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View>

      <View style={styles.statItem}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fde0415441b903316c19e55ea5dd3c71a9ab891" }}
          style={styles.statIcon}
        />
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View>

      <View style={styles.statItem}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fa4a2f4e07b3a79da8a77aff5adc6e718556f8f" }}
          style={styles.statIcon}
        />
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View>

      <View style={styles.statItemNoBorder}> {/* Ícone de pesquisa sem borda */}
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4987ee9e912bad68f5067d74441d6d730ed47a9c" }}
          style={styles.statIcon}
        />
      </View>
    </View>
  );
};

// Componente CourseCard
const CourseCard = ({ title, progress, status, buttonText }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.courseCard}>
      <View style={styles.courseImageContainer}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/47a120d4f3d0df1a771fd61bcf1fbd41044695bc" }}
          style={styles.courseImage}
        />
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

          <TouchableOpacity style={styles.actionButton}
          onPress={() => navigation.navigate('TelaCurso')} // adicionado só p testar -> mudar depois
          >
          
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Componente CoursesList
const CoursesList = () => {
  return (
    <View style={styles.coursesContainer}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Cursos</Text>
      </View>

      <CourseCard
        title="Lógica de Programação"
        progress={0}   status="Não iniciado"
        buttonText="Iniciar"
      />

      <CourseCard
        title="Python"
        progress={0}
        status="Não iniciado"
        buttonText="Iniciar"
      />

      <CourseCard
        title="Java"
        progress={0}
        status="Não iniciado"
        buttonText="Iniciar"
      />
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

     <TouchableOpacity style={styles.navItem}
      onPress={() => navigation.navigate('TelaPerfil')}>
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
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <StatsHeader />
          <CoursesList />
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
  padding: 12, // reduzido para deixar a barra menor
  backgroundColor: '#8AEAFF'
},
statItem: {
  flexDirection: 'row', // Ícone e número lado a lado
  alignItems: 'center', // Centraliza verticalmente
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
  marginRight: 8 // Espaço entre ícone e texto
},
statValueContainer: {
  backgroundColor: '#f3f4f6',
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
    elevation: 2
  },
  courseImageContainer: {
    marginRight: 16,
    alignItems: 'center'
  },
  courseImage: {
    width: 64,
    height: 64
  },
  courseProgress: {
    marginTop: 4,
    color: '#2563eb',
    fontWeight: 'bold',
    textAlign: 'center'
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
    color: '#1f2937'
  },
  courseFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statusBadge: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4
  },
  statusText: {
    color: '#4b5563'
  },
  actionButton: {
    backgroundColor: '#0B1658',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50
  },
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
  }
});

