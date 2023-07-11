import { StyleSheet } from 'react-native'

const styles =  
  StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#04020d'
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingBottom: 250,
      },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
        marginLeft: 10,
        marginRight: 14,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
      },
      button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginHorizontal: 10,
      },
      activeButton: {
        backgroundColor: '#ffffff',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      activeButtonText: {
        color: '#e50914',
      },
  });

  export default styles