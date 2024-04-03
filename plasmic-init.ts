import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';
import { SectionHeader } from './components/sectionHeader/sectionheader';
import { Div } from './components/basic/div';
import { TargetCategory } from './components/TargetCategory/TargetCategory';
import { CartComponent } from './components/buy/cart';
import { ButtonResetDataCart } from './components/basic/buttonReset';

export const PLASMIC = initPlasmicLoader({
	projects: [
		{
			id: 'niDSegE7wd11U7wAjyGDNC',
			token: 'XTDoEG6N3yfV48RKSfJ9XJEVXE3xlfJWLkHqAe6LdcZTi6NQ0VtMwFADGl5Zj6U8PaR48YhhHcxAkxhk0QQ',
		},
	],
	// By default Plasmic will use the last published version of your project.
	// For development, you can set preview to true, which will use the unpublished
	// project, allowing you to see your designs without publishing.  Please
	// only use this for development, as this is significantly slower.
	preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(SectionHeader, {
	name: 'SectionHeader',
	props: {
		children: {
			type: 'slot',
		},
		gallery: {
			type: 'array',
			itemType: {
				type: 'object',
				fields: {
					url: 'imageUrl',
					title: 'string',
					link: 'string',
				},
			},
		},
	},
});

PLASMIC.registerComponent(TargetCategory, {
	name: 'CardShop',
	props: {
		children: {
			type: 'slot',
		},
		product: {
			type: 'array',
		},
	},
});

PLASMIC.registerComponent(Div, {
	name: 'div',
	props: {
		children: {
			type: 'slot',
		},
	},
});

PLASMIC.registerComponent(CartComponent, {
	name: 'CartComponent',
	providesData: true,
	props: {
		children: {
			type: 'slot',
		},
	},
});

PLASMIC.registerComponent(ButtonResetDataCart, {
	name: 'Botón Resetear',
	providesData: true,
	props: {
		children: {
			type: 'slot',
		},
	},
});
