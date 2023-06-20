import Image from 'next/image';
import Link from 'next/link';
export default function WhatMakesIpad() {
	return (
		<section className='bg-white w-full text-black text-center'>
			<div>
				<h2 className='text-2xl font-bold p-5 sm:text-3xl md:text-4xl md:p-10 lg:text-5xl'>
					Apa yang menjadikan iPad sebuah iPad?
				</h2>
			</div>
			<div className='w-full bg-white'>
				<div className='text-center text-black p-5  grid grid-cols-1 md:grid-cols-2 items-center bg-white w-full'>
					<div className='w-full p-5'>
						<h2 className='text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-6xl lg:p-3'>
							Mengapa iPad
						</h2>
						<p className='text-sm sm:text-base md:text-xl lg:p-2'>
							Karena iPad bisa ini dan itu. Bahkan lebih.
						</p>
						<Link
							href={'/learn-more'}
							className='text-sm py-5 sm:text-base md:text-xl font-semibold text-blue-600'
						>
							Selengkapnya
						</Link>
					</div>
					<picture className='mx-auto w-full grid place-content-center'>
						<source
							srcSet='/assets/images/ipad/why_ipad_small.jpg'
							media='(max-width:734px)'
							width={387}
							height={260}
						/>
						<source
							srcSet='/assets/images/ipad/why_ipad_medium.jpg'
							media='(max-width:1068px)'
							width={414}
							height={287}
						/>
						<Image
							src='/assets/images/ipad/why_ipad_large.jpg'
							alt='ipad accessoris'
							width={692}
							loading='lazy'
							height={468}
						/>
					</picture>
				</div>
				<div className='text-center  text-black p-5 bg-white w-full'>
					<div className='w-full p-5'>
						<h2 className='text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-6xl lg:p-3'>
							iPadOS 16
						</h2>
						<p className='text-sm sm:text-base md:text-xl lg:p-2'>
							Kemampuan besar. Keistimewaan iPad.
						</p>
						<Link
							className='text-sm py-5 sm:text-base md:text-xl font-semibold text-blue-600'
							href={'/learn-more'}
						>
							Selengkapnya
						</Link>
					</div>
					<picture className='mx-auto w-full grid place-content-center'>
						<source
							srcSet='/assets/images/ipad/ipad_os_small.jpg'
							media='(max-width:734px)'
							width={734}
							height={300}
						/>
						<source
							srcSet='/assets/images/ipad/ipad_os_medium.jpg'
							media='(max-width:1068px)'
							width={736}
							height={445}
						/>
						<img
							src='/assets/images/ipad/ipad_os_large.jpg'
							alt='ipad accessoris'
							width={1380}
							height={638}
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
