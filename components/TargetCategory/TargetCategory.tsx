import Image from 'next/image';
import style from './TargetCategory.module.scss';
import Link from 'next/link';
export const TargetCategory = ({ product }: { product: any }) => {
	if (product?.attributes?.image?.data) {
		return (
			<Link className={style.target_category + ' rounded-xl overflow-hidden '} href={'/regalos/' + product.attributes.slug}>
				<div className={style.content_img}>
					<img src={'https://cmc.formulaperu.com/' + product.attributes.image.data.attributes.url} alt='background' width={'100%'} height={'auto'} />
				</div>
				<h2 className={style.name_category}>{product.attributes.name}</h2>
			</Link>
		);
	}
	return null;
};
