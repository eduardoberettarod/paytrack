import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import HeaderGradient from '@/components/HeaderGradient';
import HeaderCard from '@/components/HeaderCard';
import { spacing } from '@/theme/layout';
import ProfileButton from '@/components/ProfileButton';
import { colors } from '@/theme/colors';
import SmallCard from '@/components/SmallCard';

export default function Dashboard() {

  const insets = useSafeAreaInsets()


  return (
    <View>
      <HeaderGradient>

        <View style={[styles.container, { paddingTop: insets.top + spacing.lg }]}>
          <View>
            <ProfileButton />
          </View>

          <HeaderCard />

          <View>

            <View style={styles.headerCategory}>
              <MaterialIcons name="pie-chart" size={16} color={colors.gray[400]} />
              <Text style={styles.label}>Gastos por Categoria</Text>
            </View>

            <View style={{ marginTop: 12 }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  gap: 12
                }}
              >
                <SmallCard />
                <SmallCard />
              </View>

              <View>

              </View>

            </View>

          </View>

        </View>

      </HeaderGradient>
    </View>
  )
}