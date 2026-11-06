import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/layout';

export const GRADIENT = {
  colors: [colors.onyx, colors.onyx, colors.gray[600]],
  locations: [0, 0.25, 1],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
} as const;

export const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
    overflow: 'hidden',
  },
});
