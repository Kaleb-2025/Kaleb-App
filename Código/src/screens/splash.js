import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Video } from "expo-av";

export default function App() {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{
          uri: "https://video-link-generator.replit.app/api/videos/file/1758377308225-224467920.mp4",
        }}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"  
        shouldPlay           
        isLooping={false}    
        isMuted={true}       
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
