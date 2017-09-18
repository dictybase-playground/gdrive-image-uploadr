const initialState = { data: [], loading: false }

export const uploadImages = (state = initialState, action) => {
  switch (action.type) {
    case "DROP_IMAGES":
      let newData = state.data.concat(action.payload)
      return { ...state, data: newData }
    case "RESET_IMAGES":
      return { ...state, data: [] }
    case "SET_LOADING":
      console.log("in set Loading")
      return { ...state, loading: action.loading }
    case "UPLOAD_IMAGES":
      console.log("in upload image reducer")
      return {
        ...state,
        data: [],
        loading: false,
      }
    default:
      return state
  }
}
