export const rejectImagesNotification = (notificationType, rejected) => {
  return {
    type: "REJECT_IMG_NOTIFICATION",
    notificationType,
    rejected,
  }
}

export const nwErrorNotification = (notificationType, errorMsg) => {
  return {
    type: "NW_ERROR_NOTIFICATION",
    notificationType,
    errorMsg,
  }
}

export const httpErrorNotification = (notificationType, errors) => {
  return {
    type: "HTTP_ERROR_NOTIFICATION",
    notificationType,
    errors,
  }
}

export const successNotification = (notificationType, numImages) => {
  return {
    type: "SUCCESS_NOTIFICATION",
    notificationType,
    numImages,
  }
}
