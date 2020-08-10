import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderHistory from './order-history/OrderHistory'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {username, imageUrl} = props
  return (
    <div id="user-home">
      <div id="user-profile">
        <h3>Welcome, {username}</h3>
        <img src={imageUrl} />
      </div>
      <OrderHistory />
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
