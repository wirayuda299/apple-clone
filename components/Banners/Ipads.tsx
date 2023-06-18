import HeroLinks from '@/components/hero/Links';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import { sanityClient } from '@/config/sanity';
import Image from 'next/image';

export default async function IpadBanners() {
	const res = (await sanityClient.fetch(
		`*[_type == "banner" && page == "ipad"]`
	)) as ImageRes[];
	return (
		<section className='w-full bg-white h-full grid place-content-center place-items-center '>
			<div className='w-full grid grid-cols-1 max-w-2xl  p-5 relative'>
				<div className=' order-1 md:order-[0] w-full pt-5 mx-auto'>
					<picture>
						<source
							media='(max-width:800px )'
							srcSet={urlFor(res[0].imageSmall).url()}
						/>
						<Image
							src={urlFor(res[0].imageLarge).url()}
							width={447}
							height={535}
							priority
							fetchPriority='high'
							className='object-contain'
							alt='iPad in blue, pink, yellow, and silver colors and one iPad attached to the Magic Keyboard Folio.'
						/>
					</picture>
				</div>
				<div className='mt-5 w-full mx-auto flex justify-center items-center'>
					<div className='static md:absolute  top-1/3 w-full px-10 max-w-[250px] -right-[100px] lg:-right-24'>
						<h1 className='text-5xl font-bold text-center text-black'>iPad</h1>
						<p className='text-center text-black text-xl font-bold'>
							Disukai semua. Siap berkarya. Luar biasa.
						</p>
						<div className='pt-5'>
							<HeroLinks />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
