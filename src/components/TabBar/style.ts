import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 18,
  },
  container: {
    overflow: 'hidden',
    borderRadius: 100,
  },
  blur: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 6,
  },
});