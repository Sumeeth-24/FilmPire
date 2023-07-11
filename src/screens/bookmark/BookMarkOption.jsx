import React, { useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import TopTabNavigator from './components/tobTabNavigator/TobTabNavigator'
import Tab1Screen from './components/tab1Screen/Tab1Screen'
import Tab2Screen from './components/tab2Screen/Tab2Screen'

const BookMarkOption = ({navigation}) => {

  const [activeTab, setActiveTab] = useState(1)
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#04020d' }}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <TopTabNavigator
          screen1Title="Your Collections" 
          screen2Title="Your Reviews"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        {activeTab === 1 ? (
          <Tab1Screen
            navigation={navigation}
          />
        ) : (
          <Tab2Screen />
        )}
      </View>
    </View>
 
   
  </SafeAreaView>
  )
}

export default BookMarkOption