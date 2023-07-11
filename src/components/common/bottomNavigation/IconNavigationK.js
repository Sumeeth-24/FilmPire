import { View } from 'react-native'
import React from 'react'
import { isValidArray } from '../../../utils/validation'
import IconButton from './component/IconButton'
import styles from './styles'

export default function IconNavigationK({ icons }) {
  if (!isValidArray(icons)) return null


  const options = icons.map((el, index) => (
    <IconButton el={el} key={index}></IconButton>
  ))

  return (
    <View style={[styles.container, icons.length === 2 && styles.container2]}>
      {options}
    </View>
  )
}
