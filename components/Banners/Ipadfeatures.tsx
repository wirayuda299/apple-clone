import Image from 'next/image';
import Link from 'next/link';
export default function Ipadfeatures() {
	return (
		<section className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5 justify-center'>
			<div className='text-center mx-auto text-black p-5 max-w-2xl bg-white w-full'>
				<h2 className='text-2xl py-3 font-semibold sm:text-3xl sm:font-bold md:text-4xl lg:text-5xl'>
					iCloud
				</h2>
				<p className='text-sm sm:text-base md:text-xl lg:p-2'>
					Tempat terbaik untuk semua foto, file, dan lainnya.
				</p>
				<Link
					className='text-sm pt-10 sm:text-base md:text-xl font-semibold text-blue-600'
					href={'/learn-more'}
				>
					Selengkapnya
				</Link>
				<picture className='mx-auto w-full grid place-content-center lg:pt-5'>
					<source
						srcSet='/assets/images/ipad/icloud_small.jpg'
						media='(max-width:734px)'
						width={453}
						height={214}
					/>
					<source
						srcSet='/assets/images/ipad/icloud_medium.jpg'
						media='(max-width:1068px)'
						width={335}
						height={212}
					/>
					<Image
						src='/assets/images/ipad/icloud_large.jpg'
						alt='icloud'
						width={594}
						loading='lazy'
						height={280}
					/>
				</picture>
			</div>
			<div className='text-center mx-auto text-black p-5 max-w-2xl bg-white w-full'>
				<Image
					src={'/assets/images/ipad/apple_pay_logo.png'}
					width={100}
					height={100}
					className='object-cover mx-auto py-3'
					alt='Apple'
				/>
				<p className='text-sm sm:text-base md:text-xl lg:p-2'>
					The safer way to make secure, contactless purchases in stores and
					online.
				</p>
				<Link
					href={'/learn-more'}
					className='text-sm py-5 sm:text-base md:text-xl font-semibold text-blue-600'
				>
					Selengkapnya
				</Link>
				<picture className='mx-auto w-full grid place-content-center'>
					<source
						srcSet='/assets/images/ipad/apple_pay.jpg'
						media='(max-width:734px)'
						width={331}
						height={241}
					/>
					<source
						srcSet='/assets/images/ipad/apple_pay_medium.jpg'
						media='(max-width:1068px)'
						width={275}
						height={200}
					/>
					<Image
						src='/assets/images/ipad/apple_pay_large.jpg'
						alt='apple pay'
						width={388}
						height={281}
						loading='lazy'
					/>
				</picture>
			</div>
		</section>
	);
}
