import { combineReducers } from "redux"
import { uploadImages } from "./imagesReducer"

const rootReducer = combineReducers({
  images: uploadImages,
})

export default rootReducer
