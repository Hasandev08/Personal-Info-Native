import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../config/colors'

const ButtonBar = ({ setAbout, setExperience, setProjects }) => (
  <View style={styles.bar}>
    <TouchableOpacity
      onPress={() => {
        setAbout(true)
        setExperience(false)
        setProjects(false)
      }}
    >
      <Text style={styles.text}>About</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.experience}
      onPress={() => {
        setAbout(false)
        setExperience(true)
        setProjects(false)
      }}
    >
      <Text style={styles.text}>Experience</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        setAbout(false)
        setExperience(false)
        setProjects(true)
      }}
    >
      <Text style={styles.text}>Projects</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  bar: {
    width: '80%',
    height: 40,
    backgroundColor: colors.theme,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginBottom: 25,
  },
  experience: {
    borderColor: colors.white,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
})

export default ButtonBar
