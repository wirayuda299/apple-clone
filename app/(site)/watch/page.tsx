import AppleWatch from '@/components/Banners/AppleWatch';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Watchpage() {
	return (
		<div className='w-full h-full bg-[#f5f5f7]'>
			<Suspense>
				<AppleWatch />
			</Suspense>
			<section>
				<div className='w-full text-black text-center h-screen'>
					<div className='flex flex-col items-center relative w-full h-full pt-16'>
						<div>
							<Image
								alt='apple watch'
								src='/assets/images/logo/apple_watch.png'
								width={100}
								height={100}
								loading='lazy'
								className='object-contain mx-auto'
							/>
							<h2 className=' font-semibold p-3 text-3xl sm:text-4xl md:text-5xl max-w-xl'>
								Petualangan menanti.
							</h2>
							<div className='mt-5'>
								<Link
									className='font-semibold text-base md:text-xl  text-blue-600 rounded-full'
									href={'/selengkapnya'}
									prefetch={false}
								>
									Selengkapnya
								</Link>
							</div>
						</div>
						<picture className='w-full h-full pt-5'>
							<source
								srcSet={'/assets/images/banner/apple_watch_small.jpg'}
								width={734}
								height={482}
								media='(max-width: 768px)'
								className='object-contain object-bottom w-full h-full'
							/>
							<Image
								alt='apple watch'
								src={'/assets/images/banner/apple_watch_large.jpg'}
								width={3008}
								height={1005}
								fetchPriority='high'
								priority
								sizes='(min-width:1028px) 100vw, 80vw'
								className='object-cover  object-bottom h-full w-full '
							/>
						</picture>
					</div>
				</div>
			</section>

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

			<section className='bg-white grid place-content-center w-full'>
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
		</div>
	);
}
