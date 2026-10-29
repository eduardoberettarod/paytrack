import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GRADIENT, styles } from './style';

type HeaderGradientProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export default function HeaderGradient({ style, children }: HeaderGradientProps) {
  return (
    <LinearGradient
      colors={GRADIENT.colors}
      locations={GRADIENT.locations}
      start={GRADIENT.start}
      end={GRADIENT.end}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
}