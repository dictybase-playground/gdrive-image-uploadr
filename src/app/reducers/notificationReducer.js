export const notification = (state = {}, action) => {
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
