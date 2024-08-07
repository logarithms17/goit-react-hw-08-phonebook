
import contactsReducer from './contactSlice'
import filterReducer from './filterSlice'
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})

// const enhancer = devToolsEnhancer()

// export const store = createStore(rootReducer, enhancer)

export const store = configureStore({
    reducer: rootReducer,
})