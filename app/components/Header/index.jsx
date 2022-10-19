import React from 'react'
import { Image, Text, View } from 'react-native'

const Header = (props) => (
  <View style={styles.card}>
    <View style={styles.imageBackground}>
      <Image source={require('../assets/profile.jpeg')} style={styles.image} />
    </View>
    <View style={styles.text}>
      <Text style={styles.name}>Hasan Ahmed</Text>
      <Text style={styles.title}>React Native Developer</Text>
    </View>
  </View>
)

export default Header
