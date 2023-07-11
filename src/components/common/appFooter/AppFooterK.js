import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { moderateScale } from 'react-native-size-matters'

export default function AppFooterK() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Sumeeth24</Text>
      <Text style={style.text}>Devil Corp</Text>
    </View>
  )
}

const style = 
   StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#000000',
      paddingHorizontal: 16,
      paddingVertical: 7,
      width: '100%',
    },
    text: {
      color: '#8A8A8F99',
      fontSize: moderateScale(10),
    },
  })

// #8A8A8F99
