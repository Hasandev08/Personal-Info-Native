import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

const PersonalInfo = (props) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Personal Information</Text>
    <Text style={styles.paragraph}>
      I am a hardworking undergrad student currently studying in University of Engineering &
      Technology, Lahore, Pakistan. I am in final year and looking for an opportunity to work in
      react. I have been working on react for a long time and have a good experience in it. I am a
      dedicated student with good leadership and management skills.
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 330,
    borderRadius: 15,
    paddingVertical: 5,
  },
  heading: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'justify',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
})

export default PersonalInfo
