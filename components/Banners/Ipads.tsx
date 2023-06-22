import HeroLinks from '@/components/hero/Links';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import { sanityClient } from '@/config/sanity';
import Image from 'next/image';
type Responses = Base & ImagesSizesTypes;
export default async function IpadBanners() {
	const res = (await sanityClient.fetch(
		`*[_type == "banner" && page == "ipad"]`
	)) as Responses[];

	return (
		<section className='w-full bg-white h-full grid place-content-center place-items-center '>
			<div className='w-full grid grid-cols-1 max-w-2xl  p-5 relative'>
				<div className=' order-1 md:order-[0] w-full pt-5 mx-auto'>
					<picture>
						<source
							media='(max-width:734px)'
							srcSet={urlFor(res[0].imageSmall.source).url()}
							width={res[0].imageSmall.width}
							height={res[0].imageSmall.height}
						/>
						<source
							media='(max-width:1068px)'
							srcSet={urlFor(res[0].imageMedium.source).url()}
							width={res[0].imageMedium.width}
							height={res[0].imageMedium.height}
						/>
						<Image
							src={urlFor(res[0].imageLarge.source).url()}
							width={res[0].imageLarge.width}
							height={res[0].imageLarge.height}
							priority
							fetchPriority='high'
							className='object-contain'
							alt={res[0].title}
						/>
					</picture>
				</div>
				<div className='mt-5 w-full mx-auto flex justify-center items-center'>
					<div className='static md:absolute  top-1/3 w-full px-10 max-w-[250px] -right-[100px] lg:-right-24'>
						<h2 className='text-5xl font-bold text-center text-black'>iPad</h2>
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
