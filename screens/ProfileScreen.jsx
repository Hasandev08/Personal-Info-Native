import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from '../components/Header'
import Details from '../components/Details'

function ProfileScreen(props) {
  return (
    <View style={styles.profile}>
      <Header />
      <Details />
    </View>
  )
}

const styles = StyleSheet.create({
  profile: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export default ProfileScreen
