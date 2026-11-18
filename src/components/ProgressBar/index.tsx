import React, { useEffect } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { colors } from '@/theme/colors';
import { BAR, styles } from './style';

type ProgressBarProps = {
  percentage?: number;       // 0 a 100
  color?: string;            // cor da barra preenchida
  trackColor?: string;       // cor do fundo da barra
  height?: number;           // altura da barra
  style?: StyleProp<ViewStyle>;
};

export default function ProgressBar({
  percentage = 0,
  color = colors.secondaryColor,
  trackColor = colors.gray[800],
  height = BAR.height,
  style,
}: ProgressBarProps) {
  const safe = Number.isFinite(percentage) ? Math.min(100, Math.max(0, percentage)) : 0;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(safe, {
      duration: BAR.duration,
      easing: Easing.out(Easing.cubic),
    });
  }, [safe, progress]);

  const fillStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%`,
  }));

  return (
    <View
      style={[styles.track, { height, backgroundColor: trackColor }, style]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(safe) }}
    >
      <Animated.View style={[styles.fill, { backgroundColor: color }, fillStyle]} />
    </View>
  );
}
