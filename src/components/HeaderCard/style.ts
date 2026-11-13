import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { fontSize } from '@/theme/layout';

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
  }
});