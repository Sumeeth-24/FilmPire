import { StyleSheet, Dimensions } from 'react-native'

const {width, height} =  Dimensions.get('window');

const styles =  
  StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#04020d'
    },
    searchContainer: {
        marginHorizontal: 16,
        marginBottom: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',     
      },
      resultsText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 1,
      },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      },
      itemContainer: {
        marginBottom: 4,
      },
      image: {
        width: width*0.44,
        height: height*0.3,
        borderRadius: 16,
      },
      itemText: {
        color: 'gray',
        marginLeft: 1,
      },
  });

  export default styles