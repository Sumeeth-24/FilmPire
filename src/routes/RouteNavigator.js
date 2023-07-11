import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './RootNavigation'
import routes from './routes'
import { moderateScale } from 'react-native-size-matters'

const Stack = createNativeStackNavigator()

export default function RouteNavigater() {
  
  return (
    <NavigationContainer
      ref={navigationRef}>
      <Stack.Navigator>
        {routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={({ navigation }) => ({
              ...route.options,
              title: route.options.title,
              headerStyle: {
                backgroundColor: '#04020d',
              },
              headerTitleStyle: {
                fontSize: moderateScale(16),
              },
              headerTintColor:'#fff',
            //  headerLeft: () => <HeaderLeft navigation={navigation} />,
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
