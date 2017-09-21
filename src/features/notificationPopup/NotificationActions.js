export const addNotification = notification => {
  return {
    type: "ADD_NOTIFICATION",
    notification,
  }
}

export const rejectImagesNotification = (notificationType, rejected) => {
  return {
    type: "REJECT_IMG_NOTIFICATION",
    notificationType,
    rejected,
  }
}
