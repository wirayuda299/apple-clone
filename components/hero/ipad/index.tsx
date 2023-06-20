import Image from 'next/image';
import HeroLinks from '../Links';
import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';

export default async function IpadHero() {
	const res = (await sanityClient.fetch(
		`*[_type == "hero" && page == "ipad"]`
	)) as ImageRes[];

	return (
		<section className='w-full h-full'>
			<div className='w-full relative h-full'>
				<div className='w-[500px] h-[500px] rounded-full absolute top-0 right-1/2  translate-x-1/2 bg-[#0d022d] blur-3xl'></div>
				<div className='w-[500px] h-[500px] rounded-full absolute top-0  right-1/4  translate-x-1/2 bg-[#240227] blur-3xl'></div>
				<div className='max-w-5xl mx-auto h-[40rem] relative'>
					<div className='flex flex-col lg:flex-row justify-evenly lg:justify-between gap-10 items-center w-full h-full relative'>
						<div className='p-5'>
							<h2 className='text-4xl md:text-6xl text-center font-semibold whitespace-nowrap'>
								iPad Pro
							</h2>
							<p className='text-xl md:text-2xl text-center whitespace-nowrap items-center py-1 flex'>
								Bertenaga super berkat
								<div className='relative'>
									<div className='bg-gradient-to-br via-[#a42e39] from-[#b49130] blur-[3px] to-[#5c068b] w-12 h-12 rounded'></div>
									<Image
										className='w-14 h-14 object-cover absolute -top-1'
										width={100}
										height={100}
										quality={100}
										src={'/assets/images/compares/m2.png'}
										alt='m2'
									/>
								</div>
							</p>
							<HeroLinks />
						</div>
						<div className='aspect-square w-[20rem] h-[20rem] relative lg:w-full lg:h-full'>
							<picture>
								<source
									media='(max-width: 734px )'
									width={489}
									height={405}
									srcSet={urlFor(res[0].imageSmall).url()}
								/>
								<Image
									src={urlFor(res[0].imageLarge).url()}
									quality={100}
									alt='ipad pro'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									fill
								/>
							</picture>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
