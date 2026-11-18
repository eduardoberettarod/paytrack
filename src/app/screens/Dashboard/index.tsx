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
import Scroll from '@/components/Scroll';

export default function Dashboard() {

  const insets = useSafeAreaInsets()


  return (
    <Scroll>
      <HeaderGradient>

        <View style={styles.container}>
          <View>
            <ProfileButton />
          </View>

          <HeaderCard />

          <View style={{ marginTop: 24 }}>

            <View style={styles.headerCategory}>
              <MaterialIcons name="pie-chart" size={16} color={colors.gray[400]} />
              <Text style={styles.label}>Gastos por Categoria</Text>
            </View>

            <View style={{ marginTop: 12, flexDirection: 'column', gap: 12 }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  gap: 12
                }}
              >
                <SmallCard
                  title="Saúde"
                  spent={95}
                  limit={300}
                  icon="hospital-box-outline"
                  color={colors.red[400]}
                />

                <SmallCard
                  title="Lazer"
                  spent={240}
                  limit={400}
                  icon="movie-outline"
                  color={colors.emerald[600]}
                />

              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  gap: 12
                }}
              >
                <SmallCard
                  title="Comida"
                  spent={172}
                  limit={800}
                  icon="food-outline"
                  color={colors.sky[600]}
                />
                
                <SmallCard
                  title="Transporte"
                  spent={310}
                  limit={500}
                  icon="car-outline"
                  color={colors.orange[400]}
                />

              </View>

            </View>

          </View>

        </View>

      </HeaderGradient>
    </Scroll>
  )
}