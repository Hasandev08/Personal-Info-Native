import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: '90%',
    height: 220,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageBackground: {
    backgroundColor: colors.imageBackground,
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  title: {
    fontSize: 14,
  },
})

export default Header
