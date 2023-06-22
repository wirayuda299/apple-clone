import { sanityClient } from '@/config/sanity';
import HeroImage from './HeroImage';
import BlurryBackground from './BlurryBackground';
import Title from './Title';
type Responses = Base & {
	imageLarge: string;
	imageSmall: string;
};
export default async function IpadHero() {
	const res = (await sanityClient.fetch(
		`*[_type == "hero" && page == "ipad"]`
	)) as Responses[];

	return (
		<section className='w-full h-full overflow-hidden'>
			<div className='w-full relative h-full'>
				<BlurryBackground />
				<div className='max-w-5xl mx-auto h-[40rem] relative'>
					<div className='flex flex-col lg:flex-row lg:justify-between gap-10 items-center w-full h-full relative'>
						<Title />
						<HeroImage
							imageLarge={res[0].imageLarge}
							imageSmall={res[0].imageSmall}
							priority={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
