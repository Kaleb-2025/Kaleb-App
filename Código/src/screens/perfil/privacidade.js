// privacidade.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function TermoPrivacidade() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>Privacidade</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Conteúdo */}
        <Text style={styles.sectionTitle}>Política de Privacidade</Text>

        <Text style={styles.paragraph}>
          Este aplicativo respeita a sua privacidade e se compromete a proteger
          seus dados pessoais. Todas as informações coletadas são utilizadas
          apenas para melhorar sua experiência de uso, personalizar conteúdos e
          garantir o bom funcionamento dos recursos oferecidos.
        </Text>

        <Text style={styles.sectionTitle}>Coleta de Dados</Text>
        <Text style={styles.paragraph}>
          Os dados coletados podem incluir informações como nome, e-mail e
          progresso no curso. Nenhum dado sensível é solicitado, e todas as
          informações são armazenadas de forma segura.
        </Text>

        <Text style={styles.sectionTitle}>Uso das Informações</Text>
        <Text style={styles.paragraph}>
          As informações coletadas são usadas exclusivamente para:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Personalizar o conteúdo exibido;</Text>
          <Text style={styles.listItem}>• Salvar o progresso de aprendizagem;</Text>
          <Text style={styles.listItem}>
            • Melhorar o desempenho e a experiência do usuário;
          </Text>
          <Text style={styles.listItem}>
            • Enviar notificações relacionadas ao uso do app (quando permitido).
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Compartilhamento</Text>
        <Text style={styles.paragraph}>
          Nenhuma informação pessoal é compartilhada com terceiros, salvo quando
          exigido por lei ou mediante autorização do próprio usuário.
        </Text>

        <Text style={styles.sectionTitle}>Segurança</Text>
        <Text style={styles.paragraph}>
          Adotamos medidas técnicas e administrativas adequadas para proteger
          seus dados contra acesso não autorizado, destruição ou alteração.
        </Text>

        <Text style={styles.sectionTitle}>Alterações nesta Política</Text>
        <Text style={styles.paragraph}>
          Reservamo-nos o direito de atualizar esta Política de Privacidade a
          qualquer momento. Alterações significativas serão comunicadas dentro
          do próprio aplicativo.
        </Text>

        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.paragraph}>
          Em caso de dúvidas sobre nossa política de privacidade, entre em
          contato conosco pelo e-mail:{' '}
          <Text style={{ fontWeight: '600' }}>suporte@appkaleb.com</Text>.
        </Text>

        {/* Espaço inferior */}
        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },

  backButton: {
    padding: 6,
  },

  title: {
    fontSize: width * 0.07,
    fontWeight: '900',
    textAlign: 'center',
    flex: 1,
  },

  sectionTitle: {
    width: '85%',
    fontSize: width * 0.045,
    fontWeight: '700',
    color: '#111',
    marginTop: 18,
    marginBottom: 6,
    textAlign: 'left',
  },

  paragraph: {
    width: '85%',
    fontSize: width * 0.04,
    lineHeight: 22,
    color: '#333',
    textAlign: 'justify',
  },

  list: {
    width: '85%',
    marginTop: 6,
  },

  listItem: {
    fontSize: width * 0.04,
    color: '#444',
    marginBottom: 4,
    lineHeight: 22,
  },
});
