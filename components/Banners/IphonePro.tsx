import Image from 'next/image';
import HeroLinks from '../hero/Links';
export default function Iphone({ priority }: { priority: boolean }) {
	return (
		<section className={`w-full text-black bg-[#fafafa] h-[37.5rem] md:p-5`}>
			<div className='w-full flex flex-col justify-center items-center h-full relative'>
				<div className='absolute top-0 w-full text-center'>
					<h2 className='font-semibold text-4xl sm:text-5xl md:text-6xl pt-10'>
						iPhone 14
					</h2>
					<p className='text-center text-xl  md:text-3xl'>Penuh keajaiban.</p>
					<HeroLinks />
				</div>
				<picture className='w-full h-full'>
					<source
						srcSet='/assets/images/hero/iphone_yellow_small.jpg'
						media='(max-width:734px)'
						width={734}
						height={548}
					/>
					<source
						srcSet='/assets/images/hero/iphone_yellow_medium.jpg'
						media='(max-width:1068px)'
						width={1068}
						height={617}
					/>
					<Image
						src='/assets/images/hero/iphone_yellow_large.jpg'
						width={3008}
						height={624}
						alt='iphone 14'
						priority={priority}
						fetchPriority={priority ? 'high' : 'auto'}
						className='object-cover w-full h-full'
					/>
				</picture>
			</div>
		</section>
	);
}
