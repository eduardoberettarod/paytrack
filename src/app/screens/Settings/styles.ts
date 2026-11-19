import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { fontSize } from '@/theme/layout';
import { fonts } from '@/theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 24,
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: fontSize.xxl,
  },
  subtitle: {
    fontFamily: fonts.regular,
    color: colors.gray[500],
    fontSize: fontSize.md,
  },
});
