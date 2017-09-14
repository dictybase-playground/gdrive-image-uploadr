import React from "react"
import ReactDOM from "react-dom"
import App from "app/layout/App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux"
import configureStore from "./app/store/configureStore"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
registerServiceWorker()
