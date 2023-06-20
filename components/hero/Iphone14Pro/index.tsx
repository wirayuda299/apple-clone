import { Suspense } from 'react';
import HeroLinks from '../Links';
import HeroImage from './image';
import { sanityClient } from '@/config/sanity';
export default async function HeroIphone14() {
	const res = (await sanityClient.fetch(
		`*[_type == "hero" && page == "home"]`
	)) as ImageRes[];

	return (
		<section className='text-black w-full h-[95vh] text-center overflow-hidden'>
			<article className='w-full h-screen pt-14 text-white'>
				<div className='w-full grid place-content-center h-full relative'>
					<div className='absolute z-10 top-0 w-full md:static'>
						<h2 className='font-semibold text-4xl sm:text-5xl md:text-6xl pt-10'>
							{res[0].title}
						</h2>
						<p className='text-center text-lg sm:text-2xl md:text-3xl '>
							{res[0].subTitle}
						</p>
						<div className='mt-2'>
							<HeroLinks />
						</div>
					</div>
					<HeroImage
						imageLarge={res[0]?.imageLarge}
						imageSmall={res[0]?.imageSmall}
						title={res[0]?.title}
					/>
				</div>
			</article>
		</section>
	);
}
