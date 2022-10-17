import React from 'react'
import { View } from 'react-native'

import Contact from './Contact'
import Education from './Education'
import PersonalInfo from './PersonalInfo'

const About = (props) => (
  <View>
    <Contact
      contact='+923153260203'
      email='hasanahmed0089@gmail.com'
      address='Pakistan'
      github='HasanAhmed987'
      linkedin='hasandeveloper123'
    />
    <Education />
    <PersonalInfo />
  </View>
)

export default About
