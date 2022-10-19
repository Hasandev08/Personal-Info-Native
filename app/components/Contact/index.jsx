import React from 'react'
import { Text, View } from 'react-native'

import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'

import colors from '../../config/colors'

import { styles } from './style'

const Contact = ({ contact, email, address, github, linkedin }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Contact</Text>
    <View style={{ paddingLeft: 20 }}>
      <View style={styles.logo}>
        <FontAwesome name='phone' size={18} color={colors.theme} />
        <Text style={styles.text}>{contact}</Text>
      </View>
      <View style={styles.logo}>
        <MaterialIcons name='email' size={18} color={colors.theme} />
        <Text style={styles.text}>{email}</Text>
      </View>
      <View style={styles.logo}>
        <Entypo name='location-pin' size={18} color={colors.theme} />
        <Text style={styles.text}>{address}</Text>
      </View>
      <View style={styles.logo}>
        <AntDesign name='github' size={18} color={colors.theme} />
        <Text style={styles.text}>{github}</Text>
      </View>
      <View style={styles.logo}>
        <AntDesign name='linkedin-square' size={18} color={colors.theme} />
        <Text style={styles.text}>{linkedin}</Text>
      </View>
    </View>
  </View>
)

export default Contact
