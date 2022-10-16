import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import ProfileScreen from './screens/ProfileScreen'

import colors from './config/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
