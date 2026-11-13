import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

import HeaderGradient from '@/components/HeaderGradient';
import HeaderCard from '@/components/HeaderCard';
import { spacing } from '@/theme/layout';

export default function Dashboard() {
  
  const insets = useSafeAreaInsets()


  return (
    <View>
      <HeaderGradient>

        <View style={[styles.container, { paddingTop: insets.top + spacing.lg }]}>
          <HeaderCard />
        </View>

      </HeaderGradient>
    </View>
  )
}