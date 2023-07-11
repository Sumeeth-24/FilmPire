import React from 'react'
import AppFooterK from '../appFooter/AppFooterK'
import { View } from 'react-native'
import IconNavigationK from '../bottomNavigation/IconNavigationK'

const ScreenFooter = ({
  testID,
  showAppFooter = false,
  showBottomNavigation = false,
  bottomNavigationOptions = {},
}) => {
  return (
    <View testID={testID}>
      {showBottomNavigation && (
        <IconNavigationK icons={bottomNavigationOptions.icons} />
      )}
      {showAppFooter && <AppFooterK />}
    </View>
  )
}

export default ScreenFooter
