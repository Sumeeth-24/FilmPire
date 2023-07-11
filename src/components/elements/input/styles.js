import { StyleSheet, Platform } from 'react-native'

const styles = 
 // const paddingVertical = Platform.OS === 'ios' ? 15 : 10
   StyleSheet.create({
    section: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#212121',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      marginTop: 24,
    },
    icon: {
      paddingRight: 0,
      marginRight: 8,
    },
    input: {
      backgroundColor: '#212121',
      color: '#FFFFFF',
      fontSize: 16,
      flex: 1,
      paddingVertical: 10,
      letterSpacing: 1,
    },
  })


export default styles
