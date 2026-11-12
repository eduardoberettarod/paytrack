import { StyleSheet } from 'react-native';

export const GLOW = {
  size: 640,                // área do SVG, fixa (não depende da tela)
  color: '#5700C9',         // colors.primaryColor
  offsetX: -90,             // centro do brilho um pouco fora da tela
  offsetY: -90,
  radius: 360,              // raio base do halo
  stretch: 1.5,             // alongamento ao longo da diagonal
  squash: 0.7,              // achatamento perpendicular à diagonal
  angle: 45,                // direção: topo-esquerda para baixo-direita
  stops: [
    { offset: 0,    opacity: 0.65 },
    { offset: 0.15, opacity: 0.5 },
    { offset: 0.3,  opacity: 0.34 },
    { offset: 0.5,  opacity: 0.17 },
    { offset: 0.7,  opacity: 0.06 },
    { offset: 0.88, opacity: 0.015 },
    { offset: 1,    opacity: 0 },
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