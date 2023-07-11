import React from 'react'
import { View, Pressable, Dimensions } from 'react-native'
import styles from './styles.js';


 const Tab1Screen = ({ navigation }) => {

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.rowContainer,
          {
            marginBottom: 20,
          },
        ]}>
        <View style={styles.flexContainer}>
         
        </View>


          <View style={styles.flexContainer} />
          <View style={styles.flexContainer} />
        </View>
     
    </View>
  )
}

export default Tab1Screen;
