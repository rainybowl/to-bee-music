import React from 'react'
import { connect } from 'react-redux'

// import NewTodo from './NewTodo'
import { getSongs } from '../actions'
import store from '../store'

const Songs = ({songs, dispatch}) => (

  <div>
    songs
  </div>
)

function mapStateToProps(songs) {
  return {
    songs
  }
}

export default connect(mapStateToProps)(Songs)
