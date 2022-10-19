import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './style'

const ButtonBar = ({ setAbout, setEducation, setExperience, setProjects }) => (
  <View style={styles.bar}>
    <TouchableOpacity
      onPress={() => {
        setAbout(true)
        setEducation(false)
        setExperience(false)
        setProjects(false)
      }}
    >
      <Text style={styles.text}>About</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        setAbout(false)
        setEducation(true)
        setExperience(false)
        setProjects(false)
      }}
    >
      <Text style={styles.text}>Education</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        setAbout(false)
        setEducation(false)
        setExperience(true)
        setProjects(false)
      }}
    >
      <Text style={styles.text}>Experience</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        setAbout(false)
        setEducation(false)
        setExperience(false)
        setProjects(true)
      }}
    >
      <Text style={styles.text}>Projects</Text>
    </TouchableOpacity>
  </View>
)

export default ButtonBar
