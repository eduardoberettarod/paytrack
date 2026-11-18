import { StyleSheet } from 'react-native';
import { radius } from '@/theme/layout';

export const BAR = {
  height: 4,
  // duração da animação quando a porcentagem muda
  duration: 600,
} as const;

// cores e altura vêm por props (com padrões no index.tsx)
export const styles = StyleSheet.create({
  track: {
    width: '100%',
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.pill,
  },
});
