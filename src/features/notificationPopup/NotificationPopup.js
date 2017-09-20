import React, { Component } from "react"
import NotificationSystem from "react-notification-system"
import { connect } from "react-redux"
import { addNotification } from "features/notificationPopup/NotificationActions"

class NotificationPopup extends Component {
  componentDidMount = () => {
    this.notificationSystem = this.refs.notificationSystem
  }

  componentWillReceiveProps = props => {
    this.notificationSystem.addNotification(props.notification)
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notifications.notification,
  }
}

export default connect(mapStateToProps, { addNotification })(NotificationPopup)
