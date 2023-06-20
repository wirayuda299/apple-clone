import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';
type HeroImageProps = {
	imageSmall: string;
	imageLarge: string;
	priority: boolean;
};
export default function HeroImage({
	imageLarge,
	imageSmall,
	priority,
}: HeroImageProps) {
	return (
		<div className='aspect-square w-[20rem] h-[20rem] relative lg:w-full lg:h-full'>
			<picture>
				<source
					media='(max-width: 734px )'
					width={489}
					height={405}
					srcSet={urlFor(imageSmall).url()}
				/>
				<Image
					src={urlFor(imageLarge).url()}
					quality={100}
					alt='ipad pro'
					priority={priority ? true : false}
					className='aspect-auto'
					fill
				/>
			</picture>
		</div>
	);
}
