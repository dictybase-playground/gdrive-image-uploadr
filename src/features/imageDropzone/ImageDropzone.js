import React from "react"
import { Text } from "rebass"
import ImageDropzoneStyle from "features/imageDropzone/ImageDropzoneStyle"
//import RejectedFilesDisplay from "common/components/RejectedFilesDisplay"
import { acceptImages } from "features/imageDropzone/DropImagesActions"
import { rejectImagesNotification } from "features/notificationPopup/NotificationActions"
import { connect } from "react-redux"

const ImageDropzone = props => {
  const dropImages = (accepted, rejected) => {
    props.acceptImages(accepted)

    if (rejected.length > 0) {
      const type = "ERROR_REJECTED_IMAGES"
      props.rejectImagesNotification(type, rejected)
      /*props.addNotification({
        level: "error",
        title: "Error",
        message: "Rejected files",
        //position: "tc",
        children: <RejectedFilesDisplay rejected={rejected} />,
        autoDismiss: 0,
      })*/
    }
  }

  return (
    <ImageDropzoneStyle onDrop={dropImages} accept="image/*">
      <Text p={1} f={2}>
        Drop images here or click to select images to upload
      </Text>
    </ImageDropzoneStyle>
  )
}

export default connect(null, { acceptImages, rejectImagesNotification })(
  ImageDropzone,
)
