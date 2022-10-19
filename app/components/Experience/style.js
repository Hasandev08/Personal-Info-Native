import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '80%',
    borderRadius: 20,
  },
  heading: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    paddingLeft: 20,
    paddingBottom: 10,
  },
})
