import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/rootReducer"

const configureStore = () => {
  console.log("called store")
  const store = createStore(rootReducer)
  return store
}

export default configureStore
