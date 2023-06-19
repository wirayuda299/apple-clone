import Iphone from '@/components/Banners/iphonePro';
import HeroIphone14 from '@/components/hero/Iphone14Pro';
import HeroLinks from '@/components/hero/Links';
import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlayCircle } from 'react-icons/fi';
export default async function IphonePage() {
	const res = (await sanityClient.fetch(
		`*[_type == "banner" && page == "iphone"]`
	)) as ImageRes[];

	return (
		<section className='bg-[#f2f2f2] w-full h-full'>
			<Iphone />
			<div className='bg-black w-full h-full'>
				<HeroIphone14 />
			</div>
			<section className='w-full bg-white grid grid-cols-1 mx-auto md:grid-cols-2 items-center justify-center h-full'>
				<div className='text-center p-5'>
					<Image
						src='/assets/images/logo/iphone_se_logo.jpg'
						width={100}
						height={100}
						alt='iphone se logo'
						className='object-contain mx-auto'
					/>
					<h2 className='text-[#365cd5] font-bold text-3xl md:text-4xl lg:text-6xl p-5'>
						Kemampuan hebat yang bersahabat.
					</h2>
					<div>
						<HeroLinks />
					</div>
				</div>
				<picture>
					<source
						media='(max-width:800px )'
						srcSet='/assets/images/banner/iphone_se_small.jpg'
					/>
					<Image
						src='/assets/images/banner/iphone_se_large.jpg'
						width={494}
						height={839}
						className='object-contain'
						alt='iphone se'
					/>
				</picture>
			</section>
			<section className='w-full h-full md:p-5 relative'>
				<div className='static text-black md:text-white mx-auto p-5 md:absolute max-w-lg flex flex-col md:left-0 lg:left-10 justify-center items-center top-0 z-10 w-full h-full'>
					<p className='text-xl md:text-2xl font-bold text-left'>
						{res[0].subTitle}
					</p>
					<h2 className='font-bold text-2xl md:text-4xl lg:text-5xl text-center break-words	 '>
						{res[0].title}
					</h2>
					<Link
						href='/watch'
						className='text-lg md:bg-white md:rounded-full font-semibold text-blue-600 inline-flex gap-2 items-center p-5 md:p-3 md:text-base md:mt-3 md:text-black'
					>
						Watch the film
						<FiPlayCircle className='md:hidden' />
					</Link>
				</div>
				<picture className=' '>
					<source
						media='(max-width: 768px)'
						srcSet={urlFor(res[0].imageSmall).url()}
					/>

					<Image
						src={urlFor(res[0].imageLarge).url()}
						width={1068}
						height={500}
						className='object-cover w-full md:rounded-3xl mx-auto'
						fetchPriority='auto'
						sizes='(max-width:734px) 80vw, 100vw '
						alt='guide tour of iphone 14 and 14 pro'
					/>
				</picture>
			</section>
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
								Langsung tempelkan ke dompet atau casing magnetik, atau
								keduanya. Dan dapatkan pengisian daya nirkabel yang lebih cepat.
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
			<section className='w-full max-w-7xl mx-auto bg-white m-4 text-black h-full'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 items-center'>
						<picture className='order-1 md:order-[0]'>
							<source
								srcSet='/assets/images/apple/aksesoris/airtag_small.jpg'
								media='(max-width:734px)'
								width={734}
								height={397}
							/>
							<source
								srcSet='/assets/images/apple/aksesoris/airtag_medium.jpg'
								media='(max-width:1068px)'
								width={427}
								height={378}
							/>

							<Image
								src={'/assets/images/apple/aksesoris/airtag_large.jpg'}
								width={806}
								height={531}
								className='object-contain'
								alt='airtag'
							/>
						</picture>
						<div className='text-center max-w-sm mx-auto p-3 '>
							<h2 className='text-2xl font-bold md:text-3xl lg:text-4xl p-3'>
								AirTag
							</h2>
							<p className='text-sm font-medium md:text-base p-3'>
								Tempel satu di kunci Anda. Satu lagi di tas Anda. Jika barang
								hilang, cukup gunakan aplikasi Lacak.
							</p>
							<Link
								href={'/'}
								className='font-semibold text-base text-blue-600 m-5'
							>
								Selengkapnya
							</Link>
						</div>
					</div>
				</div>
			</section>
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
							alt=''
						/>
					</picture>
				</div>
			</section>
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
							alt=''
						/>
					</picture>
				</div>
			</section>

			<section className='w-full h-full max-w-7xl mt-5 bg-white text-black mx-auto'>
				<div className='container mx-auto grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 h-full'>
					<div className='w-full h-full min-h-[25rem]'>
						<div className='relative h-full w-full flex justify-center'>
							<div className='absolute top-5 text-center max-w-xl lg:max-w-md lg:top-10 mx-auto'>
								<h2 className='text-2xl font-semibold p-5 sm:text-3xl lg:text-5xl lg:p-2 text-center'>
									Beralih ke iPhone begitu mudah.
								</h2>
								<Link
									href={'/'}
									className='font-semibold text-base lg:text-xl text-blue-600 p-3'
								>
									Selengkapnya
								</Link>
							</div>
							<picture>
								<source
									srcSet='/assets/images/apple/switchtoIPhone/switching_to_iphone_small.jpg'
									media='(max-width:734px)'
									width={734}
									height={247}
								/>
								<source
									srcSet='/assets/images/apple/switchtoIPhone/switching_to_iphone_medium.jpg'
									media='(max-width:1068px)'
									width={358}
									height={187}
								/>
								<Image
									src='/assets/images/apple/switchtoIPhone/switching_to_iphone_large.jpg'
									width={675}
									height={357}
									className='object-contain object-bottom w-full h-full'
									alt=''
								/>
							</picture>
						</div>
					</div>
					<div className='w-full h-full'>
						<div className='relative h-full w-full flex justify-center text-white'>
							<div className='absolute top-5 md:top-10 text-center max-w-xl mx-auto'>
								<h2 className='text-2xl font-bold p-5 sm:text-3xl lg:font-semibold lg:text-5xl text-center'>
									Privasi. Itulah iPhone.
								</h2>
								<Link
									href={'/'}
									className='font-semibold text-base lg:text-xl text-white p-3'
								>
									Selengkapnya
								</Link>
							</div>
							<picture>
								<source
									srcSet='/assets/images/apple/privacy/privacy_small.jpg'
									media='(max-width:734px)'
									width={734}
									height={472}
								/>
								<source
									srcSet='/assets/images/apple/privacy/privacy_medium.jpg'
									media='(max-width:1068px)'
									width={358}
									height={355}
								/>
								<Image
									src='/assets/images/apple/privacy/privacy_large.jpg'
									width={675}
									height={600}
									className='object-contain object-bottom h-full w-full'
									alt=''
								/>
							</picture>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
