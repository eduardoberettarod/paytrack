import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const REGISTER_BUTTON_SIZE = 56

export const styles = StyleSheet.create({
  addButton: {
    width: REGISTER_BUTTON_SIZE,
    height: REGISTER_BUTTON_SIZE,
    borderRadius: REGISTER_BUTTON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tertiaryColor,
    shadowColor: colors.tertiaryColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8
  },
});
