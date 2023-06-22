import Image from 'next/image';
import Link from 'next/link';

export default function AirPods3rdGen() {
	return (
		<div className='w-full bg-[#f5f5f7] '>
			<figure className='relative'>
				<picture className='flex justify-center flex-col w-full'>
					<source
						srcSet='/assets/images/banner/airpods_3rd_gen_small.jpg'
						width={324}
						height={464}
						type='image/jpg'
						media='(max-width:734px)'
					/>
					<source
						srcSet='/assets/images/banner/airpods_3rd_gen_medium.jpg'
						width={1008}
						height={717}
						type='image/jpg'
						media='(max-width:1068px)'
					/>
					<Image
						src='/assets/images/banner/airpods_3rd_gen_large.jpg'
						width={1381}
						height={830}
						loading='lazy'
						className=' object-cover w-full'
						alt='airpods 3rd generations image'
					/>
				</picture>
				<figcaption className='text-center text-black md:flex flex-col w-full justify-center items-center  absolute bottom-20 sm:bottom-32 lg:top-0 lg:bottom-0'>
					<h2 className='font-bold text-3xl sm:text-6xl lg:text-9xl'>
						AirPods
					</h2>
					<p className='text-sm font-semibold sm:text-xl lg:text-2xl'>
						generasi ke-3
					</p>
					<div className='pt-5 inline-flex justify-center gap-5'>
						<Link
							href={'/'}
							className='bg-blue-600 text-white py-1 px-5 rounded-full'
						>
							Beli
						</Link>
						<Link href={'/'} className=' text-black font-semibold'>
							Selengkapnya
						</Link>
					</div>
				</figcaption>
			</figure>
		</div>
	);
}
