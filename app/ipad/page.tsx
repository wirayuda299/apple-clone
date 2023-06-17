import ProductTypes from '@/components/ProductTypes/ProductTypes';
import HeroLinks from '@/components/hero/Links';
import ipadtypes from '@/data/ipadtypes.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Ipad() {
	return (
		<div className='pt-10 bg-white w-full h-full grid place-content-center'>
			<div className='pt-2'>
				<ProductTypes productTypes={ipadtypes} />
			</div>

			<section className='grid grid-cols-1 max-w-2xl place-content-center place-items-center  p-5 relative'>
				<div className=' order-1 md:order-[0] w-full pt-5'>
					<Image
						src='/assets/images/hero/ipadPagehero.jpg'
						width={500}
						height={500}
						priority
						className='object-contain'
						alt='ipad'
					/>
				</div>
				<div className='mt-5 w-full mx-auto flex justify-center items-center'>
					<div className='static md:absolute  top-1/3 w-full px-10 max-w-[250px] right-0 '>
						<h1 className='text-5xl font-bold text-center text-black'>iPad</h1>
						<p className='text-center text-black text-xl font-bold'>
							Disukai semua. Siap berkarya. Luar biasa.
						</p>
						<div className='pt-5'>
							<HeroLinks />
						</div>
					</div>
				</div>
			</section>
			<section className='text-black grid grid-cols-1 lg:grid-cols-2 place-items-center p-5 max-w-6xl justify-between'>
				<div className='flex flex-col items-center justify-center p-5'>
					<h2 className='font-bold text-2xl sm:text-3xl text-center py-3 lg:text-5xl'>
						Save on iPad or Mac for college.
					</h2>
					<p className='text-center text-sm font-medium lg:text-lg py-1 lg:py-2 px-5'>
						Plus get a gift card up to $150, 20% off AppleCare+, and more.◊
					</p>
					<Link href={'/beli'} className='text-blue-600 font-semibold'>
						Shop now
					</Link>
				</div>
				<div>
					<Image
						src='/assets/images/hero/ipadbanner.jpg'
						width={800}
						height={800}
						className='object-cover w-full h-full'
						alt=''
					/>
				</div>
			</section>

			<section className='text-black py-5 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center w-full h-full'>
				<div className='max-w-md mx-auto flex flex-col items-center  w-full h-full p-5'>
					<h2 className='text-center font-bold text-xl p-3 md:text-4xl'>
						Get 3% Daily Cash back with Apple Card
					</h2>
					<p className='text-center text-sm font-medium md:text-lg'>
						And pay over time, interest‑free when you choose to check out with
						Apple Card Monthly Installments.*
					</p>
					<Link
						className='text-base font-semibold text-blue-600 py-2'
						href={'/learn-more'}
					>
						Learn More
					</Link>
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
						<img
							src='/assets/images/hero/apple_card_large.jpg'
							alt=''
							width={400}
							height={400}
							className='object-cover object-center w-full h-full'
						/>
					</picture>
				</div>
				<div className='max-w-md mx-auto flex flex-col items-center w-full p-5'>
					<h2 className='text-center font-bold text-xl p-3 md:text-4xl'>
						Trade in your current iPad and get credit toward a new one.
					</h2>
					<p className='text-center text-sm font-medium md:text-lg'>
						With Apple Trade In, just give us your eligible iPad and get credit
						for a new one. It’s good for you and the planet.**
					</p>
					<Link
						className='text-base font-semibold text-blue-600 py-2'
						href={'/learn-more'}
					>
						Learn More
					</Link>
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
		</div>
	);
}
