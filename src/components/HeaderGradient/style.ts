import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors'

export const GRADIENT = {
  colors: ['#161618', '#161618', colors.red[700]],
  locations: [0, 0.1, 1],
  start: { x: 0.35, y: 0.3 },
  end: { x: 0.65, y: 1 },
} as const;

export const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
});