import { View, useWindowDimensions } from 'react-native'
import React from 'react'
import MaskedView from '@react-native-masked-view/masked-view'
import { BlurView } from 'expo-blur'
import { usePathname, useRouter } from 'expo-router'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { styles, BAR_HEIGHT, BAR_MAX_WIDTH, BAR_SIDE_MARGIN, NOTCH } from './style';
import { buildBarPath, notchWidth } from './notchPath';
import TabBarIcon from '../TabBarIcon';
import RegisterButton from '../RegisterButton';
import { REGISTER_BUTTON_SIZE } from '../RegisterButton/style';
import { getTabIndex, tabs } from '@/constants/tabs';

const BORDER_WIDTH = 1
const BLUR_INTENSITY = 100
const BORDER_STOPS = [
  { offset: 0, opacity: 0.55 },
  { offset: 0.35, opacity: 0.12 },
  { offset: 0.65, opacity: 0.12 },
  { offset: 1, opacity: 0.9 },
] as const

const LEFT_TABS = tabs.slice(0, 2)
const RIGHT_TABS = tabs.slice(2)

// Barra de navegação inferior em formato de pílula com uma concavidade no centro, onde fica o botão de cadastro.
// Dois ícones à esquerda, dois à direita, e o RegisterButton encaixado no meio.
export default function TabBar() {
  const pathname = usePathname()
  const router = useRouter()
  const { width } = useWindowDimensions()

  const barWidth = Math.min(width - BAR_SIDE_MARGIN * 2, BAR_MAX_WIDTH)
  const activeTab = tabs[getTabIndex(pathname)]?.name

  // o contorno é desenhado 1px para dentro para a borda não ser cortada pelo SVG
  const path = buildBarPath(barWidth - BORDER_WIDTH, BAR_HEIGHT - BORDER_WIDTH, NOTCH)

  function renderTab(tab: (typeof tabs)[number]) {
    return (
      <TabBarIcon
        key={tab.name}
        name={tab.name}
        size={24}
        active={activeTab === tab.name}
        onPress={() => router.push(tab.route)}
      />
    )
  }

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <View style={[styles.container, { width: barWidth }]} pointerEvents="box-none">
        {/* Blur recortado no formato da barra (com a concavidade). A máscara só usa a opacidade do desenho. */}
        <MaskedView
          style={[styles.shape, { width: barWidth, height: BAR_HEIGHT }]}
          pointerEvents="none"
          maskElement={
            <Svg width={barWidth} height={BAR_HEIGHT}>
              <Path d={path} x={BORDER_WIDTH / 2} y={BORDER_WIDTH / 2} fill="#000" />
            </Svg>
          }
        >
          <BlurView tint="dark" intensity={BLUR_INTENSITY} style={styles.blur} />
        </MaskedView>

        {/* Só a borda fina por cima, sem preenchimento */}
        <Svg
          width={barWidth}
          height={BAR_HEIGHT}
          style={styles.shape}
          pointerEvents="none"
        >
          <Defs>
            <LinearGradient id="tabBarBorder" x1="0" y1="0" x2="1" y2="1">
              {BORDER_STOPS.map((s) => (
                <Stop key={s.offset} offset={s.offset} stopColor="#FFFFFF" stopOpacity={s.opacity} />
              ))}
            </LinearGradient>
          </Defs>
          <Path
            d={path}
            x={BORDER_WIDTH / 2}
            y={BORDER_WIDTH / 2}
            fill="none"
            stroke="url(#tabBarBorder)"
            strokeWidth={BORDER_WIDTH}
          />
        </Svg>

        <View style={styles.row} pointerEvents="box-none">
          <View style={styles.group}>{LEFT_TABS.map(renderTab)}</View>
          {/* espaço reservado para a concavidade / botão de cadastro */}
          <View style={{ width: notchWidth(NOTCH) }} />
          <View style={styles.group}>{RIGHT_TABS.map(renderTab)}</View>
        </View>

        <RegisterButton
          style={[styles.registerButton, { left: (barWidth - REGISTER_BUTTON_SIZE) / 2 }]}
        />
      </View>
    </View>
  )
}
