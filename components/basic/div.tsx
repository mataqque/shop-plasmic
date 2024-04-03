import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { updateItems } from '../globalslice/cartbuy.slice';
import { item } from '@/mock/products';
export const Div = ({ className, children }: any) => {
	const dispatch = useDispatch();

	return (
		<div
			className={className}
			onClick={() => {
				dispatch(updateItems(item));
			}}
		>
			{children}
		</div>
	);
};
