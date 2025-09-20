import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Mascote() {
  return (
   <View style={mascoteStyles.mascote}>
      <View style={mascoteStyles.avatarWrapper}>
        <Image
          source={{ uri: "https://api.builder.io/api/v1/image/assets/TEMP/e7ba94c882f5e99e152ac82d3caca3b8421d99f4?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea" }}
          style={mascoteStyles.avatar}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const mascoteStyles = StyleSheet.create({
   mascote:{
    backgroundColor: '#0B1658',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 0, 
   },
    avatarWrapper: {
    backgroundColor: '#0B1658',
    padding: 80,
  },
  avatar: {
    width: 250,
    height: 250,
  },
});

function UserProfile() {
  return (
    <View style={userProfileStyles.userProfile}>
      <Image
        source={{ uri: "https://api.builder.io/api/v1/image/assets/TEMP/bba24e956901abfc925c4fb3c58d7bf328dedf7d?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea" }}
        style={userProfileStyles.avatar}
      />
      <Text style={userProfileStyles.username}>Kaleb Silva</Text>
      <Text style={userProfileStyles.userLevel}>iniciante</Text>
    </View>
  );
}

const userProfileStyles = 
StyleSheet.create({
  userProfile: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 430, 
  },

  username: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'Galindo',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  userLevel: {
    color: 'rgba(100, 100, 100, 1)',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter',
  },
});

function ProgressTrack() {
  return (
    <View style={progressTrackStyles.progressSection}>
      <View style={progressTrackStyles.trackContainer}>
        <View style={progressTrackStyles.trackBar}>
          <View style={progressTrackStyles.trackFill} />
        </View>
        <Image
          source={{
            uri: 'https://api.builder.io/api/v1/image/assets/TEMP/4f2c245ab4e8ba748290e7dfc9b3ce0d3e82c873?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
          }}
          style={progressTrackStyles.progressIndicator}
        />
      </View>
    </View>
  );
}

const progressTrackStyles = StyleSheet.create({
  progressSection: {
    alignSelf: 'stretch',
    position: 'absolute',
    zIndex: 10,
    top:520, // posição fixa
    width: '100%',
    paddingHorizontal: 18,
  },
  trackContainer: {
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  trackBar: {
    zIndex: 0,
    minWidth: 240,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 4,
    alignSelf: 'center',
  },
  trackFill: {
    borderRadius: 8,
    backgroundColor: '#e8def8',
    height: 4,
  },
  progressIndicator: {
    aspectRatio: 1,
    width: 4,
    height: 4,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: '50%',
    transform: [{ translateY: -2 }],
  },
});
function SkinCard({ imageSrc, title, selected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          skinCardStyles.skinCard,
            selected
          ? { borderWidth: 2, borderColor: '#FFBE0A',  }
            : { borderWidth: 0 },
        ]}
      >
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
    marginBottom: 24,
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

function SkinsSection() {
  const [selectedSkin, setSelectedSkin] = useState(null);

  return (
    <View style={skinsSectionStyles.skinsContent}>
      <View style={skinsSectionStyles.commonSkinsSection}>
        <Text style={skinsSectionStyles.sectionTitle}>
          {'\n\n'}
          {'\n\n'}Skins Comuns
        </Text>
        <View style={skinsSectionStyles.sectionDescription}>
          <Image
            source={{
              uri: 'https://api.builder.io/api/v1/image/assets/TEMP/8e9cd8c1d76a79dda5292d18b67e637981082070?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
            }}
            style={skinsSectionStyles.descriptionIcon}
          />
          <Text style={skinsSectionStyles.descriptionText}>Desbloqueadas com acúmulo de xp</Text>
        </View>

        <View style={skinsSectionStyles.skinsGrid}>
          <View style={skinsSectionStyles.skinColumn}>
            <SkinCard 
              imageSrc={require("../../assets/skins/ovinho.png")} 
              title="Ovinho" 
              selected={selectedSkin === 'Ovinho'}
              onPress={() => setSelectedSkin('Ovinho')}
            />
            <View style={skinsSectionStyles.skinSpacing}>
              <SkinCard
                imageSrc={require("../../assets/skins/babykaleb.png")} 
                title="Baby Kaleb"
                selected={selectedSkin === 'Baby Kaleb'}
                onPress={() => setSelectedSkin('Baby Kaleb')}
              />
            </View>
          </View>

          <View style={skinsSectionStyles.skinColumn}>
            <SkinCard
              imageSrc={require("../../assets/skins/casca.png")} 
              title="Casca Quebrada"
              selected={selectedSkin === 'Casca Quebrada'}
              onPress={() => setSelectedSkin('Casca Quebrada')}
            />
            <View style={skinsSectionStyles.skinSpacing}>
              <SkinCard
                 imageSrc={require("../../assets/logo.png")}
                title="Kaleb"
                selected={selectedSkin === 'Kaleb'}
                onPress={() => setSelectedSkin('Kaleb')}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={skinsSectionStyles.rareSkinsSection}>
        <Text style={skinsSectionStyles.rareSectionTitle}>
          Skins <Text style={skinsSectionStyles.rareHighlight}>Raras</Text>
        </Text>
        <Text style={skinsSectionStyles.rareDescription}>Desbloqueadas ao terminar os cursos</Text>
      </View>

      <Image
        source={{
          uri: 'https://api.builder.io/api/v1/image/assets/TEMP/82662f9832d8d6a3b216516bc48a808bcc645556?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
        }}
        style={skinsSectionStyles.rareSkinsImage}
      />
    </View>
  );
}

const skinsSectionStyles = StyleSheet.create({
  skinsContent: {
    position: 'relative',
    width: '100%',
    zIndex: 10,
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  commonSkinsSection: {
   top: 470,
  },
  
  sectionTitle: {
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: 26,
    marginBottom: 15,
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  sectionDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 26,
    marginBottom: 51,
  },
  descriptionIcon: {
    aspectRatio: 1.25,
    width: 15,
  },
  descriptionText: {
    color: 'rgba(100, 100, 100, 1)',
    fontSize: 15,
    fontFamily: 'Inter',
    flex: 1,
    marginLeft: 7,
  },
  skinsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 0,
  },
  skinColumn: {
    flex: 1,
    alignItems: 'center',
  },
  skinSpacing: {
    marginTop: 24,
  },
  rareSkinsSection: {
    fontWeight: 'bold',
    top: 440,
  },
  rareSectionTitle: {
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: 20,
    marginBottom: 18,
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '600',
    top: 80,
  },
  rareHighlight: {
    fontWeight: 'bold',
    color: 'rgba(255, 136, 10, 1)',
  },
  rareDescription: {
    color: 'rgba(100, 100, 100, 1)',
    textAlign: 'center',
    marginLeft: 25,
    marginBottom: 18,
    fontSize: 15,
    fontFamily: 'Inter',
    top: 80,
  },
  rareSkinsImage: {
    aspectRatio: 1.91,
    width: '100%',
    maxWidth: 372,
    alignSelf: 'flex-end',
    top: 530,
    marginBottom: 180,
  },
});

function StatsMenu({ perfil }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={menuStyles.containerHeader}>
    <View style={menuStyles.statsHeader}>
            <TouchableOpacity
          style={menuStyles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../../assets/seta_branca.png')}
            style={menuStyles.setaImg}
            resizeMode="contain"
          />
        </TouchableOpacity>

      <View style={menuStyles.statItem}>
        <Image
          source={{ uri: "https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/home//star.png" }}
          style={menuStyles.icon}
        />
        <View style={menuStyles.statValueContainer}>
          <Text style={menuStyles.statValue}>{perfil?.xp ?? '0'}</Text>
        </View>
      </View>

      <View style={menuStyles.statItem}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fde0415441b903316c19e55ea5dd3c71a9ab891" }}
          style={menuStyles.statIcon}
        />
        <View style={menuStyles.statValueContainer}>
          <Text style={menuStyles.statValue}>0</Text>
        </View>
      </View>

      <View style={menuStyles.statItem}>
        <Image
          source={{ uri: "https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/home//python-icon.png" }}
          style={menuStyles.statIcon}
        />
        <View style={menuStyles.statValueContainer}>
          <Text style={menuStyles.statValue}>0</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

function TelaSkin() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
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
    <ScrollView style={telaSkinStyles.skinScreen}>
      <View style={telaSkinStyles.mainContent}>
        {/* MENU FIXO NO TOPO */}
        <StatsMenu perfil={perfil} />
        <View style={telaSkinStyles.contentOverlay}>
          <Mascote/>
          <UserProfile />
          <ProgressTrack />
          <SkinsSection />
        </View>
      </View>

      <View style={telaSkinStyles.spacer} />
    </ScrollView>
  );
}

const telaSkinStyles = StyleSheet.create({
  skinScreen: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 18,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'stretch',
    alignSelf: 'center',
    flex: 1,
  },
  mainContent: {
    flexDirection: 'column',
    position: 'relative',
    minHeight: 1500,
    width: '100%',
    alignItems: 'center',
  },
  contentOverlay: {
    position: 'relative',
    zIndex: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingTop: 0, 
  },
  spacer: {
    minHeight: 111,
    width: '100%',
  },
});

const menuStyles = StyleSheet.create({
  containerHeader: { 
    width: '100%',
    backgroundColor: '#0b1658' 
  },
   statsHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#0b1658' 
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: '#fff',
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
    color: '#fff', 
    fontWeight: '500' 
  },
  icon: { 
    width: 24, 
    height: 24,
    marginRight: 4 
  },
  backButton: {
    zIndex: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setaImg: {
    width: 24,
    height: 24,
  },

});

export default TelaSkin;
