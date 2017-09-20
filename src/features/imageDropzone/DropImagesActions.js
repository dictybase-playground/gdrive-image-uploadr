import RejectedFilesDisplay from "common/components/RejectedFilesDisplay"
import React, { Component } from "react"
import { addNotification } from "features/notificationPopup/NotificationActions"

const dropImages = (accepted, rejected) => {
  if (rejected.length > 0) {
    console.log("error")
    /*dispatch(addNotification(({
      level: "error",
      title: "Error",
      message: "Rejected files",
      position: "tc",
      children: <RejectedFilesDisplay rejected={rejected} />,
      autoDismiss: 0,
    })))*/
  }
  return {
    type: "DROP_IMAGES",
    payload: accepted,
  }
}

export default dropImages
