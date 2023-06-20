import Image from 'next/image';
import Link from 'next/link';
export default function IPadEssentials() {
	return (
		<section className='text-black  w-full pt-8	'>
			<div className='bg-white w-full '>
				<h2 className='text-center text-3xl font-bold sm:text-4xl md:text-5xl p-5'>
					iPad essentials
				</h2>

				<div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center h-full items-center gap-5 max-w-6xl p-5 mx-auto'>
					<div className='flex flex-col items-center text-center'>
						<h2 className='text-2xl py-3 font-semibold sm:font-bold sm:text-3xl md:text-4xl'>
							Apple Pencil
						</h2>
						<p className='text-base font-medium'>Dream it up. Jot it down.</p>
						<div className='inline-flex gap-5 py-4'>
							<Link href={'/'} className='text-blue-600 font-semibold'>
								Shop
							</Link>
							<Link href={'/'} className='text-blue-600 font-semibold'>
								Learn More
							</Link>
						</div>
						<picture>
							<source
								srcSet='/assets/images/apple/apple_pencil_medium.jpg'
								media='(max-width:734px)'
								width={358}
								height={257}
							/>
							<source
								srcSet='/assets/images/apple/apple_pencil.jpg'
								media='(max-width:1068px)'
								width={358}
								height={257}
							/>
							<Image
								src='/assets/images/apple/apple_pencil_large.jpg'
								alt='apple pencil'
								width={675}
								height={373}
								loading='lazy'
							/>
						</picture>
					</div>
					<div className='flex flex-col md:flex-col-reverse items-center text-center'>
						<div>
							<h2 className='text-2xl py-3 font-semibold sm:text-3xl sm:font-bold  md:text-4xl'>
								Keyboards for iPad
							</h2>
							<p className='text-base font-medium'>
								Keyboards that have you covered.
							</p>
							<div className='inline-flex gap-5 py-4'>
								<Link href={'/'} className='text-blue-600 font-semibold'>
									Shop
								</Link>
								<Link href={'/'} className='text-blue-600 font-semibold'>
									Learn More
								</Link>
							</div>
						</div>
						<picture>
							<source
								srcSet='/assets/images/apple/smart_keyboard_small.jpg'
								media='(max-width:734px)'
								width={358}
								height={257}
							/>
							<source
								srcSet='/assets/images/apple/smart_keyboard_medium.jpg'
								media='(max-width:1068px)'
								width={358}
								height={257}
							/>
							<img
								src='/assets/images/apple/smart_keyboard_large.jpg'
								alt='apple pencil'
								width={675}
								height={373}
							/>
						</picture>
					</div>
				</div>
			</div>
		</section>
	);
}
