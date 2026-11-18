import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { radius } from '@/theme/layout';
import GlassCard from '../GlassCard';
import ProgressBar from '../ProgressBar';

export default function SmallCard() {
  return (
    <GlassCard style={styles.card} contentStyle={styles.container} radius={radius.xl}>

      <View style={styles.header}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="food-outline" size={18} color="black" />
        </View>
        <Text style={styles.percentage}>21,5%</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Comida</Text>
        <Text style={styles.label}>Limite R$ 800</Text>
      </View>

      <View style={styles.containerProgressBar}>
        <ProgressBar />
      </View>
    </GlassCard>
  )
}