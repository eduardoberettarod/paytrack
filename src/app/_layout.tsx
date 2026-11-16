import { colors } from '@/theme/colors'
import { fontAssets } from '@/theme/fonts'
import { useFonts } from 'expo-font'
import { Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import TabBar from "@/components/TabBar";
import SwipeNavigator from "@/components/SwipeNavigator";


export default function RootLayout() {
  const [loaded, error] = useFonts(fontAssets)

  if (error) throw error
  if (!loaded) return null

  return (
    <SafeAreaProvider>
        <KeyboardProvider>
            <SwipeNavigator>
              <Stack screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.bgPrimary }
              }}
              />
            </SwipeNavigator>
            <StatusBar hidden />
          <TabBar />
        </KeyboardProvider>
    </SafeAreaProvider>
  )
}