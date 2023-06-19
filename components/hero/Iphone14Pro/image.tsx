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
		<picture className=' w-[50rem] h-[35rem] max-w-[70rem] md:w-[45rem] md:h-[24rem] !bottom-0 relative '>
			<source
				media='(max-width:767px)'
				width={734}
				height={548}
				srcSet={urlFor(imageSmall)
					.minWidth(734)
					.minHeight(548)
					.fit('fill')
					.url()}
			/>
			<Image
				priority
				fetchPriority='high'
				className='object-contain object-bottom'
				alt={title}
				sizes='(max-width: 810px) 100vw, 80vw'
				src={urlFor(imageLarge).minWidth(1080).minHeight(553).fit('fill').url()}
				fill
			/>
		</picture>
	);
}
