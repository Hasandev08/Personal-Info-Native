import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

function Projects(props) {
  const data = [
    { key: 'HR-Management System using ReactJs, MaterialUI, JSON Server' },
    { key: 'CRUD Application using MERN Stack' },
    { key: 'Ninettediogene Application using React Native' },
    { key: 'COVID-19 Tracker using ReactJs' },
    { key: 'Todo-List using ReactJs' },
    { key: 'Weather Application using ReactJs' },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Education</Text>
      <FlatList
        data={data}
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
  },
  text: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    fontSize: 12,
    fontWeight: '500',
  },
})

export default Projects
