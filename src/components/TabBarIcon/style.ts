import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native'

const DOT_SIZE = 5;

export const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  dot: {
    position: 'absolute',
    bottom: 5,
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: colors.white,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
  },
});