import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { styles } from './style'

export default function ProfileButton() {
  return (
    <TouchableOpacity>
      <Image
        style={styles.imagem}
        source={require('../../assets/icon.jpeg')}
        contentFit="contain"
        transition={300}
      />
    </TouchableOpacity>
  )
}