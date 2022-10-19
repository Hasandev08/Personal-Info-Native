import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { educationData } from '../../config/data'

function Education(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Education</Text>
      <FlatList
        data={educationData}
        renderItem={({ item }) => (
          <View style={styles.bullets}>
            <Text style={{ fontSize: 8, paddingTop: 2 }}>{'\u2B24'}</Text>
            <Text style={styles.text}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Education
