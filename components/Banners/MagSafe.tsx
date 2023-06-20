import Image from 'next/image';

export default function IPhoneAccesoris() {
	return (
		<section className='w-full max-w-7xl mx-auto bg-white h-full text-black'>
			<div>
				<h2 className='text-center font-semibold text-3xl sm:text-4xl md:text-5xl p-5'>
					Aksesoris unggulan
				</h2>
			</div>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center p-5'>
					<div className='max-w-sm mx-auto'>
						<h3 className='text-center font-bold text-2xl sm:text-3xl lg:text-4xl p-2'>
							MagSafe
						</h3>
						<p className='text-center text-sm p-1 sm:text-base  md:p-3'>
							Langsung tempelkan ke dompet atau casing magnetik, atau keduanya.
							Dan dapatkan pengisian daya nirkabel yang lebih cepat.
						</p>
					</div>
					<picture className='p-3 mx-auto'>
						<source
							srcSet='/assets/images/apple/aksesoris/magsafe_small.jpg'
							media='(max-width:734px)'
							width={233}
							height={182}
						/>
						<source
							srcSet='/assets/images/apple/aksesoris/magsafe_medium.jpg'
							media='(max-width:1068px)'
							width={349}
							height={273}
						/>

						<Image
							src={'/assets/images/apple/aksesoris/magsafe_large.jpg'}
							width={633}
							height={463}
							className='object-contain'
							alt='magsafe'
						/>
					</picture>
				</div>
			</div>
		</section>
	);
}
