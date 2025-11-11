import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Configuracoes({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Botão de fechar */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('TelaPerfil')}>
        <Ionicons name="close" size={32} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Configurações</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('Conta')}>
          <Text style={styles.optionText}>Conta</Text>
          <Ionicons name="chevron-forward" size={20} color="#222" />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('Privacidade')}>
          <Text style={styles.optionText}>Privacidade</Text>
          <Ionicons name="chevron-forward" size={20} color="#222" />
        </TouchableOpacity>

        <View style={styles.divider} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingHorizontal: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 32,
    fontFamily: 'sans-serif',
  },
  optionsContainer: {
    marginTop: 16,
    width: '100%',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  optionText: {
    fontSize: 20,
    fontWeight: '400',
  },
  divider: {
    height: 2,
    backgroundColor: '#E9DDF6',
    marginHorizontal: 16,
    borderRadius: 2,
    marginBottom: 0,
  },
});
