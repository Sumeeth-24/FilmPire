import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'

const styles = 
  StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#91919145',
    },
    container2: {
      paddingHorizontal: '15%',
      alignSelf: 'center',
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    icon: {
      alignSelf: 'center',
    },
    label: {
      color: '#8A8A8F',
      textAlign: 'center',
      fontSize: moderateScale(10),
      marginTop: scale(3),
    },
    ripple: { borderRadius: 40, paddingHorizontal: 20 },
  })

export default styles
