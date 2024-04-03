'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { GlobalContext } from './context/globalcontext';
const persistor = persistStore(store);
export function Providers({ children }: any) {
	return (
		<Provider store={store}>
			<GlobalContext>
				<PersistGate loading={null} persistor={persistor}>
					{children}
				</PersistGate>
			</GlobalContext>
		</Provider>
	);
}
