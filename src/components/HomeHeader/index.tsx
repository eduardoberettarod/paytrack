import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles'

import HeaderGradient from '../HeaderGradient';
import { spacing } from '@/theme/layout';

export default function HomeHeader() {

  const insets = useSafeAreaInsets()

  return (
    <HeaderGradient style={[styles.container, { paddingTop: insets.top + spacing.lg }]}>
      <Text>HomeHeader</Text>
    </HeaderGradient>
  )
}