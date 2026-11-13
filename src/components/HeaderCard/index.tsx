import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';

import GlassCard from '@/components/GlassCard';
import EyeButton from '@/components/EyeButton';
import { radius } from '@/theme/layout';

export default function HeaderCard() {
  return (
    <GlassCard radius={radius.xl} contentStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.label}>Total Gasto por Mês</Text>
        <EyeButton />
      </View>
      <View>
        <Text style={styles.value}>R$ 14.000,90</Text>
      </View>
    </GlassCard>
  );
}