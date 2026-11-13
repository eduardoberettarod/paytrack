import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

const { secondaryColor: primary, tertiaryColor: secondary } = colors;

export const GLOW = {
  size: 640,
  offsetX: -90,
  offsetY: -90,
  radius: 360,
  stretch: 1.5,
  squash: 0.7,
  angle: 45,
  // cada parada tem sua própria cor + opacidade
  stops: [
    { offset: 0,    color: secondary, opacity: 0.65 },
    { offset: 0.15, color: secondary, opacity: 0.5 },
    { offset: 0.3,  color: secondary, opacity: 0.34 },
    { offset: 0.5,  color: primary,   opacity: 0.17 },
    { offset: 0.7,  color: primary,   opacity: 0.06 },
    { offset: 0.88, color: primary,   opacity: 0.015 },
    { offset: 1,    color: primary,   opacity: 0 },
  ],
} as const;

export const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
    top: GLOW.offsetY,
    left: GLOW.offsetX,
    width: GLOW.size,
    height: GLOW.size,
  },
});