import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';
import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';

export default async function MacBookPro() {
	const res = (await sanityClient.fetch(
		`*[_type == "hero" && page == "mac"]`
	)) as ImageRes[];

	return (
		<section className={`w-full h-[40rem] overflow-hidden bg-black relative`}>
			<picture>
				<source
					media='(max-width:800px)'
					srcSet={urlFor(res[0].imageSmall).url()}
				/>
				<Image
					src={urlFor(res[0].imageLarge).url()}
					width={1054}
					height={500}
					priority
					className='object-contain w-full h-full object-bottom'
					alt='macbook pro'
				/>
			</picture>
			<div className='flex justify-center flex-col items-center p-10 absolute top-0 mx-auto w-full'>
				<span className='text-orange-500 font-bold'>Baru</span>
				<h1 className='text-4xl sm:text-5xl md:text-7xl font-bold capitalize'>
					{res[0].title}
				</h1>
				<p className='font-semibold text-lg md:text-xl text-center md:text-left py-2'>
					{res[0].subTitle}
				</p>
				<div className='flex items-center gap-3 mt-5'>
					<button
						type='button'
						name='buy'
						title='buy'
						className='bg-blue-600 px-5 py-1 font-semibold rounded-full'
					>
						Beli
					</button>
					<Link
						href={'/macbook-pro-14-and-16'}
						className='text-blue-500 font-semibold hover:underline inline-flex items-center gap-3'
					>
						Selengkapnya
						<SlArrowRight />
					</Link>
				</div>
			</div>
		</section>
	);
}
