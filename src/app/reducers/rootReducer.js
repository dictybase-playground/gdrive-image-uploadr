import { combineReducers } from "redux"
import { uploadImages } from "./imagesReducer"
import { notification } from "./notificationReducer"

//root reducer created to be used in store, by combining all individual reducers

const rootReducer = combineReducers({
  images: uploadImages,
  notifications: notification,
})

export default rootReducer
