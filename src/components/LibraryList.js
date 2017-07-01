import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  renderRow = (library) => {
    return <ListItem library={library}/>
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  }
}

LibraryList.propTypes = {
  libraries: PropTypes.array
}

export default connect(mapStateToProps)(LibraryList)
