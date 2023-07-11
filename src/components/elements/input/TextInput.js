import React, { useState, useMemo } from 'react'
import { TextInput, View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

export default function TextInput_({
  onChange,
  value,
  placeholder,
  keyboardType = 'default',
  icon = null,
  iconAlling = 'left',
  iconButton = {
    icon: undefined,
    onPress: () => {
      //
    },
    color: '#fff',
  },
  addOnTextInputStyle = {},
  onIconPress = () => {
    /*default param */
  },
  iconStyle,
  maxLength,
  isCapitalized,
  disabled = false,
}) {

  const [bg, setBg] = useState('transparent')

  // handles numeric values
  const valueString = useMemo(() => (value ? value.toString() : ''), [value])

  const onFocus = () => {
    setBg('#e00d0d')
  }
  const onBlur = () => {
    setBg('transparent')
  }

  return (
    <View style={[styles.section, { borderColor: bg }]}>
      {icon && iconAlling === 'left' && (
        <Icon
          onPress={onIconPress}
          style={[styles.icon, { ...iconStyle }]}
          name={icon}
          size={20}
          color={'#666666'}
        />
      )}
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={[styles.input, addOnTextInputStyle]}
        placeholder={placeholder}
        onChangeText={onChange}
        value={valueString}
        keyboardType={keyboardType}
        autoCapitalize={isCapitalized ? 'characters' : 'none'}
        placeholderTextColor={'#666666'}
        lineColorAndroid="transparent"
        maxLength={maxLength}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />

      {icon && iconAlling === 'right' && (
        <Icon
          onPress={onIconPress}
          style={[styles.icon, { ...iconStyle }]}
          name={icon}
          size={20}
          color={'#666666'}
        />
      )}
      {iconButton.icon && (
        <Pressable onPress={iconButton.onPress}>
          <Icon
            style={styles.icon}
            name={iconButton.icon}
            size={20}
            color={iconButton.color}
          />
        </Pressable>
      )}
    </View>
  )
}
