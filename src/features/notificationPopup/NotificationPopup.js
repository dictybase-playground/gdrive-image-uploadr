import React, { Component } from "react"
import NotificationSystem from "react-notification-system"
import { connect } from "react-redux"
import { addNotification } from "features/notificationPopup/NotificationActions"
import RejectedFilesDisplay from "common/components/RejectedFilesDisplay"

class NotificationPopup extends Component {
  componentDidMount = () => {
    this.notificationSystem = this.refs.notificationSystem
  }

  componentWillReceiveProps = props => {
    if (props.notification.notificationType === "ERROR_REJECTED_IMAGES") {
      this.notificationSystem.addNotification({
        level: "error",
        title: "Error",
        message: "Rejected files",
        position: "tc",
        children: (
          <RejectedFilesDisplay rejected={props.notification.rejected} />
        ),
        autoDismiss: 0,
      })
    } else {
      console.log(props.notificationType)
      this.notificationSystem.addNotification(
        props.notification.notificationData,
      )
    }
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />
  }
}

const mapStateToProps = state => {
  console.log(state.notifications)
  return {
    notification: state.notifications,
  }
}

export default connect(mapStateToProps, { addNotification })(NotificationPopup)
