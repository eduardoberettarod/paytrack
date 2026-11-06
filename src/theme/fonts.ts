export const fonts = {
  regular: 'PlusJakartaSans-Regular',
  medium: 'PlusJakartaSans-Medium',
  semiBold: 'PlusJakartaSans-SemiBold',
  bold: 'PlusJakartaSans-Bold',
} as const;

export const fontAssets = {
  [fonts.regular]: require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
  [fonts.medium]: require('../../assets/fonts/PlusJakartaSans-Medium.ttf'),
  [fonts.semiBold]: require('../../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  [fonts.bold]: require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
};
