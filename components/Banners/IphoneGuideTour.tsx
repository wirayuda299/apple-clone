import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlayCircle } from 'react-icons/fi';

export default async function IphoneGuideTour() {
	const res = (await sanityClient.fetch(
		`*[_type == "banner" && page == "iphone"]`
	)) as ImageRes[];

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
					media='(max-width: 768px)'
					srcSet={urlFor(res[0].imageSmall).url()}
				/>
				<Image
					src={urlFor(res[0].imageLarge).url()}
					width={1068}
					height={500}
					className='object-cover w-full md:rounded-3xl mx-auto'
					fetchPriority='auto'
					sizes='(max-width:734px) 80vw, 100vw '
					alt='guide tour of iphone 14 and 14 pro'
				/>
			</picture>
		</section>
	);
}
