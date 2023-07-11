import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

 const styles = 
  StyleSheet.create({
    primaryTab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      borderRadius: 5,
      elevation: 1,
      backgroundColor: 'red',
    },
    outlineTab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      borderRadius: 5,
      elevation: 0,
      borderWidth: 1,
      borderColor: '#eab308',
    },
    primaryText: {
      color: 'white',
      fontSize: moderateScale(13),
      textTransform: 'capitalize',
    },
    outlineText: {
      color: '#eab308',
      fontSize: moderateScale(13),
      textTransform: 'capitalize',
    },
    tab1Style: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    tab2Style: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })

  export default styles;