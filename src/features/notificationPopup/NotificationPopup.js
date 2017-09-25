import React, { Component } from "react"
import NotificationSystem from "react-notification-system"
import { connect } from "react-redux"
import RejectedFilesDisplay from "common/components/RejectedFilesDisplay"
import UploadErrorsDisplay from "common/components/UploadErrorsDisplay"

class NotificationPopup extends Component {
  componentDidMount = () => {
    this.notificationSystem = this.refs.notificationSystem
  }

  componentWillReceiveProps = props => {
    if (props.notification.notificationType === "SUCCESS") {
      this.notificationSystem.addNotification({
        title: "Successful upload",
        message: `Uploaded total ${props.notification.notificationData} images`,
        level: "success",
        position: "tc",
        autoDismiss: 10,
      })
    } else if (
      props.notification.notificationType === "ERROR_REJECTED_IMAGES"
    ) {
      this.notificationSystem.addNotification({
        level: "error",
        title: "Error",
        message: "Rejected files",
        position: "tc",
        children: (
          <RejectedFilesDisplay
            rejected={props.notification.notificationData}
          />
        ),
        autoDismiss: 0,
      })
    } else if (props.notification.notificationType === "ERROR_NETWORK") {
      this.notificationSystem.addNotification({
        title: "Network error",
        message: props.notification.notificationData,
        level: "error",
        position: "tc",
        autoDismiss: 0,
      })
    } else if (props.notification.notificationType === "ERROR_HTTP") {
      this.notificationSystem.addNotification({
        level: "error",
        title: "Upload error",
        message: "Error in uploading images",
        position: "tc",
        children: (
          <UploadErrorsDisplay errors={props.notification.notificationData} />
        ),
        autoDismiss: 0,
      })
    }
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notifications,
  }
}

export default connect(mapStateToProps)(NotificationPopup)
