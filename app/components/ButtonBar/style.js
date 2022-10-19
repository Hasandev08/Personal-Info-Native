import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  bar: {
    width: '80%',
    height: 40,
    backgroundColor: colors.theme,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginBottom: 25,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    paddingVertical: 8,
  },
})
