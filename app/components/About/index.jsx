import React from 'react'
import { View } from 'react-native'

import Contact from '../Contact/index'
import PersonalInfo from '../PersonalInfo/index'

const About = (props) => (
  <View>
    <Contact
      contact='+923153260203'
      email='hasanahmed0089@gmail.com'
      address='Pakistan'
      github='HasanAhmed987'
      linkedin='hasandeveloper123'
    />
    <PersonalInfo />
  </View>
)

export default About
