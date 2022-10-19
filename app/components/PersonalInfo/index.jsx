import React from 'react'
import { Text, View } from 'react-native'

import { info } from '../config/data'
import { styles } from './style'

const PersonalInfo = (props) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Personal Information</Text>
    <Text style={styles.paragraph}>{info}</Text>
  </View>
)

export default PersonalInfo
