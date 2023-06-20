import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';
import Link from 'next/link';

export default async function AppleWatch() {
	const res = (await sanityClient.fetch(
		`*[_type == "banner" && page == "watch"]`
	)) as ImageRes[];

	return (
		<section className='pt-10'>
			<div className='w-full bg-white text-black text-center  h-screen'>
				<div className='flex flex-col items-center relative w-full h-full pt-16'>
					<div className='absolute top-5'>
						<Image
							alt='apple watch'
							src='/assets/images/logo/apple_watch.png'
							width={100}
							height={100}
							className='object-contain mx-auto'
						/>
						<h2 className=' font-semibold p-3 text-3xl sm:text-4xl md:text-5xl max-w-xl'>
							{res[0].title}
						</h2>
						<p className='text-base px-3 font-medium sm:text-base max-w-lg sm:px-5'>
							{res[0].subTitle}
						</p>
						<div className='mt-5'>
							<Link
								className='font-semibold text-base md:text-xl  bg-blue-600 py-2 px-5 text-white rounded-full'
								href={'/beli'}
								prefetch={false}
							>
								Beli
							</Link>
						</div>
					</div>
					<picture className='w-full h-full'>
						<source
							srcSet={urlFor(res[0].imageSmall).quality(60).url()}
							width={734}
							height={482}
							media='(max-width: 768px)'
							className='object-contain object-bottom w-full h-full'
						/>
						<Image
							alt='apple watch'
							src={urlFor(res[0].imageLarge)
								.auto('format')
								.crop('center')
								.quality(70)
								.url()}
							width={3008}
							height={1005}
							fetchPriority='high'
							priority
							sizes='(min-width:1028px) 100vw, 80vw'
							className='object-cover object-bottom w-full h-full'
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
