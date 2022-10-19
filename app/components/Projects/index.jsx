import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { projectsData } from '../../config/data'

function Projects(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Projects</Text>
      <FlatList
        data={projectsData}
        renderItem={({ item }) => (
          <View style={styles.bullets}>
            <Text style={{ fontSize: 8, paddingVertical: 2 }}>{'\u2B24'}</Text>
            <Text style={styles.text}>{item.key}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  )
}

export default Projects
