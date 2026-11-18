import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { fontSize, radius } from '@/theme/layout';
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  card: {
    flex: 1
  },
  container: {
    padding: 18
  },
  icon: {
    backgroundColor: colors.sky[600],
    padding: 12,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentage: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: fontSize.xs
  },
  content: {
    flexDirection: 'column',
    marginTop: 10
  },
  title: {
    color: colors.white
  },
  label: {
    color: colors.gray[600]
  },
  containerProgressBar: {
    marginTop: 12
  }
});