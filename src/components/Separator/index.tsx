import { View, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';

type Props = {
  color: string,
  style?: StyleProp<ViewStyle>
}

export default function Separator({ color, style }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]} />
  )
}