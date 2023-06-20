import Link from 'next/link';

export default function AirPodsPro() {
	return (
		<div className='max-w-7xl mx-auto md:pt-16 h-full relative'>
			<div className=' w-full h-full flex items-center  justify-center '>
				<div className='absolute top-1/2 lg:top-1/3 w-full h-full text-center'>
					<h2 className='text-3xl font-bold sm:text-4xl lg:text-9xl'>
						AirPods Pro
					</h2>
				</div>
			</div>
			<video
				className='rounded-3xl w-full hidden sm:block h-full'
				autoPlay
				preload='auto'
				loop
				src='/assets/videos/large.mp4'
			/>
			<video
				className=' block sm:hidden !w-full h-full'
				autoPlay
				preload='auto'
				loop
				src='/assets/videos/small.mp4'
			/>
			<div className='w-full'>
				<div className='absolute bottom-7 text-center mx-auto grid place-content-center w-full'>
					<div className='flex justify-center items-center gap-5 w-full'>
						<Link
							href={'/'}
							className='bg-white text-black py-2 px-5 rounded-full'
						>
							Beli
						</Link>
						<Link href={'/'} className=' text-white font-semibold '>
							Selengkapnya
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
