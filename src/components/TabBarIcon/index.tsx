import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { colors } from '@/theme/colors';

type IconName = 'home' | 'history' | 'category'

type TabBarIconProps = TouchableOpacityProps & {
  name: IconName
  size?: number
  active?: boolean
}

// Ícone clicável de uma aba da TabBar. Quando a aba está ativa, o ícone fica branco e um pontinho de luz aparece embaixo dele.
export default function TabBarIcon({ name, size = 24, active = false, style, ...rest }: TabBarIconProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      {...rest}
      activeOpacity={0.8}
    >
      <MaterialIcons
        name={name}
        size={size}
        color={active ? colors.white : colors.gray[700]}
      />
      {active && <View style={styles.dot} />}
    </TouchableOpacity>
  )
}