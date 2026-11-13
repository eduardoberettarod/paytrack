import { View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { usePathname, useRouter } from 'expo-router'
import { styles } from './style';
import TabBarIcon from '../TabBarIcon';
import GlassCard from '../GlassCard';

const tabs = [
  { name: 'house', route: '/screens/Dashboard' },
  { name: 'history', route: '/screens/History' },
  { name: 'add', route: '/screens/Register' },
  { name: 'category', route: '/screens/Category' },
  { name: 'person', route: '/screens/Profile' },
] as const

// Barra de navegação inferior com blur, que destaca a aba da rota atual e se esconde nas telas de tela cheia (Register, About e detalhes do histórico).
export default function TabBar() {
  const pathname = usePathname()
  const router = useRouter()

  // const isFullScreenPage =
  //   pathname === '/screen/Register' ||
  //   pathname === '/screen/About' ||
  //   (pathname.startsWith('/screen/History/') && pathname !== '/screen/History')

  // if (isFullScreenPage) {
  //   return null
  // }

  const activeTab = tabs.find((tab) => tab.route === pathname)?.name ?? 'house'

  return (
    <View>
      <View style={styles.container}>
        <GlassCard contentStyle={styles.blur} radius={100} intensity={100}>
          {tabs.map((tab) => (
            <TabBarIcon
              key={tab.name}
              name={tab.name}
              size={24}
              active={activeTab === tab.name}
              onPress={() => router.push(tab.route)}
            />
          ))}
        </GlassCard>
      </View>
    </View>
  )
}