import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function About(props) {
  return (
    <View>
      <Text style={styles.heading}>About</Text>
      <Text style={styles.paragraph}>
        I am a hardworking undergrad student currently studying in University of Engineering &
        Technology, Lahore, Pakistan. I am in final year and looking for an opportunity to work in
        react. I have been working on react for a long time and have a good experience in it. I am a
        dedicated student with good leadership and management skills.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
})

export default About
