import { StyleSheet } from 'react-native'

const styles =  
  StyleSheet.create({
    button: {
        top: 12,
        left: 8,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        borderRadius: 15,       
        paddingHorizontal: 10,
        paddingVertical: 3,
      },
      buttonText: {
        color: '#4cc416',
        fontSize: 12,
        fontWeight: 'bold',
      },
  });

  export default styles