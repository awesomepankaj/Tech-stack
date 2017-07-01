import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate = () => {
    LayoutAnimation.spring()
  }

  renderDescription = () => {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const {titleStyle} = styles
    const {id, title} = this.props.library


    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

ListItem.propTypes = {
  library: PropTypes.object,
  selectLibrary: PropTypes.func,
  expanded: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
