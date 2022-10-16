import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import About from './About'
import PersonalInfo from './PersonalInfo'

import colors from '../config/colors'

function Details(props) {
  return (
    <View style={styles.details}>
      <PersonalInfo
        contact='+923153260203'
        email='hasanahmed0089@gmail.com'
        address='Pakistan'
        github='HasanAhmed987'
        linkedin='hasandeveloper123'
      />
      <About />
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    backgroundColor: colors.white,
    width: '90%',
    height: '85%',
    borderRadius: 20,
  },
})

export default Details
