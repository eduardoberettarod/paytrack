import React, { useState } from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { GLASS, styles } from './style';

type GlassCardProps = ViewProps & {
  radius?: number;                    // use 999 para formato de pílula/círculo
  intensity?: number;                 // força do blur
  borderWidth?: number;
  contentStyle?: StyleProp<ViewStyle>; // padding, flexDirection etc. do conteúdo interno
  children?: React.ReactNode;
};

export default function GlassCard({
  radius = 24,
  intensity = 80,
  borderWidth = GLASS.borderWidth,
  style,
  contentStyle,
  children,
  onLayout,
  ...rest
}: GlassCardProps) {
  const [box, setBox] = useState({ w: 0, h: 0 });

  function handleLayout(e: LayoutChangeEvent) {
    const { width, height } = e.nativeEvent.layout;
    setBox((prev) => (prev.w === width && prev.h === height ? prev : { w: width, h: height }));
    onLayout?.(e);
  }

  const inset = borderWidth / 2;
  const r = Math.min(radius, Math.min(box.w, box.h) / 2) - inset;

  return (
    <View
      {...rest}
      onLayout={handleLayout}
      style={[styles.container, { borderRadius: radius }, style]}
    >
      <BlurView style={styles.blur} tint="dark" intensity={intensity} pointerEvents="none" />

      <View style={contentStyle}>{children}</View>

      {box.w > 0 && (
        <Svg width={box.w} height={box.h} style={styles.border} pointerEvents="none">
          <Defs>
            <LinearGradient id="glassBorder" x1="0" y1="0" x2="1" y2="1">
              {GLASS.stops.map((s) => (
                <Stop key={s.offset} offset={s.offset} stopColor="#FFFFFF" stopOpacity={s.opacity} />
              ))}
            </LinearGradient>
          </Defs>
          <Rect
            x={inset}
            y={inset}
            width={box.w - borderWidth}
            height={box.h - borderWidth}
            rx={r}
            fill="none"
            stroke="url(#glassBorder)"
            strokeWidth={borderWidth}
          />
        </Svg>
      )}
    </View>
  );
}