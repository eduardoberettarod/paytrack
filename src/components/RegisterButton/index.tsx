import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { router } from 'expo-router';

export default function RegisterButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => router.push('/screens/Register')}
      {...rest}
    >
      <MaterialIcons name={'add'} size={24} />
    </TouchableOpacity>
  )
}