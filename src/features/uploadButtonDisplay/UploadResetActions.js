import { uploadAllImages, imageResponse } from "common/utils/upload"
import { addNotification } from "features/notificationPopup/NotificationActions"
import UploadErrorsDisplay from "common/components/UploadErrorsDisplay"
import React from "react"

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
  dispatch(setLoading(true))
  let curState = getState().images.data
  uploadAllImages(curState)
    .then(imageResponse, errorNW => dispatch(handleNetworkError(errorNW)))
    .then(responses => dispatch(handleUpload(responses)))
    .catch(errorHttp => dispatch(handleHttpError(errorHttp)))
}

const handleNetworkError = error => dispatch => {
  console.log("in handle nw")
  dispatch(setLoading(false))
  dispatch(
    addNotification({
      title: "Network error",
      message: error.message,
      level: "error",
      position: "tc",
      autoDismiss: 0,
    }),
  )
}

const handleHttpError = errResponses => dispatch => {
  console.log("in handle http")
  dispatch(setLoading(false))
  Promise.all(errResponses.map(err => err.json())).then(errors => {
    dispatch(
      addNotification({
        level: "error",
        title: "Upload error",
        message: "Error in uploading images",
        position: "tc",
        children: <UploadErrorsDisplay errors={errors} />,
        autoDismiss: 0,
      }),
    )
  })
}

const handleUpload = responses => dispatch => {
  console.log("in handle upload")
  dispatch(uploadImages())
  dispatch(
    addNotification({
      title: "Successful upload",
      message: `Uploaded total ${responses.length} images`,
      level: "success",
      position: "tc",
      autoDismiss: 10,
    }),
  )
}
