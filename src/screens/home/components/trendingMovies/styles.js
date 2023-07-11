import { StyleSheet } from 'react-native'

const styles =  
  StyleSheet.create({
    container: {
        position: 'relative',
      },
      beforeElement: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2,
        width: "100%",
        height: "30%",
        
      },
      slide: {

      },
      backdropImage: {
        paddingTop: '130%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      },
      gradientOverlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      },
      contentContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 10,
      },
      textContainer: {
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 30,
      },
      title: {
        fontSize: 24,
        fontWeight: '700',
      },
      image: {
        borderRadius: 15,
      }
      
  })

export default styles