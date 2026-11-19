import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Scroll from '@/components/Scroll'

// Tela de configurações (aba da TabBar). O conteúdo ainda será adicionado.
export default function Settings() {
  return (
    <Scroll nav>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Configurações</Text>
          <Text style={styles.subtitle}>Ajuste o app do seu jeito</Text>
        </View>
      </View>
    </Scroll>
  )
}
