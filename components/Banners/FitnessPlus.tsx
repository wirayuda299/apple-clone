import Image from 'next/image';
import Link from 'next/link';
export default function FitnessPlus() {
	return (
		<section className='p-5 w-full h-full bg-white'>
			<div className=' w-full h-full relative md:flex md:justify-center md:items-center '>
				<picture className='w-full'>
					<source
						srcSet='/assets/images/banner/fitness_plus_small.jpg'
						type='image/jpg'
						media='(max-width:734px)'
						width={421}
						height={279}
					/>
					<source
						srcSet='/assets/images/banner/fitness_plus_medium.jpg'
						type='image/jpg'
						media='(max-width:1068px)'
						width={1028}
						height={490}
					/>
					<Image
						src='/assets/images/banner/fitness_plus_large.jpg'
						loading='lazy'
						width={1385}
						height={852}
						sizes='(max-width: 734px) 90vw, 100vw'
						alt='fitness plus image'
						className='w-full h-full object-contain'
					/>
				</picture>
				<div className='pt-5 text-black text-center p-5 max-w-md mx-auto md:absolute md:top-1/3 md:-right-5 lg:right-0 md:h-full'>
					<Image
						width={200}
						height={200}
						alt='apple fitness plus logo'
						className='mx-auto object-cover'
						src={'/assets/images/logo/fitness_plus.jpg'}
					/>
					<h2 className='text-xl text-center font-semibold p-3 sm:text-2xl lg:text-3xl md:p-5'>
						Dapatkan 3 bulan gratis saat Anda membeli Apple Watch+
					</h2>
					<Link
						href={'/selengkapnya'}
						prefetch={false}
						className='text-blue-600 font-semibold text-base'
					>
						Selengkapnya tentang Apple fitness+
					</Link>
				</div>
			</div>
		</section>
	);
}
