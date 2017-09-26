//@flow
import React from "react"
import { Text } from "rebass"
import ImageDropzoneStyle from "features/imageDropzone/ImageDropzoneStyle"
import { acceptImages } from "features/imageDropzone/DropImagesActions"
import { rejectImagesNotification } from "features/notificationPopup/NotificationActions"
import { connect } from "react-redux"

type Props = {
  acceptImages: (accepted: Array<Object>) => void,
  rejectImagesNotification: (type: string, rejected: ?Array<Object>) => void,
}

const ImageDropzone = (props: Props) => {
  const dropImages = (accepted: Array<Object>, rejected: ?Array<Object>) => {
    props.acceptImages(accepted)

    if (rejected !== null && rejected !== undefined && rejected.length > 0) {
      const type = "ERROR_REJECTED_IMAGES"
      props.rejectImagesNotification(type, rejected)
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
