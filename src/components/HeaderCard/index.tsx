import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';

import GlassCard from '@/components/GlassCard';
import EyeButton from '@/components/EyeButton';
import ProgressBar from '@/components/ProgressBar';
import { radius } from '@/theme/layout';
import Separator from '@/components/Separator';
import { colors } from '@/theme/colors';
import { formatCurrency } from '@/utils/currency';

type HeaderCardProps = {
  paidCount?: number;        // contas já pagas
  totalCount?: number;       // total de contas do mês
  remainingAmount?: number;  // valor (R$) que ainda falta pagar
};

export default function HeaderCard({
  paidCount = 0,
  totalCount = 0,
  remainingAmount = 0,
}: HeaderCardProps) {
  const percentage = totalCount > 0 ? Math.min(100, (paidCount / totalCount) * 100) : 0;

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
        <View style={styles.statusHeader}>
          <View style={styles.containerPercentage}>
            <FontAwesome name="circle" size={6} color={colors.gray[300]} />
            <Text style={styles.label}>Status Orçamentário</Text>
          </View>
          <Text style={styles.percentage}>{Math.round(percentage)}%</Text>
        </View>

        <ProgressBar percentage={percentage} style={styles.progress} />

        <View style={styles.statusFooter}>
          <Text style={styles.label}>
            <Text style={styles.highlight}>{paidCount}</Text> de{' '}
            <Text style={styles.highlight}>{totalCount}</Text> contas pagas
          </Text>
          <Text style={styles.label}>
            Faltam <Text style={styles.highlight}>{formatCurrency(remainingAmount)}</Text>
          </Text>
        </View>
      </View>
    </GlassCard>
  );
}
