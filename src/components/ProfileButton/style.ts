import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'
import { radius } from '@/theme/layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: colors.quaternaryColor,
  },
});