import { StyleSheet } from 'react-native'
import { REGISTER_BUTTON_SIZE } from '../RegisterButton/style'

export const BAR_HEIGHT = 72
export const BAR_MAX_WIDTH = 480
export const BAR_SIDE_MARGIN = 16
export const BAR_BOTTOM = 50

// Concavidade: o círculo é um pouco maior que o botão, deixando uma folga ao redor dele.
export const NOTCH = {
  notchRadius: REGISTER_BUTTON_SIZE / 2 + 8,
  notchCenterY: 9,
  fillet: 6,
} as const

// Quanto o botão sobe acima do topo da barra (centro do botão = centro da concavidade).
export const BUTTON_OVERHANG = REGISTER_BUTTON_SIZE / 2 - NOTCH.notchCenterY

export const styles = StyleSheet.create({
  // ocupa só a largura necessária e deixa os toques passarem pelas áreas vazias
  wrapper: {
    position: 'absolute',
    bottom: BAR_BOTTOM,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  // a altura inclui a parte do botão que sobressai, senão o Android ignora o toque nela
  container: {
    height: BAR_HEIGHT + BUTTON_OVERHANG,
  },
  shape: {
    position: 'absolute',
    top: BUTTON_OVERHANG,
    left: 0,
  },
  blur: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  row: {
    position: 'absolute',
    top: BUTTON_OVERHANG,
    left: 0,
    right: 0,
    height: BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  group: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  registerButton: {
    position: 'absolute',
    top: 0,
  },
});
