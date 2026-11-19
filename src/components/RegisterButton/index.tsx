import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { router } from 'expo-router';

// Botão de cadastro. A posição (dentro da concavidade da TabBar) é definida por quem o usa, via prop style.
export default function RegisterButton({ style, ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={[styles.addButton, style]}
      activeOpacity={0.8}
      onPress={() => router.push('/screens/Register')}
      {...rest}
    >
      <MaterialIcons name={'add'} size={28} />
    </TouchableOpacity>
  )
}
