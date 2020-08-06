import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {username, imageUrl} = props
  return (
    <div>
      <h3>Welcome, {username}</h3>
      <img src={imageUrl} />
      <h2> Order History Here: </h2>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.user.username,
    imageUrl: state.user.imageUrl
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  username: PropTypes.string,
  imageUrl: PropTypes.string
}
