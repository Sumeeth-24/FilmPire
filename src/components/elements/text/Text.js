import { Text } from 'react-native'
import React from 'react'

export default function Text_({ testID, children, style ,numberOfLines }) {
  return <Text testID={testID} style={{ color: '#FFFFFF', ...style }} numberOfLines={numberOfLines}>{children}</Text>
}