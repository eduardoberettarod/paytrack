import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 356,
  },
  header: {
    marginTop: 48,
    marginHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
  },
});