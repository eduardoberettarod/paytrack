import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

export const GLOW = {
  size: 520,          // tamanho fixo, não depende da view
  color: '#8828FF',   // troque pelo tom da sua quaternaryColor
  offsetX: -120,      // negativo = o centro do brilho sai um pouco da tela
  offsetY: -120,
  // Curva ease-out: opacidade cai devagar no início e some suave no fim
  stops: [
    { offset: 0,    opacity: 0.55 },
    { offset: 0.15, opacity: 0.42 },
    { offset: 0.3,  opacity: 0.28 },
    { offset: 0.5,  opacity: 0.14 },
    { offset: 0.7,  opacity: 0.05 },
    { offset: 0.88, opacity: 0.01 },
    { offset: 1,    opacity: 0 },
  ],
} as const;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgPrimary,
    overflow: 'hidden', // corta o glow nas bordas do container
  },
  glow: {
    position: 'absolute',
    top: GLOW.offsetY,
    left: GLOW.offsetX,
    width: GLOW.size,
    height: GLOW.size,
  },
});