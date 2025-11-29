import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const videoSource =
  'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/splash/intro.mp4';

export default function VideoScreen() {
  const navigation = useNavigation();
  const player = useVideoPlayer('https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/splash/intro.mp4', (player) => {
    player.play();
    player.loop = false;
    player.timeUpdateEventInterval = 1000;
  });

  useEffect(() => {
    const handlePlayToEnd = () => {
      navigation.navigate('CadastroInicial');
    };

    const subscription = player.addListener('playToEnd', handlePlayToEnd);

    return () => {
      subscription.remove();
    };
  }, [player]);
  
  return (
    <View style={styles.container}>
      <VideoView
        style={StyleSheet.absoluteFill}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1658',
  },
});
