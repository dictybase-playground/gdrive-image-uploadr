//@flow
import type { noteAction } from "features/notificationPopup/NotificationActions"

export type noteState = {
  notificationType: string,
  notificationData: Array<string> | string | number,
}

const initialState = {
  notificationType: "",
  notificationData: "",
}

export const notification = (
  state: noteState = initialState,
  action: noteAction,
): noteState => {
  switch (action.type) {
    case "SUCCESS_NOTIFICATION":
      return {
        ...state,
        notificationType: action.notificationType,
        notificationData: action.numImages,
      }
    case "REJECT_IMG_NOTIFICATION":
      return {
        ...state,
        notificationType: action.notificationType,
        notificationData: action.rejected,
      }
    case "NW_ERROR_NOTIFICATION":
      return {
        ...state,
        notificationType: action.notificationType,
        notificationData: action.errorMsg,
      }
    case "HTTP_ERROR_NOTIFICATION":
      return {
        ...state,
        notificationType: action.notificationType,
        notificationData: action.errors,
      }
    default:
      return state
  }
}
