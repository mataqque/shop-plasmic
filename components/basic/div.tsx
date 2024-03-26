import { ReactNode } from 'react';
export const Div = ({ children, props }: { children: ReactNode; props: any }) => {
	return <div {...props}></div>;
};
