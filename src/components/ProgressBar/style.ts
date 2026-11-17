import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/layout';

export const BAR = {
  height: 4,
  // duração da animação quando a porcentagem muda
  duration: 600,
} as const;

export const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: BAR.height,
    borderRadius: radius.pill,
    backgroundColor: colors.gray[800],
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.pill,
    backgroundColor: colors.secondaryColor,
  },
});
