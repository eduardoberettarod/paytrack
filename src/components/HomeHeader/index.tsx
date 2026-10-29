import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './style';
import ProfileButton from '../ProfileButton';
import HeaderGradient from '../HeaderGradient';
import { getCurrentDateParts } from '@/utils/date';

export default function HomeHeader() {
  const { day, month, year } = getCurrentDateParts();

  return (
    <HeaderGradient style={styles.container}>
      <View style={styles.header}>
        <ProfileButton />
        <View>
          <Text style={styles.greeting}>Olá, bem vindo!</Text>
          <Text style={styles.date}>
            {day} de {month} de {year}
          </Text>
        </View>
      </View>
    </HeaderGradient>
  );
}