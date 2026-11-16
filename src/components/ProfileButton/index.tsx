import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { styles } from './style'
import { router } from 'expo-router';

export default function ProfileButton() {
  return (
    <TouchableOpacity
      style={styles.button}
      hitSlop={0}
      pressRetentionOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      activeOpacity={0.8}
      onPress={() => router.push('/screens/Profile')}
    >
      <Image
        style={styles.imagem}
        source={require('../../assets/icon.jpeg')}
        contentFit="contain"
        transition={300}
      />
    </TouchableOpacity>
  )
}