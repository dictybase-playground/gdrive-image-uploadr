export const notification = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return { ...state, notificationData: action.notification }
    case "REJECT_IMG_NOTIFICATION":
      return {
        ...state,
        notificationType: action.notificationType,
        rejected: action.rejected,
      }
    default:
      return state
  }
}
