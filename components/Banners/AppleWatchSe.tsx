import Image from 'next/image';
import Link from 'next/link';
export default function AppleWatchSe() {
	return (
		<section className='bg-[#f5f5f7] grid place-content-center w-full'>
			<div className='w-full h-full grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2'>
				<picture className='order-[0] md:order-[1]'>
					<source
						media='(max-width:734px )'
						srcSet='/assets/images/banner/apple_watch_se_small.jpg'
						width={332}
						height={298}
					/>
					<source
						media='(max-width:1068px )'
						srcSet='/assets/images/banner/apple_watch_se_medium.jpg'
						width={365}
						height={327}
					/>
					<Image
						src={'/assets/images/banner/apple_watch_se_large.jpg'}
						width={564}
						loading='lazy'
						className='mx-auto object-contain'
						height={405}
						alt='apple watch s8 series'
					/>
				</picture>
				<div className='pt-8'>
					<Image
						src='/assets/images/logo/apple_watch_se.png'
						width={140}
						height={140}
						alt='apple watch'
						className='object-cover mx-auto'
						loading='lazy'
					/>
					<div className='text-center text-black max-w-2xl '>
						<h2 className='text-3xl sm:text-4xl sm:px-7 sm:py-3 lg:text-5xl font-semibold p-3'>
							Kemampuan memukau yang terjangkau.
						</h2>
						<div className='p-3 inline-flex gap-4 items-center'>
							<Link
								href={'/beli'}
								prefetch={false}
								className='bg-blue-600 rounded-full text-white px-5 py-1'
							>
								Beli
							</Link>
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
