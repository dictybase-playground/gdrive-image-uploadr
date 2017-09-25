import { uploadAllImages, imageResponse } from "common/utils/upload"
import {
  nwErrorNotification,
  httpErrorNotification,
  successNotification,
} from "features/notificationPopup/NotificationActions"

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
  const type = "ERROR_NETWORK"
  dispatch(setLoading(false))
  dispatch(nwErrorNotification(type, error.message))
}

const handleHttpError = errResponses => dispatch => {
  dispatch(setLoading(false))
  let errorResponses = []
  errorResponses.concat(errResponses)
  const type = "ERROR_HTTP"
  Promise.all(errorResponses.map(err => err.json())).then(errors => {
    dispatch(httpErrorNotification(type, errors))
  })
}

const handleUpload = responses => dispatch => {
  dispatch(uploadImages())
  const type = "SUCCESS"
  dispatch(successNotification(type, responses.length))
}
