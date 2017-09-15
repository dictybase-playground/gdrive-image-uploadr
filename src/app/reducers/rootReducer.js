import { combineReducers } from "redux"
import { uploadImages } from "./images"

const rootReducer = combineReducers({
  images: uploadImages,
})

export default rootReducer
