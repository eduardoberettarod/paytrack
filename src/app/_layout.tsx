import { colors } from '@/theme/colors'
import { Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {

  return (
    <SafeAreaProvider>
        <KeyboardProvider>
            <Stack screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.onyx }
            }}
            />
            <StatusBar hidden />
        </KeyboardProvider>
    </SafeAreaProvider>
  )
}