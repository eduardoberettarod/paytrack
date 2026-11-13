import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';
import GlassCard from '@/components/GlassCard';

export default function EyeButton({ onPress, style, ...rest }: TouchableOpacityProps) {
  const [iconName, setIconName] =
    useState<React.ComponentProps<typeof MaterialCommunityIcons>['name']>('eye');

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...rest}
      style={style}
      onPress={(e) => {
        setIconName((prev) => (prev === 'eye' ? 'eye-off' : 'eye'));
        onPress?.(e);
      }}
    >
      <GlassCard
        radius={999}
        style={{ width: 48, height: 48 }}
        contentStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <MaterialCommunityIcons name={iconName} size={20} color={colors.translucent} />
      </GlassCard>
    </TouchableOpacity>
  );
}