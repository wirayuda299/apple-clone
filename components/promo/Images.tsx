import Image from 'next/image';

import { urlFor } from '@/lib/sanity/utils/sanityImage';

type PromoImagesProps = ImagesSizesTypes & {
	title: string;
};
export default function PromoImages({
	imageLarge,
	imageMedium,
	imageSmall,
	title,
}: PromoImagesProps) {
	return (
		<picture>
			<source
				srcSet={urlFor(imageSmall.source).url()}
				media='(max-width:734px)'
				width={imageSmall.width}
				height={imageSmall.height}
			/>
			<source
				srcSet={urlFor(imageMedium.source).url()}
				media='(max-width:1068px)'
				width={imageMedium.width}
				height={imageMedium.height}
			/>
			<Image
				src={urlFor(imageLarge.source).url()}
				className=' aspect-square object-cover'
				alt={title}
				width={imageLarge.width}
				loading='lazy'
				height={imageLarge.height}
			/>
		</picture>
	);
}
