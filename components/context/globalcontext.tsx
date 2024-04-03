'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { DataProvider, GlobalActionsProvider } from '@plasmicapp/host';
import { useDispatch } from 'react-redux';
import { resetItems } from '../globalslice/cartbuy.slice';

// These are functions your app should implement.

// Users will be able to set these props in Studio.
interface AuthGlobalContextProps {
	// You might use this to override the auth URL to a test or local URL.
	authUrl?: string;
}

export const GlobalContext = ({ children, authUrl }: React.PropsWithChildren<AuthGlobalContextProps>) => {
	const dispatch = useDispatch();
	const actions = useMemo(
		() => ({
			udpate: (item: any) => {
				dispatch(resetItems(item));
			},
			reset: () => {
				dispatch(resetItems());
			},
		}),
		[]
	);

	return (
		<GlobalActionsProvider contextName='AuthGlobalContext' actions={actions}>
			{children}
		</GlobalActionsProvider>
	);
};
