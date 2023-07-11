import React, { useState, useEffect } from 'react'
import Text from '../../../elements/text'
import { BackHandler } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Ripple from 'react-native-material-ripple'
import styles from '../styles'

export default function IconButton({ el }) {
  const [pressedIcon, setPressedIcon] = useState(false)

//   useEffect(() => {
//     if (el.backHandler) {
//       BackHandler.addEventListener('hardwareBackPress', () => {
//         el.onPress()
//         return true
//       })
//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', () => {
//           el.onPress()
//           return true
//         })
//       }
//     }
//   }, [])

  let Icon
  if (!el.hasOwnProperty('vector') || !el.vector) {
    Icon = (
      <el.icon
        style={styles.icon}
        height={moderateScale(26)}
        width={moderateScale(30)}
      />
    )
  } else {
    Icon = (
      <Ionicons
        color={pressedIcon ? 'red': '#8a8a8f'}
        style={styles.icon}
        name={el.icon}
        size={el.size ?? 30}
      />
    )
  }

  return (
    <Ripple
      style={[styles.iconContainer, styles.ripple]}
      rippleColor="#red"
      rippleDuration={
        el.icon === 'arrow-back-circle-sharp' || !el.useRippleEffect ? 0 : 700
      }
      rippleContainerBorderRadius={30}
      onPress={el.onPress}
      onPressIn={() => setPressedIcon(true)}
      onPressOut={() => {
        if (!(el.hasOwnProperty('useRippleEffect') && !el.useRippleEffect)) {
          setTimeout(() => {
            setPressedIcon(false)
          }, 300)
        }
      }}>
      {Icon}
      <Text style={styles.label}>{el.label}</Text>
    </Ripple>
  )
}
