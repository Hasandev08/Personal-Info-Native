import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'

function PersonalInfo({ contact, email, address, github, linkedin }) {
  return (
    <View>
      <Text style={styles.heading}>Personal Information</Text>
      <View style={{ paddingLeft: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name='phone' size={14} color='black' />
          <Text style={{ paddingLeft: 10, fontSize: 12 }}>{contact}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name='email' size={14} color='black' />
          <Text style={{ paddingLeft: 10, fontSize: 12 }}>{email}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Entypo name='location-pin' size={14} color='black' />
          <Text style={{ paddingLeft: 10, fontSize: 12 }}>{address}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name='github' size={14} color='black' />
          <Text style={{ paddingLeft: 10, fontSize: 12 }}>{github}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name='linkedin-square' size={14} color='black' />
          <Text style={{ paddingLeft: 10, fontSize: 12 }}>{linkedin}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default PersonalInfo
