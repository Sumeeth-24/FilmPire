import React, { useEffect, useMemo } from 'react'
import { Pressable, Text, View } from 'react-native'
import styles  from './styles'

 const TobTabNavigator = ({
  activeTab,
  setActiveTab,
  screen1Title,
  screen2Title,
}) => {

  const onPressTab1 = () => {
    setActiveTab(1)
  }

  const onPressTab2 = () => {
    setActiveTab(2)
  }

  const buttons = useMemo(() => {
    if (activeTab === 1) {
      return (
        <>
          <Pressable
            style={[styles.primaryTab, styles.tab1Style]}
            onPress={onPressTab1}
          >
            <Text style={styles.primaryText}>{(screen1Title)}</Text>
          </Pressable>
          <Pressable
            style={[styles.outlineTab, styles.tab2Style]}
            onPress={onPressTab2}
          >
            <Text style={styles.outlineText}>{(screen2Title)}</Text>
          </Pressable>
        </>
      )
    } else if (activeTab === 2) {
      return (
        <>
          <Pressable
            style={[styles.outlineTab, styles.tab1Style]}
            onPress={onPressTab1}
          >
            <Text style={styles.outlineText}>{(screen1Title)}</Text>
          </Pressable>
          <Pressable
            style={[styles.primaryTab, styles.tab2Style]}
            onPress={onPressTab2}
          >
            <Text style={styles.primaryText}>{(screen2Title)}</Text>
          </Pressable>
        </>
      )
    }
  }, [activeTab])

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginVertical: 20,
      }}
    >
      {buttons}
    </View>
  )
}

export default TobTabNavigator