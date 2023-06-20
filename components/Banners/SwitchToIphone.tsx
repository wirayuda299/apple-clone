import Image from 'next/image';
import Link from 'next/link';
export default function SwitchToIphone() {
	return (
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
								srcSet='/assets/images/apple/switchtoIphone/switching_to_iphone_small.jpg'
								media='(max-width:734px)'
								width={734}
								height={247}
							/>
							<source
								srcSet='/assets/images/apple/switchtoIphone/switching_to_iphone_medium.jpg'
								media='(max-width:1068px)'
								width={358}
								height={187}
							/>
							<Image
								src='/assets/images/apple/switchtoIphone/switching_to_iphone_large.jpg'
								width={675}
								height={357}
								className='object-contain object-bottom w-full h-full'
								alt='why switch into iphone image'
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
								alt='2 peoples bring iphone'
							/>
						</picture>
					</div>
				</div>
			</div>
		</section>
	);
}
