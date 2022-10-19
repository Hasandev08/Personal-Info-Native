import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
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
