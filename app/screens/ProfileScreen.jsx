import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import About from '../components/About'
import ButtonBar from '../components/ButtonBar'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Projects from '../components/Projects'

import colors from '../config/colors'

function ProfileScreen(props) {
  const [about, setAbout] = useState(true)
  const [experience, setExperience] = useState(false)
  const [projects, setProjects] = useState(false)

  return (
    <>
      <View style={styles.profile}>
        <View style={styles.header}>
          <Text style={styles.title}>PROFILE</Text>
          <Header />
          <ButtonBar setAbout={setAbout} setExperience={setExperience} setProjects={setProjects} />
        </View>
        <View style={styles.container}>
          {about && <About />}
          {experience && <Experience />}
          {projects && <Projects />}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    marginBottom: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  container: {
    alignItems: 'center',
  },
})

export default ProfileScreen
