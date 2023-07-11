/**
 * Description : used to add space on the view when IOS keyboard is open.
 * Usage : Import the component and use as follows : {Platform.OS === 'ios' && <KeyboardAvoidingViewCustom />}
 */
import React, { Component } from 'react'
import {
  Keyboard,
  LayoutAnimation,
  View,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
})

// From: https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02
const defaultAnimation = {
  duration: 300,
  create: {
    duration: 200,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 100,
  },
}

export default class KeyboardAvoidingViewCustom extends Component {
  static defaultProps = {
    topSpacing: 0,
    onToggle: () => null,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      keyboardSpace: 0,
      isKeyboardOpened: false,
    }
    this._listeners = null
    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this)
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this)
  }

  componentDidMount() {
    const updateListener =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow'
    const resetListener =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide'
    this._listeners = [
      Keyboard.addListener(updateListener, this.updateKeyboardSpace),
      Keyboard.addListener(resetListener, this.resetKeyboardSpace),
    ]
  }

  componentWillUnmount() {
    this._listeners.forEach((listener) => listener.remove())
  }

  updateKeyboardSpace(event) {
    if (!event.endCoordinates || this.state.isKeyboardOpened) {
      return
    }

    let animationConfig = defaultAnimation
    if (Platform.OS === 'ios') {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity,
      )
    }
    LayoutAnimation.configureNext(animationConfig)

    const screenHeight = Dimensions.get('window').height

    const keyboardSpace =
      screenHeight -
      event.endCoordinates.screenY +
      this.props.topSpacing -
      (event.endCoordinates.screenY > 500 ? 35 : 0)
    this.setState(
      {
        keyboardSpace,
        isKeyboardOpened: true,
      },
      this.props.onToggle(true, keyboardSpace),
    )
  }

  resetKeyboardSpace(event) {
    if (!this.state.isKeyboardOpened) {
      return
    }

    let animationConfig = defaultAnimation
    if (Platform.OS === 'ios') {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity,
      )
    }
    LayoutAnimation.configureNext(animationConfig)

    this.setState(
      {
        keyboardSpace: 0,
        isKeyboardOpened: false,
      },
      this.props.onToggle(false, 0),
    )
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { height: this.state.keyboardSpace },
          this.props.style,
        ]}
      />
    )
  }
}
