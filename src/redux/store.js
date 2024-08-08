
import contactsReducer from './contactSlice'
import filterReducer from './filterSlice'
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer
})

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
    // blacklist: ['contacts', 'filter'],
}

const persistedReducer = persistReducer(authPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

