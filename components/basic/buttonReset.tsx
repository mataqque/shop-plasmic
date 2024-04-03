import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { resetItems, updateItems } from '../globalslice/cartbuy.slice';
export const ButtonResetDataCart = ({ className, children }: any) => {
	const dispatch = useDispatch();

	return (
		<button
			className={className}
			onClick={() => {
				dispatch(resetItems());
			}}
		>
			{children}
		</button>
	);
};
