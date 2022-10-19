import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 8,
    marginBottom: 10,
  },
  heading: { fontSize: 16, fontWeight: 'bold', paddingLeft: 10, paddingVertical: 5 },
  logo: { flexDirection: 'row', paddingVertical: 1, marginBottom: 5 },
  text: {
    paddingLeft: 20,
    paddingVertical: 1,
    fontSize: 12,
  },
})
