import { StyleSheet } from 'react-native'


const styles =  
  StyleSheet.create({
    main: {
       marginBottom: 16,
       marginVertical: 30,
       marginHorizontal: 8,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
    },
    text: {
        color: '#eab308',
        fontSize: 18,
    },
    movieContainer: {
        marginVertical: 12,
        marginRight: 16,
        position: 'relative',
    },
    movieTitle: {
        color: '#D1D5DB',
        marginLeft: -2,
        fontWeight: 'bold'
    },
    icon: {
        top: 10,
        fontSize: 25,
        color: '#ffffff',
        right: 10,
        position: 'absolute'
    },
  });

  export default styles