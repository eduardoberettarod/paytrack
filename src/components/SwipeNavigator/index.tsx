import React, { useMemo, useRef } from 'react'
import { PanResponder, View } from 'react-native'
import { usePathname, useRouter } from 'expo-router'
import { getTabIndex, tabs } from '@/constants/tabs'

const MIN_DISTANCE = 60 // arrasto mínimo (px) para trocar de tela
const MIN_FAST_DISTANCE = 30 // arrasto mínimo quando o gesto é rápido
const MIN_VELOCITY = 0.6
const LOCK_MS = 400 // evita trocar de tela duas vezes seguidas

type SwipeNavigatorProps = {
  children: React.ReactNode
}

// Troca de tela ao arrastar para o lado, apenas entre as telas da TabBar.
// Arrastar para a direita vai para a próxima aba; para a esquerda, volta para a anterior.
// Nas pontas (Dashboard e Category) o arrasto na direção sem tela não faz nada.
export default function SwipeNavigator({ children }: SwipeNavigatorProps) {
  const pathname = usePathname()
  const router = useRouter()

  // guardo o índice atual em ref para o PanResponder (criado uma vez) sempre ler o valor atualizado
  const currentIndex = useRef(-1)
  currentIndex.current = getTabIndex(pathname)
  const locked = useRef(false)

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        // só assume o gesto se estiver numa aba e o arrasto for claramente horizontal
        onMoveShouldSetPanResponder: (_, g) =>
          currentIndex.current !== -1 &&
          Math.abs(g.dx) > 15 &&
          Math.abs(g.dx) > Math.abs(g.dy) * 2,

        onPanResponderRelease: (_, g) => {
          const index = currentIndex.current
          if (index === -1 || locked.current) return

          const farEnough = Math.abs(g.dx) > MIN_DISTANCE
          const fastEnough =
            Math.abs(g.dx) > MIN_FAST_DISTANCE && Math.abs(g.vx) > MIN_VELOCITY
          if (!farEnough && !fastEnough) return

          // direita => próxima aba | esquerda => aba anterior
          const target = tabs[g.dx < 0 ? index + 1 : index - 1]
          if (!target) return

          locked.current = true
          setTimeout(() => (locked.current = false), LOCK_MS)
          router.replace(target.route)
        },
      }),
    [router]
  )

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      {children}
    </View>
  )
}