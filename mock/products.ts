import { IProductSchema } from '@/components/globalslice/interface';

export const item: IProductSchema = {
	id: 2,
	cant: 2,
	selected: true,
	liked: true,
	attributes: {
		nameproduct: 'Peluche Stitch',
		date: '2024-03-05',
		description: 'Peluche Stitch',
		slug: 'peluche-stitch',
		price: 55,
		resume: 'Peluche Stitch',
		quantity: 10,
		discount: 40,
		like: 1,
		createdAt: '2024-03-21T19:54:36.775Z',
		updatedAt: '2024-03-21T19:54:37.569Z',
		publishedAt: '2024-03-21T19:54:37.566Z',
		cant: 2,

		image: {
			data: [
				{
					id: 3,
					attributes: {
						name: 'peluche-stitch.jpg',
						alternativeText: null,
						caption: null,
						width: 800,
						height: 800,
						formats: {
							small: {
								ext: '.jpg',
								url: '/uploads/xsmall_peluche_stitch_4ff80c467f.jpg',
								hash: 'xsmall_peluche_stitch_4ff80c467f',
								mime: 'image/jpeg',
								name: 'xsmall_peluche-stitch.jpg',
								path: null,
								size: 1.57,
								width: 64,
								height: 64,
							},
							thumbnail: {
								ext: '.jpg',
								url: '/uploads/thumbnail_peluche_stitch_4ff80c467f.jpg',
								hash: 'thumbnail_peluche_stitch_4ff80c467f',
								mime: 'image/jpeg',
								name: 'thumbnail_peluche-stitch.jpg',
								path: null,
								size: 5.19,
								width: 156,
								height: 156,
							},
						},
						hash: 'peluche_stitch_4ff80c467f',
						ext: '.jpg',
						mime: 'image/jpeg',
						size: 64.76,
						url: '/uploads/peluche_stitch_4ff80c467f.jpg',
						previewUrl: null,
						provider: 'local',
						provider_metadata: null,
						createdAt: '2024-03-21T19:54:32.918Z',
						updatedAt: '2024-03-21T19:54:32.918Z',
					},
				},
			],
		},
		category: {},
	},
};
