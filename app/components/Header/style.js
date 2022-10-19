import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: '90%',
    height: 220,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageBackground: {
    backgroundColor: colors.imageBackground,
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  title: {
    fontSize: 14,
  },
})
