import React from 'react'
import PropTypes from 'prop-types';
import { Text, View } from 'react-native'

const Header = (props) => {

  let { viewStyle, textStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

Header.propTypes = {
  headerText: PropTypes.string
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

export { Header }
