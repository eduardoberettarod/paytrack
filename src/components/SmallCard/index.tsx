import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '@/theme/colors';
import { radius } from '@/theme/layout';
import { formatCurrency } from '@/utils/currency';
import GlassCard from '../GlassCard';
import ProgressBar from '../ProgressBar';

type SmallCardProps = {
  title: string;                                          // ex: "Comida"
  spent: number;                                          // quanto já gastou na categoria
  limit: number;                                          // limite da categoria
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;    // ícone da categoria
  color?: string;                                         // cor do ícone e da barra
};

export default function SmallCard({
  title,
  spent,
  limit,
  icon = 'food-outline',
  color = colors.sky[600],
}: SmallCardProps) {
  const percentage = limit > 0 ? Math.min(100, (spent / limit) * 100) : 0;
  const percentageLabel = `${percentage.toFixed(1).replace('.', ',')}%`;

  return (
    <GlassCard style={styles.card} contentStyle={styles.container} radius={radius.xl}>

      <View style={styles.header}>
        <View style={[styles.icon, { backgroundColor: color }]}>
          <MaterialCommunityIcons name={icon} size={18} color="black" />
        </View>
        <Text style={styles.percentage}>{percentageLabel}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Limite {formatCurrency(limit)}</Text>
      </View>

      <View style={styles.containerProgressBar}>
        <ProgressBar percentage={percentage} color={color} />
      </View>
    </GlassCard>
  );
}
