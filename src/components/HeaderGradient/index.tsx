import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { GLOW, styles } from './styles';

type HeaderGradientProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export default function HeaderGradient({ style, children }: HeaderGradientProps) {
  return (
    <View style={style}>
      {/* Glow decorativo: fixo, atrás do conteúdo, não captura toques */}
      <View pointerEvents="none" style={styles.glow}>
        <Svg width={GLOW.size} height={GLOW.size}>
          <Defs>
            {/* centro no canto superior esquerdo do SVG, raio = lado inteiro */}
            <RadialGradient
              id="headerGlow"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="objectBoundingBox"
            >
              {GLOW.stops.map((s) => (
                <Stop
                  key={s.offset}
                  offset={s.offset}
                  stopColor={s.color}      // antes: GLOW.color
                  stopOpacity={s.opacity}
                />
              ))}
            </RadialGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#headerGlow)" />
        </Svg>
      </View>

      {children}
    </View>
  );
}