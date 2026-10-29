import { View, Text } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from './style'

//components
import HomeHeader from "@/components/HomeHeader";


export default function Index() {

  const insets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  )
}