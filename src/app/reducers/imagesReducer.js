const initialState = { data: [], loading: false }

export const uploadImages = (state = initialState, action) => {
  switch (action.type) {
    case "DROP_IMAGES":
      let newData = state.data.concat(action.payload)
      return { ...state, data: newData }
    default:
      return state
  }
}
