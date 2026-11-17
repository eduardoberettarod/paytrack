import React, { useEffect } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { BAR, styles } from './style';

type ProgressBarProps = {
  percentage?: number;
  style?: StyleProp<ViewStyle>;
};

export default function ProgressBar({ percentage = 0, style }: ProgressBarProps) {
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
      style={[styles.track, style]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(safe) }}
    >
      <Animated.View style={[styles.fill, fillStyle]} />
    </View>
  );
}
