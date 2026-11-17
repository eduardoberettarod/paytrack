import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { fontSize, spacing } from '@/theme/layout';

export const styles = StyleSheet.create({
  content: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: fonts.regular,
    color: colors.gray[300],
  },
  value: {
    fontFamily: fonts.semiBold,
    color: colors.gray[100],
    fontSize: fontSize.xxl
  },
  containerPercentage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // informações importantes em destaque com a cor secundária
  percentage: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.sm,
    color: colors.tertiaryColor,
  },
  highlight: {
    color: colors.gray[300],
  },
  progress: {
    marginTop: spacing.md,
  },
  statusFooter: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
