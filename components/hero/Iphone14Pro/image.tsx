import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';

type HeroImageProps = {
	imageSmall: string;
	title: string;
	imageLarge: string;
};

export default function HeroImage({
	imageLarge,
	imageSmall,
	title,
}: HeroImageProps) {
	return (
		<picture className='top-2 w-[60rem] max-w-[70rem] md:h-[20rem] lg:h-[25rem] relative '>
			<source media='(max-width:800px)' srcSet={urlFor(imageSmall).url()} />
			<Image
				priority
				fetchPriority='high'
				className='object-contain'
				alt={title}
				src={urlFor(imageLarge).minWidth(1080).minHeight(553).fit('fill').url()}
				fill
				sizes='(min-width:800px) 100vw, 90vw'
			/>
		</picture>
	);
}
