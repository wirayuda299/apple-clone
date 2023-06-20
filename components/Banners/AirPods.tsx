import Link from 'next/link';
import Image from 'next/image';
export default function AirPods() {
	return (
		<section>
			<div className='text-black bg-white w-full max-w-7xl mx-auto grid place-content-center m-3'>
				<div className='text-center mx-auto max-w-md px-8 lg:px-0'>
					<h2 className='text-2xl font-bold p-5 sm:text-3xl md:text-4xl lg:text-5xl '>
						Keajaiban demi keajaiban.
					</h2>
					<p className='text-sm font-medium md:text-base lg:text-lg'>
						Jelajahi semua model AirPods dan temukan yang terbaik untuk Anda.
					</p>
					<Link
						href={'/'}
						className='font-semibold text-base text-blue-600 m-5'
					>
						Selengkapnya
					</Link>
				</div>
				<picture className='mx-auto w-full'>
					<source
						srcSet='/assets/images/apple/aksesoris/airpods_small.jpg'
						media='(max-width:734px)'
					/>
					<source
						srcSet='/assets/images/apple/aksesoris/airpods_medium.jpg'
						media='(max-width:1068px)'
					/>
					<Image
						src='/assets/images/apple/aksesoris/airpods_large.jpg'
						width={1063}
						height={498}
						alt='airpods'
					/>
				</picture>
			</div>
		</section>
	);
}
