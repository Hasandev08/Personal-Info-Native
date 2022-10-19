import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import ProfileScreen from './app/screens/ProfileScreen'

import colors from './app/config/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ProfileScreen />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 0.35,
    backgroundColor: colors.theme,
  },
})
