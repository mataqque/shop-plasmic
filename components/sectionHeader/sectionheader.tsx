'use client';
//@ts-ignore
import Slider from 'react-slick';

import banner from '@/assets/multimedia/images/compress-background-gift.webp';
import pedido from '@/assets/multimedia/images/compress-background-gift.webp';
import banner_accesorios from '@/assets/multimedia/images/compress-background-gift.webp';
import mobile_banner from '@/assets/multimedia/images/compress-background-gift.webp';
import mobile_pedido from '@/assets/multimedia/images/compress-background-gift.webp';
import mobile_banner_accesorios from '@/assets/multimedia/images/compress-background-gift.webp';

import { WrapperText, animation } from '@/components/animation/wordping';
import { memo, ReactNode, useState } from 'react';
import { settingsHeader } from './config';
import Link from 'next/link';
interface IPropsSectionHeader {
	title: string;
	subtitle: string;
	className?: string;
}
export const SectionHeader = memo(function Section({ children, gallery }: { children?: ReactNode; gallery: Array<{ url: string; title: string; link: string }> }) {
	console.log('gallery', gallery);
	const [indexActive, setIndexActive] = useState(0);
	const arraySlides = [
		{
			title: 'REGALOS PARA TUS MOMENTOS ESPECIALES',
			image: banner,
			image_mobile: mobile_banner,
			link: '/regalos/flores',
		},
		{
			title: 'PÍDELO DESDE DE LA COMIDAD DE TU HOGAR',
			image: pedido,
			image_mobile: mobile_pedido,
			link: '/regalos/accesorios-tecnologicos',
		},
		{
			title: 'TENEMOS LO QUE NECESITAS',
			image: banner_accesorios,
			image_mobile: mobile_banner_accesorios,
			link: '/regalos/maquillaje',
		},
	];
	const beforeChange = (current: any, next: any) => {
		setIndexActive(next);
	};
	return (
		<section className='section-header'>
			<div className='collection-banner'>
				<Slider {...settingsHeader} beforeChange={beforeChange}>
					{gallery &&
						gallery.map((item, index) => {
							return (
								<div className='banner banner-text w-full flex' key={'slide-' + index}>
									<picture className='w-full'>
										<source media='(min-width: 500px)' srcSet={item.url} />
										<img src={item.url} alt='' className='w-full background-banner'></img>
									</picture>
									<div className='container mobile:!px-8 flex-col gradient_bg !min-w-full'>
										<WrapperText
											active={indexActive === index}
											className='xl:text-3/0 text-2/4 text-white xlg:w-max md:w-[46rem] w-[30rem] mobile:w-full mobile:text-1/8 font-ibm_bold text-center mb-4 leading-tight flex justify-center flex-wrap gap-2'
										>
											{children}
										</WrapperText>
										<Link
											href={item.link}
											className='bg-secondary text-white rounded-full border border-solid border-secondary h-12 w-full flex items-center justify-center gap-3 px-8 hover:bg-secondary group transition duration-300 w-max'
										>
											Ver productos
										</Link>
									</div>
								</div>
							);
						})}
				</Slider>
			</div>
		</section>
	);
});
