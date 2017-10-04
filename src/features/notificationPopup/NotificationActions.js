//@flow

export type noteAction =
  | {
      type: "SUCCESS_NOTIFICATION",
      notificationType: string,
      numImages: number,
    }
  | {
      type: "REJECT_IMG_NOTIFICATION",
      notificationType: string,
      rejected: Array<string>,
    }
  | {
      type: "NW_ERROR_NOTIFICATION",
      notificationType: string,
      errorMsg: string,
    }
  | {
      type: "HTTP_ERROR_NOTIFICATION",
      notificationType: string,
      errors: Array<string>,
    }

//Notification action creators that will then be imported and dispatched from other components as required

export const rejectImagesNotification = (
  notificationType: string,
  rejected: Array<string>,
): noteAction => {
  return {
    type: "REJECT_IMG_NOTIFICATION",
    notificationType,
    rejected,
  }
}

export const nwErrorNotification = (
  notificationType: string,
  errorMsg: string,
): noteAction => {
  return {
    type: "NW_ERROR_NOTIFICATION",
    notificationType,
    errorMsg,
  }
}

export const httpErrorNotification = (
  notificationType: string,
  errors: Array<string>,
): noteAction => {
  return {
    type: "HTTP_ERROR_NOTIFICATION",
    notificationType,
    errors,
  }
}

export const successNotification = (
  notificationType: string,
  numImages: number,
): noteAction => {
  return {
    type: "SUCCESS_NOTIFICATION",
    notificationType,
    numImages,
  }
}
