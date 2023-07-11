import { StyleSheet } from 'react-native'

const styles =  
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#04020d',
      position: 'relative',
    },
    area: {
      position: 'absolute',
      zIndex: 10,
      top: 190,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view1: {
      width: '100%',
      display: 'flex',
      paddingHorizontal: 4,
    },
    subtitle: {
      color: '#fff',
      fontSize: 16.1,
      marginTop: 10,
      maxWidth: '90%',
      textAlign: 'center',
      lineHeight: 25,
    },
    subtitle1: {
      fontSize: 20,
      color: '#fff',
      letterSpacing: 0.7,
      textAlign: 'center',
    },
    title: {
      color: '#f6e8e1',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      marginTop: 40,
    },
   
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center'
     
    },
    backgroundContainer: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      opacity: 0.5
    },
    indicator: {
      height: 2.5,
      width: 10,
      backgroundColor: 'grey',
      marginHorizontal: 3,
      borderRadius: 2,
    },
    btn: {
      flex: 1,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default styles