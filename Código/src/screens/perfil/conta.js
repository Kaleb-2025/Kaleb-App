// Conta.js
import React, {useState, useEffect} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,ScrollView,Dimensions, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../../App';

const { width } = Dimensions.get('window');

export default function Conta() {
  const navigation = useNavigation();
  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      const { data: { user }, error } = await supabase.auth.getUser(); 
      if (error) {
        console.log('Erro ao buscar usuário:', error.message);
      } else if (user) {
        setNome(user.user_metadata.full_name || '');  // atualiza o estado do pai
        setEmail(user.email || '');
      }
    };
    carregarDados();
  }, [setNome]);

  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  {/* Função para salvar alterações*/}
  const salvarAlteracao = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data: { full_name: Nome }
    });

    if (error) {
      Alert.alert("Erro ao atualizar!", error.message);
    } else {
      navigation.navigate('TelaPerfil');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabeçalho com seta e título centralizado */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Configuracoes')} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>Conta</Text>

          {/* Espaço invisível para equilibrar o layout */}
          <View style={{ width: 32 }} />
        </View>

        {/* Foto de perfil */}
        <Text style={styles.subtitle}>Foto de Perfil</Text>

        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../assets/fotoperfil.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('TelaSkin')}>
          <Text style={styles.changeSkin}>Alterar Skin</Text>
        </TouchableOpacity>

        {/* Campos somente leitura */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <View style={styles.readonlyBox}>
            <ProfileFormField
              type="default"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              inputRef={nameRef}
              value={Nome}    
              onChangeText={setNome}
              editable={true}   
            />
          </View>

          <Text style={styles.label}>E-mail</Text>
          <View style={styles.readonlyBox}>
             <ProfileFormField
              type="default"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              inputRef={emailRef}
              value={Email}   
              editable={false}  
            />
          </View>

          <Text style={styles.label}>Senha</Text>
          <View style={styles.readonlyBox}>
            <Text style={styles.readonlyText}>••••••••</Text>
          </View>

          {/* Recuperar senha */}
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.recoverText}>Recuperar senha</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Excluir Conta */}
        <TouchableOpacity style={styles.deleteButton} activeOpacity={0.8}>
          <Text style={styles.deleteText}>Excluir Conta</Text>
        </TouchableOpacity>

        {/* Botão Salvar Mudanças */}
         <TouchableOpacity style={styles.saveButton} onPress={salvarAlteracao}>
          <Text style={styles.saveText}>Salvar Alterações</Text>
        </TouchableOpacity>

        {/* Espaço inferior */}
        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
function ProfileFormField({
  label,
  type,
  secureTextEntry = false,
  returnKeyType,
  onSubmitEditing,
  inputRef,
  editable = true, 
  value,
  onChangeText,
}) {
  return (
    <View style={styles.field}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
    marginBottom: 30,
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

  subtitle: {
    fontSize: width * 0.045,
    fontWeight: '600',
    marginBottom: 12,
  },

  profileImageContainer: {
    marginBottom: 8,
    borderRadius: 999,
    overflow: 'hidden',
  },

  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 999,
    backgroundColor: '#1E2A78',
  },

  changeSkin: {
    color: '#007BFF',
    fontWeight: '500',
    marginBottom: 28,
    fontSize: width * 0.04,
  },

  inputContainer: {
    width: '85%',
    marginTop: 8,
  },

  label: {
    fontSize: width * 0.038,
    fontWeight: '600',
    marginBottom: 6,
  },

  readonlyBox: {
    backgroundColor: '#eee',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: width * 0.11,
    justifyContent: 'center',
    marginBottom: 16,
  },

  readonlyText: {
    fontSize: width * 0.04,
    color: '#333',
  },

  recoverText: {
    fontSize: width * 0.035,
    color: '#007BFF',
    fontWeight: '500',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },

  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 12,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  deleteText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: width * 0.045,
  },
   saveButton: {
    backgroundColor: "green",
    borderRadius: 25,
    paddingVertical: 12,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  saveText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: width * 0.045,
  },
});
