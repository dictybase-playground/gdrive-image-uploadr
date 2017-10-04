//@flow
import React, { Component } from "react"
import NotificationSystem from "react-notification-system"
import { connect } from "react-redux"
import RejectedFilesDisplay from "common/components/RejectedFilesDisplay"
import UploadErrorsDisplay from "common/components/UploadErrorsDisplay"
import type { noteState } from "app/reducers/notificationReducer"

type Props = {
  notification: noteState,
}

class NotificationPopup extends Component<Props> {
  notificationSystem: ?NotificationSystem

  componentDidMount = () => {
    this.notificationSystem = this.refs.notificationSystem
  }

  //based on notification type, trigger the appropriate notification
  componentWillReceiveProps = props => {
    if (
      this.notificationSystem !== null &&
      this.notificationSystem !== undefined
    ) {
      if (props.notification.notificationType === "SUCCESS") {
        this.notificationSystem.addNotification({
          title: "Successful upload",
          message: `Uploaded total ${props.notification
            .notificationData} images`,
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
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />
  }
}

//map required data from state to props of this component
const mapStateToProps = state => {
  return {
    notification: state.notifications,
  }
}

export default connect(mapStateToProps)(NotificationPopup)
