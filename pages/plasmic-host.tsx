import * as React from 'react';
import { PlasmicCanvasHost, DataProvider, GlobalActionsProvider } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';
import { Providers } from '@/components/provider';
import { useDispatch } from 'react-redux';
import { resetItems } from '@/components/globalslice/cartbuy.slice';
import { GlobalContext } from '@/components/context/globalcontext';

export default function PlasmicHost() {
	return (
		PLASMIC && (
			<Providers>
				<GlobalContext>
					<link href='./output.css' rel='stylesheet'></link>
					<PlasmicCanvasHost />
				</GlobalContext>
			</Providers>
		)
	);
}
