import AppleWatch from '@/components/Banners/AppleWatch';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Watchpage() {
	return (
		<div className='w-full h-full bg-[#f5f5f7]'>
			<Suspense
				fallback={<h1 className='text-center text-black'>Loading....</h1>}
			>
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
		</div>
	);
}
