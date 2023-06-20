import Image from 'next/image';
import Link from 'next/link';
export default function AppleWatchS8() {
	return (
		<section className='bg-black grid place-content-center w-full '>
			<div className='w-full h-full grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2'>
				<picture className='order-1 md:order-[0]'>
					<source
						media='(max-width:734px )'
						srcSet='/assets/images/banner/apple_watch_s8_small.jpg'
					/>
					<source
						media='(max-width:1068px )'
						srcSet='/assets/images/banner/apple_watch_s8_medium.jpg'
					/>
					<Image
						src={'/assets/images/banner/apple_watch_s8_large.jpg'}
						width={381}
						loading='lazy'
						className='mx-auto object-contain'
						height={775}
						alt='apple watch s8 series'
					/>
				</picture>
				<div className='pt-8'>
					<Image
						src='/assets/images/logo/apple_watch.png'
						width={140}
						height={140}
						alt='apple watch'
						className='object-cover mx-auto'
						loading='lazy'
					/>
					<p className='text-[#a71b20] text-lg text-center'>series</p>
					<div className='text-center text-white max-w-2xl '>
						<h2 className='text-3xl sm:text-4xl sm:px-7 sm:py-3 lg:text-5xl font-semibold p-3'>
							Lompatan besar untuk kesehatan Anda.
						</h2>
						<div className='p-3'>
							<Link
								href={'/beli'}
								prefetch={false}
								className='bg-blue-600 rounded-full px-5 py-1'
							>
								Beli
							</Link>
						</div>
						<div className='pt-3 pb-5'>
							<Link
								href={'/selengkapnya'}
								prefetch={false}
								className='text-blue-600 font-semibold text-xl'
							>
								Selengkapnya
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
