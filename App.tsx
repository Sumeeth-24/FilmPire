import * as React from 'react';
import RouteNavigater from './src/routes/RouteNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';


const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(false);

  // useEffect(async () => {
  //   const appData = await AsyncStorage.getItem('isAppFirstLaunched');
  //   if (appData == null) {
  //     setIsAppFirstLaunched(true);
  //     AsyncStorage.setItem('isAppFirstLaunched', 'false');
  //   } else {
  //     setIsAppFirstLaunched(false);
  //   }

  //   // AsyncStorage.removeItem('isAppFirstLaunched');
  // }, []);

  return (
   // isAppFirstLaunched != null && (
    <RouteNavigater></RouteNavigater>
    // isAppFirstLaunched != null && (
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{headerShown: false}}>
    //       {isAppFirstLaunched && (
    //         <Stack.Screen
    //           name="OnboardingScreen"
    //           component={OnboardingScreen}
    //         />
    //       )}
    //       <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // )
  );
};

export default App;