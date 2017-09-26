//@flow
import type { imgAction } from "features/uploadButtonDisplay/UploadResetActions"

export type imgState = {
  data: Array<Object>,
  loading: boolean,
}

const initialState = { data: [], loading: false }

export const uploadImages = (
  state: imgState = initialState,
  action: imgAction,
): imgState => {
  switch (action.type) {
    case "DROP_IMAGES":
      let newData = state.data.concat(action.payload)
      return { ...state, data: newData }
    case "RESET_IMAGES":
      return { ...state, data: [] }
    case "SET_LOADING":
      return { ...state, loading: action.loading }
    case "UPLOAD_IMAGES":
      return {
        ...state,
        data: [],
        loading: false,
      }
    default:
      return state
  }
}
