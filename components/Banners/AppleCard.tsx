import Image from 'next/image';
import Link from 'next/link';
export default function AppleCard() {
	return (
		<section className='text-black py-5 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center w-full h-full'>
			<div className='bg-white w-full flex flex-col items-center justify-center'>
				<div className=' mx-auto flex flex-col items-center max-w-lg w-full h-full'>
					<h2 className='text-center font-bold text-xl p-5 md:p-10 sm:text-4xl md:text-3xl'>
						Get 3% Daily Cash back with Apple Card
					</h2>
					<p className='text-center text-sm px-5 font-medium md:text-md lg:text-base'>
						And pay over time, interest‑free when you choose to check out with
						Apple Card Monthly Installments.*
					</p>
					<Link
						className='text-base text-center font-semibold text-blue-600 py-2'
						href={'/learn-more'}
					>
						Learn More
					</Link>
				</div>
				<picture className='w-full h-full'>
					<source
						srcSet='/assets/images/hero/apple_card_small.jpg'
						media='(max-width:734px)'
						width={525}
						height={206}
						className='object-cover w-full '
					/>
					<source
						srcSet='/assets/images/hero/apple_card_medium.jpg'
						media='(max-width:1028px)'
						width={358}
						height={231}
						className='object-cover w-full '
					/>
					<Image
						src='/assets/images/hero/apple_card_large.jpg'
						alt='apple card'
						width={400}
						height={400}
						className='object-cover object-center w-full h-full'
					/>
				</picture>
			</div>
			<div className='bg-white w-full flex flex-col items-center justify-center'>
				<div className=' mx-auto flex flex-col items-center max-w-lg w-full h-full'>
					<h2 className='text-center font-bold text-xl p-5 md:p-10 sm:text-4xl md:text-3xl'>
						Trade in your current iPad and get credit toward a new one.
					</h2>
					<p className='text-center text-sm px-5 font-medium md:text-md lg:text-base'>
						With Apple Trade In, just give us your eligible iPad and get credit
						for a new one. It’s good for you and the planet.**
					</p>
					<Link
						className='text-base font-semibold text-blue-600 py-2'
						href={'/learn-more'}
					>
						Learn More
					</Link>
				</div>
				<picture>
					<source
						srcSet='/assets/images/hero/ipad_banner_small.jpg'
						media='(max-width:734px)'
						width={254}
						height={255}
						className='object-contain  '
					/>
					<source
						srcSet='/assets/images/hero/ipad_banner_medium.jpg'
						media='(max-width:1068px)'
						width={358}
						height={231}
						className='object-contain '
					/>
					<img
						src='/assets/images/hero/ipad_banner_large.jpg'
						alt=''
						className='object-contain '
					/>
				</picture>
			</div>
		</section>
	);
}
