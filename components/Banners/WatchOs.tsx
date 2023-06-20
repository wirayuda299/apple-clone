import Image from 'next/image';
import Link from 'next/link';

export default function WatchOs() {
	return (
		<section className='bg-white text-black w-full h-full'>
			<div className='grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-5 justify-center p-5'>
				<div className='text-center bg-[#f5f5f7]'>
					<p className='font-bold text-sm p-3 sm:text-2xl'>
						Mengapa Apple Watch
					</p>
					<h2 className='text-xl font-semibold sm:text-3xl lg:text-4xl lg:font-bold px-5 max-w-lg mx-auto'>
						Ini adalah perangkat canggih untuk hidup sehat Anda.
					</h2>
					<div className='p-3'>
						<Link
							className='text-base font-semibold lg:text-lg text-blue-600'
							href={'/'}
						>
							Selengkapnya
						</Link>
					</div>
					<picture>
						<source
							srcSet='/assets/images/banner/why_watch_414_350_small.jpg'
							width={414}
							height={350}
						/>
						<source
							srcSet='/assets/images/banner/why_watch_360_336_medium.jpg'
							width={360}
							height={336}
						/>
						<Image
							src='/assets/images/banner/why_watch_637_545_large.jpg'
							width={637}
							height={545}
							loading='lazy'
							className='object-contain mx-auto w-full'
							alt='watch image'
						/>
					</picture>
				</div>
				<div className='text-center bg-[#f5f5f7]'>
					<h2 className='text-xl font-bold px-5 py-3 sm:text-2xl'>watchOS 9</h2>
					<p className='font-semibold text-xl sm:text-3xl lg:text-4xl lg:font-bold px-5 max-w-lg mx-auto'>
						Sangat memahami Anda. Sangat personal.
					</p>
					<div className='p-3'>
						<Link href={'/'} className='text-base font-semibold text-blue-600'>
							Selengkapnya
						</Link>
					</div>
					<picture>
						<source
							srcSet='/assets/images/banner/watchos_283_280_small.jpg'
							width={283}
							height={280}
						/>
						<source
							srcSet='/assets/images/banner/watchos_342_336_medium.jpg'
							width={342}
							height={336}
						/>
						<Image
							src='/assets/images/banner/watchos_485_478_large.jpg'
							width={485}
							height={478}
							loading='lazy'
							className='object-contain mx-auto w-full'
							alt='watch os image'
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
