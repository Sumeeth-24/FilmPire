import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

 const styles =
  StyleSheet.create({
    flexContainer: { flex: 1 },
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      marginVertical: 20,
    },
    rowContainer: { flexDirection: 'row', height: 100 },
    blockContainer: {
      flex: 1,
      alignItems: 'center',
      justifyItems: 'center',
    },
    blockText: {
      textAlign: 'center',
      marginTop: 5,
      fontSize: moderateScale(11),
    },
  })

  export default styles