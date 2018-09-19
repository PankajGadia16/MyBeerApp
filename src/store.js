import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import reducer from './reducers'

export default createStoreFunction = (client) => {
    return createStore(reducer, applyMiddleware(axiosMiddleware(client)))
}