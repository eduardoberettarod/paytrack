import { View, Text } from 'react-native'
import React from 'react'

import HomeHeader from '@/components/HomeHeader';
import HeaderGradient from '@/components/HeaderGradient';

export default function Dashboard() {
  return (
    <View>
      <HeaderGradient>
        <HomeHeader />
      </HeaderGradient>
    </View>
  )
}