/*Barra de progresso*/
import React, { useRef, useState, useEffect } from 'react';
import { View, Image, Animated } from 'react-native';
import styles from '../../../styles/styles';


const Header = () => {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 33 ? 33 : prev + 5));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(loaderValue, {
      toValue: count,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [count, loaderValue]);

  const width = loaderValue.interpolate({
    inputRange: [0, 33],
    outputRange: ['0%', '33%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e6e1aac8397bbaf663ac7c84718fa28dffa6c0e476f6444cb015a2878833c' }}
        style={styles.headerIcon}
      />
      <View style={styles.headerTitleContainer}>
        <View style={styles.progressBar}>
          <Animated.View style={[styles.progressFill, { width }]} />
        </View>
      </View>
    </View>
  );
};

export default Header;
