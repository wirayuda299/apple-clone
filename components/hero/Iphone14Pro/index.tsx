import HeroLinks from '../Links';
import HeroImage from './image';
import { sanityClient } from '@/config/sanity';
export default async function HeroIphone14() {
	const res = (await sanityClient.fetch(
		`*[_type == "hero" && page == "home"]`
	)) as Readonly<HeroImageRes[]>;

	return (
		<section className='text-black w-full h-[93vh] text-center overflow-hidden'>
			<article className='w-full h-screen pt-14 text-white'>
				<div className='w-full grid place-content-center h-full relative'>
					<div className='absolute z-10 top-0 lg:top-5 w-full '>
						<h2 className='font-semibold text-4xl sm:text-5xl md:text-6xl pt-10 lg:pt-0'>
							{res[0].title}
						</h2>
						<p className='text-center text-lg sm:text-2xl md:text-3xl '>
							{res[0].subTitle}
						</p>
						<div className=''>
							<HeroLinks />
						</div>
					</div>
					<HeroImage
						heroImage={{
							imageLarge: {
								source: res[0].heroImage.imageLarge.source,
								width: res[0].heroImage.imageLarge.width,
								height: res[0].heroImage.imageLarge.height,
							},
							imageMedium: {
								source: res[0].heroImage.imageMedium.source,
								width: res[0].heroImage.imageMedium.width,
								height: res[0].heroImage.imageMedium.height,
							},
							imageSmall: {
								source: res[0].heroImage.imageSmall.source,
								width: res[0].heroImage.imageSmall.width,
								height: res[0].heroImage.imageSmall.height,
							},
						}}
						title={res[0]?.title}
					/>
				</div>
			</article>
		</section>
	);
}
