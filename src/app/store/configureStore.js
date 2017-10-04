import { createStore, applyMiddleware } from "redux"
import rootReducer from "app/reducers/rootReducer"
import thunk from "redux-thunk"

//create store with rootreducer and thunk middleware

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}

export default configureStore
