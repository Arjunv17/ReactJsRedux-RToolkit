import {createStore } from 'redux'
import  authReducer  from './Reducer/reducer'

const store = createStore(authReducer)
export default store;