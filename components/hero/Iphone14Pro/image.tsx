import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';
type HeroImageProps = {
	imageSmall: Readonly<string>;
	title: Readonly<string>;
	imageLarge: Readonly<string>;
};

export default function HeroImage({
	imageLarge,
	imageSmall,
	title,
}: HeroImageProps) {
	console.log({ imageLarge, imageSmall, title });

	return (
		<picture className=' w-[50rem] h-[35rem] max-w-[70rem] md:w-[45rem] md:h-[24rem] lg:w-[58rem] !bottom-0 relative '>
			<source
				media='(max-width:767px)'
				width={734}
				height={548}
				srcSet={urlFor(imageSmall)
					.minWidth(734)
					.minHeight(548)
					.fit('fill')
					.quality(60)
					.url()}
			/>
			<Image
				priority
				fetchPriority='high'
				className='object-cover object-bottom w-full h-full'
				alt={title}
				quality={65}
				src={urlFor(imageLarge)
					.minWidth(1080)
					.minHeight(553)
					.auto('format')
					.url()}
				fill
			/>
		</picture>
	);
}
