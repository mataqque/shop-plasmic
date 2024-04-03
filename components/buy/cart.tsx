import { useSelector } from 'react-redux';
import { AllProducts } from '../globalslice/cartbuy.slice';
import { DataProvider } from '@plasmicapp/loader-nextjs';
import { IProductSchema } from '../globalslice/interface';
import React from 'react';

export const CartComponent = ({ className, children }: { className: string; children: any }) => {
	const data = useSelector(AllProducts);
	console.log(data);
	return (
		<div className={className}>
			<DataProvider name='products' data={data}>
				{data.map((product: IProductSchema, index: number) => {
					return (
						<>
							<DataProvider name='dataProduct' data={product}>
								{children}
							</DataProvider>
						</>
					);
				})}
			</DataProvider>
		</div>
	);
};
