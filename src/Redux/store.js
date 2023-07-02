import thunk from "redux-thunk"
import { reducer as InfosecReducer } from "./InfosecData/reducer"
import { reducer as LoginReducer } from "./Login/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"

const rootReducer = combineReducers({ LoginReducer, InfosecReducer })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store }