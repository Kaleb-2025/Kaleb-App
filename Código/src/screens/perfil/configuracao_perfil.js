import * as React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { Galindo_400Regular } from "@expo-google-fonts/galindo";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Galindo_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileHeader />
      <ProfilePhoto />
      <ProfileForm />
      <DeleteAccountButton />
      <SaveAccountButton />
    </ScrollView>
  );
}

/* ---------------- HEADER ---------------- */
function ProfileHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/seta.png")} 
        style={styles.backArrow}
      />
       
      <Text style={styles.title}>Perfil</Text>
    </View>
  );
}

/* ---------------- FOTO ---------------- */
function ProfilePhoto() {
  return (
    <View style={styles.photoSection}>
      <Text style={styles.photoTitle}>Foto de Perfil</Text>
      <Image
        source={require("../../assets/logo_hd.png")} 
        style={styles.photo}
      />
      <TouchableOpacity>
        <Text style={styles.changePhoto}>Alterar Skin</Text>
      </TouchableOpacity>
    </View>
  );
}/* ---------------- FORM ---------------- */
function ProfileForm() {
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  return (
    <View style={styles.form}>
      <ProfileFormField
        label="Nome"
        type="default"
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current.focus()}
        inputRef={nameRef}
        editable={true}   
      />
      <ProfileFormField
        label="E-mail"
        type="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        inputRef={emailRef}
        editable={false}  
      />
      <ProfileFormField
        label="Senha"
        type="default"
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={() => console.log("Último campo preenchido")}
        inputRef={passwordRef}
        editable={false}  
      />
    </View>
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
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={false}
        editable={editable}
      />
    </View>
  );
}


/* ---------------- BOTÃO ---------------- */
function DeleteAccountButton() {
  return (
    <TouchableOpacity style={styles.deleteButton}>
      <Text style={styles.deleteText}>Excluir Conta</Text>
    </TouchableOpacity>
  );
}
function SaveAccountButton() {
  return (
    <TouchableOpacity style={styles.saveButton}>
      <Text style={styles.saveText}>Salvar Alterações</Text>
    </TouchableOpacity>
  );
}

/* ---------------- ESTILOS ---------------- */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 100,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "flex-start", 
    width: "100%", 
    marginBottom: 20,
  },
  backArrow: {
    width: 27,
    height: 27,
    resizeMode: "contain",
    marginRight: 16,
    marginLeft: 0, 
  },
  title: {
    marginLeft:-52,
    marginTop:50,
    flex: 1, 
    textAlign: "center", 
    fontSize: 35,
    fontFamily: "Galindo_400Regular",
    fontWeight: "600",
  },
  photoSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  photoTitle: {
    fontSize: 22,
    marginBottom: 12,
  },
  photo: {
      backgroundColor: '#0B1658',
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 8,
  },
  changePhoto: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: "#0A8DFF",
  },
  form: {
    width: "100%",
    marginTop: 20,
    alignItems: "flex-start",
  },
  field: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  label: {
    textAlign: "left",
    marginBottom: 6,
    fontSize: 18,
    fontFamily: "Inter_400Regular",
  },
  input: {
    width: 280,
    height: 40,
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d6d3d1",
    paddingHorizontal: 12,
  },
  deleteButton: {
    marginTop: 30,
    width: 280,
    backgroundColor: "#FF0000",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  deleteText: {
    fontFamily: "Inter_400Regular",
    color: "#fff",
    fontSize: 18,
  },
  
  saveButton: {
    marginTop: 30,
    width: 280,
    backgroundColor: "green",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  saveText: {
    fontFamily: "Inter_400Regular",
    color: "#fff",
    fontSize: 18,
  },
});
