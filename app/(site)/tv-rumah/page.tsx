import ProductTypes from '@/components/ProductTypes/ProductTypes';
import Image from 'next/image';
import Link from 'next/link';
import appletvTypes from '@/data/appletvTypes.json';

export default function TvRumah() {
	return (
		<section>
			<section className='pt-10 w-full bg-white'>
				<ProductTypes productTypes={appletvTypes} />
			</section>
			<div className='w-full bg-[#f5f5f7] text-black h-full'>
				<div className='max-w-7xl mx-auto text-center flex flex-col items-center justify-center h-[calc(100vh_-_5rem)]'>
					<Image
						src='/assets/images/logo/apple_tv.png'
						width={100}
						height={100}
						className='mx-auto'
						alt='Apple tv logo'
					/>
					<h2 className='font-semibold py-3 text-[#1d1d1f] text-2xl sm:text-3xl md:text-4xl lg:font-bold lg:text-5xl xl:text-6xl max-w-6xl px-5'>
						Pengalaman menikmati Apple. Sinematik yang membuka indra.
					</h2>
					<p className='text-sm text-[#86868b] lg:text-lg lg:p-5 lg:font-semibold'>
						Cek kembali untuk informasi ketersediaan
					</p>
					<Link
						href={'/'}
						className='text-base font-semibold text-blue-600 pt-5'
					>
						Selengkapnya
					</Link>
				</div>
				<picture>
					<source
						srcSet='/assets/images/tv-rumah-page/hq_small_317_323.jpg'
						width={597}
						height={616}
						media='(max-width: 734px)'
					/>
					<source
						srcSet='/assets/images/tv-rumah-page/hq_md_597_616.jpg'
						width={597}
						height={616}
						media='(max-width: 1068px)'
					/>
					<Image
						src='/assets/images/tv-rumah-page/hq_large_740_760.jpg'
						width={740}
						height={760}
						className='object-contain mx-auto'
						alt='high definition image'
						priority
					/>
				</picture>
			</div>
			<section className='bg-[#f5f5f7] text-black'>
				<h2 className='text-center font-bold text-xl mx-auto p-5 max-w-3xl sm:text-3xl md:text-4xl lg:text-5xl'>
					Menonton, bernyanyi, bermain, dan berolahraga. Di layar besar.
				</h2>
				<section className='flex flex-col-reverse conatainer mx-auto'>
					<div className=' grid grid-cols-1 place-items-center md:p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
						<div className='text-center max-w-lg'>
							<Image
								src='/assets/images/tv-rumah-page/apple_ex_small.png'
								width={500}
								height={500}
								className='md:hidden'
								alt=''
							/>
							<div>
								<Image
									src='/assets/images/logo/tv_plus.png'
									width={100}
									height={100}
									className='mx-auto'
									alt='tv plus logo'
								/>
								<h3 className='text-lg font-semibold px-5 py-3'>
									Streaming Apple Original pemenang penghargaan di setiap layar.
								</h3>
								<div className='inline-flex gap-5 md:gap-2 items-center md:flex-col'>
									<Link
										className='bg-blue-600 px-4 text-white py-1 rounded-full'
										href={'/'}
									>
										Coba gratis
									</Link>
									<Link
										className='text-blue-600 font-semibold text-base'
										href={'/'}
									>
										Selengkapnya
									</Link>
								</div>
							</div>
						</div>
						<div className='text-center max-w-lg'>
							<Image
								src='/assets/images/tv-rumah-page/apple_experience_full_music.png'
								width={500}
								className='md:hidden'
								height={500}
								alt=''
							/>
							<div>
								<Image
									src='/assets/images/logo/apple_music_logo.png'
									width={100}
									height={100}
									className='mx-auto'
									alt='tv plus logo'
								/>
								<h3 className='text-lg font-semibold px-5 py-3'>
									Akses semua lagu kesukaan Anda dan ikut bernyanyi dengan
									tampilan lirik.
								</h3>
								<div className='inline-flex gap-5 md:gap-2 items-center md:flex-col'>
									<Link
										className='bg-blue-600 px-4 text-white py-1 rounded-full'
										href={'/'}
									>
										Coba gratis
									</Link>
									<Link
										className='text-blue-600 font-semibold text-base'
										href={'/'}
									>
										Selengkapnya
									</Link>
								</div>
							</div>
						</div>
						<div className='text-center max-w-lg'>
							<Image
								src='/assets/images/tv-rumah-page/apple_experience_full_fitness.png'
								width={500}
								height={500}
								className='md:hidden'
								alt=''
							/>
							<div>
								<Image
									src='/assets/images/logo/fitness_plus_logo.png'
									width={100}
									height={100}
									className='mx-auto'
									alt='fitness plus logo'
								/>
								<h3 className='text-lg font-semibold px-5 py-3'>
									Dari HIIT hingga Meditasi, selalu ada pilihan untuk Anda.
								</h3>
								<div className='inline-flex gap-5 md:gap-2 items-center md:flex-col'>
									<Link
										className='bg-blue-600 px-4 text-white py-1 rounded-full'
										href={'/'}
									>
										Coba gratis
									</Link>
									<Link
										className='text-blue-600 font-semibold text-base'
										href={'/'}
									>
										Selengkapnya
									</Link>
								</div>
							</div>
						</div>
						<div className='text-center max-w-lg'>
							<Image
								src='/assets/images/tv-rumah-page/apple_experience_full_arcade.png'
								width={500}
								height={500}
								className='md:hidden'
								alt='arcade'
							/>
							<div>
								<Image
									src='/assets/images/logo/apple_arcade_logo.png'
									width={100}
									height={100}
									className='mx-auto'
									alt='arcade logo'
								/>
								<h3 className='text-lg font-semibold px-5 py-3'>
									Lebih dari 200 game seru. Tanpa iklan. Tanpa pembelian dalam
									aplikasi.
								</h3>
								<div className='inline-flex gap-5 md:gap-2 items-center md:flex-col'>
									<Link
										className='bg-blue-600 px-4 text-white py-1 rounded-full'
										href={'/'}
									>
										Coba gratis
									</Link>
									<Link
										className='text-blue-600 font-semibold text-base'
										href={'/'}
									>
										Selengkapnya
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='hidden md:block w-full mt-9'>
						<div className='max-w-7xl mx-auto h-full '>
							<video
								className='border-2 border-black w-full h-full'
								autoPlay
								preload='auto'
								loop
								src='/assets/videos/tv-rumah.mp4'
							/>
							<h4 className='font-semibold p-3'>
								Streaming Severance di aplikasi Apple TV
							</h4>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
}
