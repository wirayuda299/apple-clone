import Image from 'next/image';
import Link from 'next/link';
export default function AirPodsMax() {
	return (
		<section className='bg-white w-full grid place-content-center h-full min-h-[45rem] overflow-hidden relative'>
			<picture className='flex justify-center items-center h-full w-full pt-5 md:absolute md:z-10 top-0'>
				<source
					srcSet='/assets/images/banner/airpods_max_small.png'
					width={249}
					height={217}
					media='(max-width:734px)'
				/>
				<source
					srcSet='/assets/images/banner/airpods_max_medium.png'
					width={452}
					height={500}
					media='(max-width:1068px)'
				/>
				<Image
					src='/assets/images/banner/airpods_max_large.png'
					width={535}
					height={592}
					loading='lazy'
					className='object-contain object-center '
					alt='airpods max image'
				/>
			</picture>
			<div className='text-center flex items-center flex-col absolute -bottom-32 md:bottom-0  z-0 w-full justify-center h-screen'>
				<h2 className='text-[#1d1d1d] font-bold text-5xl pt-5 md:text-8xl lg:text-9xl tracking-wide xl:text-[180px]'>
					AirPods Max
				</h2>
				<div className='pt-5 inline-flex justify-center md:items-center md:absolute bottom-0 h-max gap-5'>
					<Link
						href={'/'}
						className='bg-blue-600 text-white py-1 px-5 rounded-full md:text-xl lg:text-2xl'
					>
						Beli
					</Link>
					<Link
						href={'/'}
						className=' text-black font-semibold md:text-xl lg:text-2xl'
					>
						Selengkapnya
					</Link>
				</div>
			</div>
		</section>
	);
}
