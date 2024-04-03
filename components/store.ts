'use client';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import cartbuySlice, { CartbuyState } from './globalslice/cartbuy.slice';

interface RootState {
	cartbuySlice: CartbuyState;
}

const middleware = [];
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartbuySlice'],
};

const rootReducer = combineReducers<any>({
	cartbuySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
