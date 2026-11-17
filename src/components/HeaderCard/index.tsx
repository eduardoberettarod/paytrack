import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';

import GlassCard from '@/components/GlassCard';
import EyeButton from '@/components/EyeButton';
import { radius } from '@/theme/layout';
import Separator from '@/components/Separator';
import { colors } from '@/theme/colors';

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

      <View style={{ marginTop: 18, marginBottom: 18 }}>
        <Separator color={colors.gray[800]} />
      </View>

      <View>
        <View style={styles.containerPercentage}>
          <FontAwesome name="circle" size={6} color={colors.gray[300]} />
          <Text style={styles.label}>Status Orçamentário</Text>
        </View>
      </View>

    </GlassCard>
  );
}