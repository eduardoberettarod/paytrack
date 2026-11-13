import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const GLASS = {
  borderWidth: 1,
  stops: [
    { offset: 0,    opacity: 0.9 },
    { offset: 0.35, opacity: 0.08 },
    { offset: 0.65, opacity: 0.08 },
    { offset: 1,    opacity: 0.55 },
  ],
} as const;

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent', 
  },
  border: {
    ...StyleSheet.absoluteFillObject,
  },
});