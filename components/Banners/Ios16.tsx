import Link from 'next/link';
import Image from 'next/image';
export default function Ios16() {
	return (
		<section className='w-full h-full'>
			<div className='max-w-2xl mx-auto'>
				<h2 className='font-bold p-5 md:p-8 text-2xl text-black text-center sm:text-3xl'>
					Apa yang menjadikan iPhone sebuah iPhone?
				</h2>
			</div>
			<div className='text-black bg-white max-w-7xl h-full relative mx-auto text-center grid place-content-center'>
				<div className=' p-5 absolute top-0 sm:top-5 lg:static lg:pt-8 text-black w-full'>
					<h3 className='uppercase font-bold text-2xl sm:text-4xl'>iOS 16</h3>
					<p className='text-base sm:text-xl font-medium'>
						Andal karena semakin personal.
					</p>
					<Link
						href={'/'}
						className='font-semibold text-base text-blue-600 m-5'
					>
						Selengkapnya
					</Link>
				</div>
				<picture className=' w-full h-full grid place-items-center'>
					<source
						srcSet='/assets/images/apple/whyIphone/ios16_small.jpg'
						media='(max-width:734px)'
						width={736}
						height={620}
					/>
					<source
						srcSet='/assets/images/apple/whyIphone/ios16_medium.jpg'
						media='(max-width:1068px)'
						width={736}
						height={514}
					/>
					<Image
						src='/assets/images/apple/whyIphone/ios16_large.jpg'
						width={870}
						height={428}
						className='object-cover object-center'
						alt='why iphone'
					/>
				</picture>
			</div>
			A
		</section>
	);
}
