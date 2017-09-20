import { combineReducers } from "redux"
import { uploadImages } from "./imagesReducer"
import { notification } from "./notificationReducer"

const rootReducer = combineReducers({
  images: uploadImages,
  notifications: notification,
})

export default rootReducer
