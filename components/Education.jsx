import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

function Education(props) {
  const data = [
    { key: '2019-Present' },
    { key: 'Bachelors of Computer Science' },
    { key: 'University of Engineering & Technology, Lahore, Pakistan' },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Education</Text>
      <FlatList
        data={data}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 330,
    borderRadius: 15,
    paddingVertical: 8,
    marginBottom: 10,
  },
  heading: { fontSize: 16, fontWeight: 'bold', paddingLeft: 10, paddingVertical: 5 },
  bullets: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 5,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 12,
  },
})

export default Education
