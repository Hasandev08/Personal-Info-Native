import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './style'

const Experience = (props) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Experience</Text>
    <View style={styles.text}>
      <Text style={{ fontWeight: '500', fontSize: 14 }}>August, 2022- September, 2022</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 8, marginTop: 8, paddingRight: 5 }}>{'\u2B24'}</Text>
        <Text style={{ fontSize: 12, paddingVertical: 5 }}>
          Internee at Systems Limited, Pakistan
        </Text>
      </View>
    </View>
  </View>
)

export default Experience
