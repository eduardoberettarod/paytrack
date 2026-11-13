import { StyleSheet } from 'react-native';

export const BUTTON = {
  size: 48,
  borderWidth: 1,
  // brilho da borda: começa forte em cima à esquerda, apaga no meio, volta mais leve embaixo à direita
  stops: [
    { offset: 0,    opacity: 0.9 },
    { offset: 0.35, opacity: 0.08 },
    { offset: 0.65, opacity: 0.08 },
    { offset: 1,    opacity: 0.55 },
  ],
} as const;

export const styles = StyleSheet.create({
  button: {
    overflow: 'hidden', // corta o blur no formato redondo
    alignItems: 'center',
    justifyContent: 'center',
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.04)', // leve tom de vidro
  },
  border: {
    ...StyleSheet.absoluteFillObject,
  },
});