import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductSchema } from './interface';

export interface CartbuyState {
	items: IProductSchema[];
	likeds: IProductSchema[];
	discount: number;
	delivery: number;
	total: number;
}

const cartbuySlice = createSlice({
	name: 'cartbuySlice',
	initialState: {
		items: [] as IProductSchema[],
		likeds: [] as IProductSchema[],
		discount: 0,
		delivery: 200,
		total: 0,
	} as CartbuyState,
	reducers: {
		updateItems: (state, action: PayloadAction<IProductSchema>) => {
			console.log(action.payload);
			state.items.push(action.payload);
		},
		resetItems: state => {
			state.items = [];
		},
	},
});

export const { updateItems, resetItems } = cartbuySlice.actions;
export default cartbuySlice.reducer;
export const AllProducts = (state: any) => state.cartbuySlice.items;
export const AllProductsLiked = (state: any) => state.cartbuySlice.likeds;
