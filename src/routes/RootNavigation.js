import {
    createNavigationContainerRef,
    StackActions,
  } from '@react-navigation/native'
  
  export const navigationRef = createNavigationContainerRef()
  
  export function navigate(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params)
    } else {
      console.log('not ready')
    }
  }
  
  export function pop(page = 1) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.pop(1))
    } else {
      console.log('not ready')
    }
  }
  