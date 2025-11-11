import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../../App';

// ================== MASCOTE ==================
const skinsMap = {
  "Ovinho": require('../../assets/skins/ovinho.png'),
  "Baby Kaleb": require('../../assets/skins/babykaleb.png'),
  "Casca Quebrada": require('../../assets/skins/casca.png'),
  "Kaleb": require('../../assets/logo.png'),
  "Pythonete": require('../../assets/skins/pythonete_01.png'),
  "Baby Kaleb Nerd": require('../../assets/skins/baby_kalebNerd.png'),
  "Kaleb Nerd": require('../../assets/skins/kalebNerd.png'),
};

function Mascote({ skin }) {
  return (
    <View style={mascoteStyles.mascote}>
      <Image
        source={skinsMap[skin] || skinsMap["Ovinho"]} 
        style={mascoteStyles.avatar}
        resizeMode="contain"
      />
    </View>
  );
}

const mascoteStyles = StyleSheet.create({
  mascote: {
    backgroundColor: '#0B1658',
    flex: 1,
  },
  avatar: {
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: -10,
  },
});

// ================== SKIN CARD ==================
function SkinCard({ imageSrc, title, selected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          skinCardStyles.skinCard,
          selected
            ? { borderWidth: 2, borderColor: '#FFBE0A' }
            : { borderWidth: 0 },
        ]}>
        <View style={skinCardStyles.imageWrapper}>
          <Image
            source={imageSrc}
            style={skinCardStyles.skinImage}
            resizeMode="contain"
          />
        </View>
        <Text style={skinCardStyles.skinTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const skinCardStyles = StyleSheet.create({
  skinCard: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 16,
    padding: 8,
  },
  imageWrapper: {
    width: 110,
    height: 110,
    borderRadius: 16,
    backgroundColor: '#0b1658',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  skinImage: {
    width: '70%',
    height: '70%',
  },
  skinTitle: {
    color: '#0b1658',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
    textAlign: 'center',
  },
});

// ================== SKINS SECTION ==================
function SkinsSection({ onChangeSkin }) {
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [conquistas, setConquistas] = useState([]); 

  const toggleSelect = (skinName) => {
    setSelectedSkin(selectedSkin === skinName ? null : skinName);
  };

  useEffect(() => {
  const carregarConquistas = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from("conquistas_desbloqueadas")
      .select("conquista")    // só precisamos do id
      .eq("idusuario", user.id);

    if (error) {
      console.log("Erro:", error.message);
    } else {
      // pega só os ids em um array simples, ex: [4, 5]
      const lista = data.map(item => item.conquista);
      setConquistas(lista);
    }

    setLoading(false);
  };

  carregarConquistas();
}, []);

  const isUnlocked = (id) => conquistas.includes(id);

async function toggleOculos() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { data: perfil, error } = await supabase
    .from("info_user")
    .select("skin_atual")
    .eq("idusuario", user.id)
    .single();

  if (error) return;

  const skinAtual = perfil.skin_atual;

  if (skinAtual.endsWith(" Nerd")) {
    const normal = skinAtual.replace(" Nerd", "");

    await supabase
      .from("info_user")
      .update({ skin_atual: normal })
      .eq("idusuario", user.id);

    setSelectedSkin(normal);
    onChangeSkin();  
    return;
  }

  const nerd = skinAtual + " Nerd";

  await supabase
    .from("info_user")
    .update({ skin_atual: nerd })
    .eq("idusuario", user.id);

  setSelectedSkin(nerd);
  onChangeSkin();
}


  return (
    <View style={skinsSectionStyles.skinsContent}>
      {/* Skins Comuns */}
      <Text style={skinsSectionStyles.sectionTitle}>Skins Comuns</Text>
      <Text style={skinsSectionStyles.commonDescription}>
        ✨ Desbloqueadas com acúmulo de XP
      </Text>

      <View style={skinsSectionStyles.skinsGrid}>
        <SkinCard
          imageSrc={require('../../assets/skins/ovinho.png')}
          title="Ovinho"
          selected={selectedSkin === 'Ovinho'}
          onPress={() => toggleSelect('Ovinho')}
        />
        <SkinCard
          imageSrc={require('../../assets/skins/babykaleb.png')}
          title="Baby Kaleb"
          selected={selectedSkin === 'Baby Kaleb'}
          onPress={() => toggleSelect('Baby Kaleb')}
        />
        <SkinCard
          imageSrc={require('../../assets/skins/casca.png')}
          title="Casca Quebrada"
          selected={selectedSkin === 'Casca Quebrada'}
          onPress={() => toggleSelect('Casca Quebrada')}
        />
        <SkinCard
          imageSrc={require('../../assets/logo.png')}
          title="Kaleb"
          selected={selectedSkin === 'Kaleb'}
          onPress={() => toggleSelect('Kaleb')}
        />
      </View>

      {/* Skins Raras */}
      <Text style={skinsSectionStyles.rareSectionTitle}>
        Skins <Text style={skinsSectionStyles.rareHighlight}>Raras</Text>
      </Text>
      <Text style={skinsSectionStyles.rareDescription}>
        🔒 Desbloqueadas ao terminar os cursos
      </Text>

      <View style={skinsSectionStyles.rareGrid}>
        {/* Pythonete */}
        <TouchableOpacity
          style={skinsSectionStyles.rareWrapper}
          activeOpacity={isUnlocked(5) ? 0.8 : 1}
          disabled={!isUnlocked(5)}
          onPress={() => isUnlocked(5) && toggleSelect('Pythonete')}
        >
          <View
            style={[
              skinsSectionStyles.rareCard,
              selectedSkin === 'Pythonete' && { borderColor: '#FFBE0A' },
            ]}
          >
            <Image
              source={require('../../assets/skins/pythonete_01.png')}
              style={skinsSectionStyles.rareImage}
              resizeMode="contain"
            />

            {/* Mostra cadeado apenas se estiver bloqueado */}
            {!isUnlocked(5) && (
              <>
                <View pointerEvents="none" style={skinsSectionStyles.overlay} />
                <Image
                  source={require('../../assets/skins/cadeado_icon.png')}
                  style={skinsSectionStyles.lockIcon}
                />
              </>
            )}
          </View>
          <Text style={skinsSectionStyles.rareName}>Pythonete</Text>
        </TouchableOpacity>

        {/* Acessório Nerd */}
        <TouchableOpacity
          style={skinsSectionStyles.rareWrapper}
          activeOpacity={isUnlocked(4) ? 0.8 : 1}
          disabled={!isUnlocked(4)}
          onPress={() => isUnlocked(4) && toggleOculos()}
        >
          <View
            style={[
              skinsSectionStyles.rareCard,
              selectedSkin === 'Acessório Nerd' && { borderColor: '#FFBE0A' },
            ]}
          >
            <Image
              source={require('../../assets/skins/acessorio.png')}
              style={skinsSectionStyles.rareImage}
              resizeMode="contain"
            />

            {/* Cadeado se estiver bloqueado */}
            {!isUnlocked(4) && (
              <>
                <View pointerEvents="none" style={skinsSectionStyles.overlay} />
                <Image
                  source={require('../../assets/skins/cadeado_icon.png')}
                  style={skinsSectionStyles.lockIcon}
                />
              </>
            )}
          </View>
          <Text style={skinsSectionStyles.rareName}>Acessório Nerd</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const skinsSectionStyles = StyleSheet.create({
  skinsContent: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
    alignSelf: 'center',
  },
  commonDescription: {
    fontSize: 15,
    color: '#646464',
    textAlign: 'center',
    marginBottom: 30,
  },
  skinsGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  // SKINS RARAS
  rareSectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'center',
    color: '#000',
  },
  rareHighlight: {
    color: 'rgba(255, 136, 10, 1)',
    fontWeight: 'bold',
  },
  rareDescription: {
    fontSize: 15,
    color: '#646464',
    textAlign: 'center',
    marginBottom: 15,
  },
  rareGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  rareWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  rareCard: {
    width: 150,
    height: 130,
    backgroundColor: '#fff', // antes era '#2F2F2F'
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent', // fica invisível até clicar
  },
  rareImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  lockIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    tintColor: '#FFBE0A',
  },
  rareName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginTop: 6,
  },
});

// ================== STATS MENU ==================
function StatsMenu({ perfil }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={menuStyles.containerHeader}>
      <View style={menuStyles.header}>
        <View style={menuStyles.headerRow}>
          <TouchableOpacity
            style={menuStyles.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/seta_branca.png')}
              style={menuStyles.setaImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={menuStyles.statsRow}>
            <View style={menuStyles.statBox}>
              <Image
                source={require('../../assets/estrela.png')}
                style={menuStyles.icon}
              />
              <Text style={menuStyles.statText}>{perfil?.xp ?? '0'}</Text>
            </View>
            <View style={menuStyles.statBox}>
              <Image
                source={require('../../assets/kaleb.png')}
                style={menuStyles.icon}
              />
              <Text style={menuStyles.statText}>15</Text>
            </View>
            <View style={menuStyles.statBox}>
              <Image
                source={require('../../assets/curso.png')}
                style={menuStyles.icon}
              />
              <Text style={menuStyles.statText}>1</Text>
            </View>
          </View>
          <View style={{ width: 38 }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const menuStyles = StyleSheet.create({
  containerHeader: { width: '100%', backgroundColor: '#0b1658' },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: '#0b1658',
  },
  headerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  backButton: { padding: 6, marginRight: 5 },
  setaImg: { width: 28, height: 28 },
  statsRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 3,
  },
  icon: { width: 18, height: 18, marginRight: 4 },
  statText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});

// ================== TELA SKIN ==================
function TelaSkin() {
  const [perfil, setPerfil] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    buscarDadosPerfil();
  }, [refetch]);

  async function buscarDadosPerfil() {
    const { data: userInfo, error: userError } = await supabase.auth.getUser();
    if (userError || !userInfo?.user?.id) return;

    const uid = userInfo.user.id;

    const { data: perfilData } = await supabase
      .from("info_user")
      .select("*")
      .eq("idusuario", uid)
      .single();

    setPerfil(perfilData);
  }

  return (
    <ScrollView style={telaSkinStyles.skinScreen}>
      <StatsMenu perfil={perfil} />
      <Mascote skin={perfil?.skin_atual} />
      <SkinsSection onChangeSkin={() => setRefetch(!refetch)} />
    </ScrollView>
  );
}

const telaSkinStyles = StyleSheet.create({
  skinScreen: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 480,
    flex: 1,
  },
});

export default TelaSkin;
