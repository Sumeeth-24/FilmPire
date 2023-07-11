import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CircularRate = ({value}) => {

  return (
  <View style={styles.button}>
    <Text style={styles.buttonText}>{value}</Text>
  </View>
  )
}

export default CircularRate