import { uploadAllImages, imageResponse } from "common/utils/upload"
import NotificationSystem from "react-notification-system"

export const resetImages = () => {
  return {
    type: "RESET_IMAGES",
  }
}

const setLoading = loading => {
  return {
    type: "SET_LOADING",
    loading,
  }
}

export const uploadImages = () => {
  return {
    type: "UPLOAD_IMAGES",
  }
}

export const onUpload = () => (dispatch, getState) => {
  console.log("in upload")
  dispatch(setLoading(true))
  let curState = getState().images.data
  uploadAllImages(curState)
    .then(imageResponse, errorNW => dispatch(handleNetworkError(errorNW)))
    .then(responses => dispatch(handleUpload(responses)))
    .catch(errorHttp => dispatch(handleHttpError(errorHttp)))
}

const handleNetworkError = error => dispatch => {
  console.log("in handleNetworkError")
  dispatch(setLoading(false))
  /*this.notification.addNotification({
    title: "Network error",
    message: error.message,
    level: "error",
    position: "tc",
    autoDismiss: 0,
  })*/
}

const handleHttpError = errResponses => dispatch => {
  console.log("in handleHttpError")
  dispatch(setLoading(false))
  Promise.all(errResponses.map(err => err.json())).then(errors => {
    /*this.notification.addNotification({
      level: "error",
      title: "Upload error",
      message: "Error in uploading images",
      position: "tc",
      // children: <UploadErrorsDisplay errors={errors} />,
      autoDismiss: 0,
    })*/
  })
}

const handleUpload = responses => dispatch => {
  console.log("in handleupload" + responses)
  dispatch(uploadImages())
  /*this.notification.addNotification({
    title: "Successful upload",
    message: `Uploaded total ${responses.length} images`,
    level: "success",
    position: "tc",
    autoDismiss: 10,
  })*/
}
