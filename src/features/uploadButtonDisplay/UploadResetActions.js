import { uploadAllImages, imageResponse } from "common/utils/upload"

export const resetImages = () => {
  return {
    type: "RESET_IMAGES",
  }
}

const setLoading = () => {
  return {
    type: "SET_LOADING",
  }
}

const uploadImages = () => {
  return {
    type: "UPLOAD_IMAGES",
  }
}

export const onUpload = () => (dispatch, getState) => {
  console.log("in upload")
  dispatch(setLoading)
  let curState = getState().images.data
  console.log(curState)
  return uploadAllImages(curState)
    .then(imageResponse, handleNetworkError)
    .then(handleUpload)
    .catch(handleHttpError)
}

const handleNetworkError = error => (dispatch, getState) => {
  console.log("in handleNetworkError")
  dispatch(setLoading)
  this.notification.addNotification({
    title: "Network error",
    message: error.message,
    level: "error",
    position: "tc",
    autoDismiss: 0,
  })
}

const handleHttpError = errResponses => (dispatch, getState) => {
  console.log("in handleHttpError")
  dispatch(setLoading)
  Promise.all(errResponses.map(err => err.json())).then(errors => {
    this.notification.addNotification({
      level: "error",
      title: "Upload error",
      message: "Error in uploading images",
      position: "tc",
      // children: <UploadErrorsDisplay errors={errors} />,
      autoDismiss: 0,
    })
  })
}

const handleUpload = responses => (dispatch, getState) => {
  console.log("in handleupload")
  dispatch(uploadImages)
  this.notification.addNotification({
    title: "Successful upload",
    message: `Uploaded total ${responses.length} images`,
    level: "success",
    position: "tc",
    autoDismiss: 10,
  })
}
