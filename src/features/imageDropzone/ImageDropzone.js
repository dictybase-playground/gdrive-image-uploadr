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
  //dropImages function gets the list of accepted and rejected filel list from ImageDropZone component
  const dropImages = (accepted: Array<Object>, rejected: ?Array<Object>) => {
    //dispatch the acceptImages action
    props.acceptImages(accepted)

    //dispatch the rejectImagesNotification action
    if (rejected !== null && rejected !== undefined && rejected.length > 0) {
      const type = "ERROR_REJECTED_IMAGES"
      props.rejectImagesNotification(type, rejected)
    }
  }

  //ImageDropZone component that triggers the dropImages function when images are dropped
  return (
    <ImageDropzoneStyle onDrop={dropImages} accept="image/*">
      <Text p={1} f={2}>
        Drop images here or click to select images to upload
      </Text>
    </ImageDropzoneStyle>
  )
}

//connect the required actions to the component as props so it can be dispatched as required
export default connect(null, { acceptImages, rejectImagesNotification })(
  ImageDropzone,
)
