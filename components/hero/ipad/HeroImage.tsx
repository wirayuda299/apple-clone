import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';

type HeroImageProps = {
	priority: boolean;
	heroImage: ImagesSizesTypes;
};
export default function HeroImage({
	heroImage: { imageLarge, imageSmall, imageMedium },
	priority,
}: HeroImageProps) {
	return (
		<picture className='w-full h-full'>
			<source
				media='(max-width: 734px)'
				width={imageSmall.width}
				height={imageSmall.height}
				srcSet={urlFor(imageSmall.source).url()}
			/>
			<source
				media='(max-width: 1068px)'
				width={imageMedium.width}
				height={imageMedium.height}
				srcSet={urlFor(imageMedium.source).url()}
			/>
			<Image
				src={urlFor(imageLarge.source).url()}
				quality={100}
				alt='ipad pro'
				priority={priority ? true : false}
				className=' object-cover w-full h-full'
				width={imageLarge.width}
				height={imageLarge.height}
			/>
		</picture>
	);
}
