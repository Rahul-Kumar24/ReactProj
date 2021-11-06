import {combineReducers } from 'redux';
import idReducer from './Idreducer'
import priceReducer from './priceReducer'
const rootReducer = combineReducers({
id : idReducer,
price:priceReducer,
})
export default rootReducer;