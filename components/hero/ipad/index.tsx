import HeroImage from './HeroImage';
import Title from './Title';

import { getHeroIpad } from '@/lib/sanity/actions';

export default async function IpadHero() {
	const res = await getHeroIpad();

	return (
		<section className='w-full h-full overflow-hidden'>
			<div className='w-full relative h-full'>
				<div className='w-full flex justify-center flex-col items-center h-[40rem] relative'>
					<div className='flex flex-col lg:flex-row lg:justify-center gap-10 items-center w-full h-full relative'>
						<Title />
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
									source: res[0].heroImage.imageMedium.source,
									width: res[0].heroImage.imageMedium.width,
									height: res[0].heroImage.imageMedium.height,
								},
							}}
							priority={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
