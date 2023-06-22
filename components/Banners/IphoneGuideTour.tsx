import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlayCircle } from 'react-icons/fi';
type Responses = Base & ImagesSizesTypes;
export default async function IphoneGuideTour() {
	const res = (await sanityClient.fetch(
		`*[_type == "banner" && page == "iphone"]`
	)) as Responses[];

	return (
		<section className='w-full h-full md:p-5 relative'>
			<div className='static text-black md:text-white mx-auto p-5 md:absolute max-w-lg flex flex-col md:left-0 lg:left-10 justify-center items-center top-0 z-10 w-full h-full'>
				<p className='text-xl md:text-2xl font-bold text-left'>
					{res[0].subTitle}
				</p>
				<h2 className='font-bold text-2xl md:text-4xl lg:text-5xl text-center break-words	 '>
					{res[0].title}
				</h2>
				<Link
					href='/watch'
					className='text-lg md:bg-white md:rounded-full font-semibold text-blue-600 inline-flex gap-2 items-center p-5 md:p-3 md:text-base md:mt-3 md:text-black'
				>
					Watch the film
					<FiPlayCircle className='md:hidden' />
				</Link>
			</div>
			<picture>
				<source
					media='(max-width: 734px)'
					srcSet={urlFor(res[0].imageSmall.source).url()}
					width={res[0].imageSmall.width}
					height={res[0].imageSmall.height}
				/>
				<source
					media='(max-width: 1068px)'
					srcSet={urlFor(res[0].imageMedium.source).url()}
					width={res[0].imageMedium.width}
					height={res[0].imageMedium.height}
				/>
				<Image
					src={urlFor(res[0].imageLarge.source).url()}
					width={res[0].imageLarge.width}
					height={res[0].imageLarge.height}
					className='object-cover w-full md:rounded-3xl mx-auto'
					fetchPriority='auto'
					sizes='(max-width:734px) 80vw, 100vw '
					alt={res[0].title}
				/>
			</picture>
		</section>
	);
}
