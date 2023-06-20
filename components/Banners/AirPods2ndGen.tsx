import Image from 'next/image';
import Link from 'next/link';
export default function AirPods2ndGen() {
	return (
		<div className='w-full bg-white relative mt-10 h-full overflow-hidden'>
			<div className='flex items-center w-full h-full justify-center gap-10 overflow-hidden'>
				<picture>
					<source
						srcSet={'/assets/images/banner/airpods_2rd_gen_small.png'}
						width={96}
						height={208}
						type='image/png'
						media='(max-width:734px)'
					/>
					<source
						srcSet={'/assets/images/banner/airpods_2rd_gen_medium.png'}
						width={318}
						height={704}
						type='image/png'
						media='(max-width:1068px)'
					/>
					<Image
						src={'/assets/images/banner/airpods_2rd_gen_large.png'}
						width={366}
						height={811}
						loading='lazy'
						className='object-contain h-full '
						alt='airpods 3rd generations image'
					/>
				</picture>
				<picture>
					<source
						srcSet={'/assets/images/banner/airpods_2rd_gen_large_right.png'}
						width={96}
						height={208}
						type='image/png'
						media='(max-width:734px)'
					/>
					<source
						srcSet={'/assets/images/banner/airpods_2rd_gen_large_right.png'}
						width={318}
						height={704}
						type='image/png'
						media='(max-width:1068px)'
					/>
					<Image
						src={'/assets/images/banner/airpods_2rd_gen_large_right.png'}
						width={366}
						height={811}
						loading='lazy'
						className='object-contain self-end h-full md:translate-y-56'
						alt='airpods 2rd generations image'
					/>
				</picture>
			</div>
			<div className='text-center text-black md:flex flex-col w-full h-full justify-center items-center  md:absolute top-0'>
				<h2 className='font-bold text-3xl sm:text-6xl lg:text-9xl'>AirPods</h2>
				<p className='text-sm font-semibold sm:text-xl lg:text-2xl'>
					generasi ke-2
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
			</div>
		</div>
	);
}
