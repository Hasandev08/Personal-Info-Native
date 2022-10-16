import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

function Header(props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBackground}>
        <Image source={require('../assets/profile.jpeg')} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>HASAN AHMED</Text>
        <Text style={styles.title}>React Native Developer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: '90%',
    height: 80,
    paddingLeft: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    backgroundColor: colors.black,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
  },
})

export default Header
