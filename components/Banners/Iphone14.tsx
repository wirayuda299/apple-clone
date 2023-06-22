import Image from 'next/image';
import HeroLinks from '../hero/Links';
import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';

type Responses = Base & ImagesSizesTypes;

export default async function Iphone14({ priority }: { priority: boolean }) {
	const response = (await sanityClient.fetch(
		`*[_type == "banner" && title == "iPhone 14"]`
	)) as Responses[];

	return (
		<section className='w-full text-black bg-[#fafafa] h-[37.5rem] md:p-5'>
			<div className='w-full flex flex-col justify-center items-center h-full relative'>
				<div className='absolute top-0 w-full text-center'>
					<h2 className='font-semibold text-4xl sm:text-5xl md:text-6xl pt-10'>
						{response[0].title}
					</h2>
					<p className='text-center text-xl  md:text-3xl'>
						{response[0].subTitle}
					</p>
					<HeroLinks />
				</div>
				<picture className='w-full h-full'>
					<source
						srcSet={urlFor(response[0].imageSmall.source).format('webp').url()}
						width={response[0].imageSmall.width}
						height={response[0].imageSmall.height}
						media='(max-width:734px)'
						className='aspect-auto'
					/>
					<source
						media='(max-width:1068px)'
						srcSet={urlFor(response[0].imageMedium.source).url()}
						width={response[0].imageMedium.width}
						height={response[0].imageMedium.height}
					/>
					<Image
						src={urlFor(response[0].imageLarge.source).url()}
						width={response[0].imageLarge.width}
						height={response[0].imageLarge.height}
						alt={response[0].title}
						priority={priority}
						fetchPriority={priority ? 'high' : 'auto'}
						className='object-cover w-full h-full'
					/>
				</picture>
			</div>
		</section>
	);
}
