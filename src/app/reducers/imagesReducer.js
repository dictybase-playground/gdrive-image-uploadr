const initialState = { images: [], loading: false }

export const uploadImages = (state = initialState, action) => {
  switch (action.type) {
    case "DROP_IMAGES":
      return [...state.images, action.payload]
    default:
      return state
  }
}
