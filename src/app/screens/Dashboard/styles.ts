import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { fontSize, spacing } from '@/theme/layout';
import { fonts } from '@/theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 24
  },
  label: {
    color: colors.gray[400],
    fontFamily: fonts.medium,
    fontSize: fontSize.sm
  },
  headerCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  welcome: {
    fontFamily: fonts.regular,
    color: colors.gray[500],
    fontSize: fontSize.md
  },
  textContainer: {

  },
  title: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: fontSize.xxl
  },  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
