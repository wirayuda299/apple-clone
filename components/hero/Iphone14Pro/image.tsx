import Image from 'next/image';

export default function HeroImage() {
	return (
		<>
			<div className='hidden lg:block pt-2 z-0'>
				<Image
					src={'/assets/images/hero/hero.jpg'}
					priority
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
					src={'/assets/images/hero/apple_small.jpg'}
					width={1000}
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
