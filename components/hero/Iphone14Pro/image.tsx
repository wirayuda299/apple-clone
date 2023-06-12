import Image from 'next/image';
import homeHero from '@/assets/images/hero/hero.jpg';
import homeHeroSmall from '@/assets/images/hero/apple_small.jpg';

export default function HeroImage() {
	return (
		<>
			<div className='hidden lg:block'>
				<Image
					src={homeHero}
					priority
					placeholder='blur'
					blurDataURL={homeHero.blurDataURL}
					fetchPriority='high'
					width={800}
					className='w-auto h-[25rem] object-cover'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					alt='hero'
					height={800}
				/>
			</div>
			<div className='block lg:hidden   '>
				<Image
					src={homeHeroSmall}
					width={1000}
					placeholder='blur'
					blurDataURL={homeHeroSmall.blurDataURL}
					className='object-cover h-[23rem] w-auto '
					alt='hero'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					priority
					fetchPriority='high'
					height={1000}
				/>
			</div>
		</>
	);
}
