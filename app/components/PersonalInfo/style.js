import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 330,
    borderRadius: 15,
    paddingVertical: 5,
  },
  heading: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'justify',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
})
