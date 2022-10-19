import React, { useState } from 'react'
import { Text, View } from 'react-native'

import About from '../../components/About/index'
import ButtonBar from '../../components/ButtonBar/index'
import Education from '../../components/Education/index'
import Experience from '../../components/Experience/index'
import Header from '../../components/Header/index'
import Projects from '../../components/Projects/index'

function ProfileScreen(props) {
  const [about, setAbout] = useState(true)
  const [education, setEducation] = useState(false)
  const [experience, setExperience] = useState(false)
  const [projects, setProjects] = useState(false)

  return (
    <>
      <View style={styles.profile}>
        <View style={styles.header}>
          <Text style={styles.title}>PROFILE</Text>
          <Header />
          <ButtonBar
            setAbout={setAbout}
            setEducation={setEducation}
            setExperience={setExperience}
            setProjects={setProjects}
          />
        </View>
        <View style={styles.container}>
          {about && <About />}
          {education && <Education />}
          {experience && <Experience />}
          {projects && <Projects />}
        </View>
      </View>
    </>
  )
}

export default ProfileScreen
