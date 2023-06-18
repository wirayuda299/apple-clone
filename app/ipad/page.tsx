import ProductTypes from '@/components/ProductTypes/ProductTypes';
import HeroLinks from '@/components/hero/Links';
import ipadtypes from '@/data/ipadtypes.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Ipad() {
	return (
		<div className='pt-10 bg-[#f5f5f7] w-full h-full grid place-items-center'>
			<div className='pt-2 w-full bg-white'>
				<ProductTypes productTypes={ipadtypes} />
			</div>
			<section className='w-full bg-white h-full grid place-content-center place-items-center '>
				<div className='w-full grid grid-cols-1 max-w-2xl  p-5 relative'>
					<div className=' order-1 md:order-[0] w-full pt-5 mx-auto'>
						<Image
							src='/assets/images/hero/ipadPagehero.jpg'
							width={500}
							height={500}
							priority
							fetchPriority='high'
							className='object-contain'
							alt='ipad'
						/>
					</div>
					<div className='mt-5 w-full mx-auto flex justify-center items-center'>
						<div className='static md:absolute  top-1/3 w-full px-10 max-w-[250px] right-0 lg:-right-16'>
							<h1 className='text-5xl font-bold text-center text-black'>
								iPad
							</h1>
							<p className='text-center text-black text-xl font-bold'>
								Disukai semua. Siap berkarya. Luar biasa.
							</p>
							<div className='pt-5'>
								<HeroLinks />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full bg-white grid place-items-center m-5'>
				<div className='text-black grid grid-cols-1 my-5 lg:grid-cols-2 place-items-center p-5 max-w-6xl justify-between'>
					<div className='flex flex-col items-center justify-center p-5 max-w-xl'>
						<h2 className='font-bold text-2xl sm:text-4xl text-center py-3 lg:text-5xl'>
							Save on iPad or Mac for college.
						</h2>
						<p className='text-center text-sm font-medium md:text-lg py-1 lg:py-2 px-5'>
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
							alt='ipad '
							fetchPriority='auto'
						/>
					</div>
				</div>
			</section>
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
						<img
							src='/assets/images/hero/apple_card_large.jpg'
							alt=''
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
							With Apple Trade In, just give us your eligible iPad and get
							credit for a new one. It’s good for you and the planet.**
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

			<section className='bg-white w-full p-5'>
				<div className='max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center text-black'>
					<div className='w-full h-full flex flex-col items-center max-w-2xl'>
						<Image
							src={'/assets/images/svgs/delivery_icon.png'}
							width={50}
							height={50}
							alt='delivery icon'
						/>
						<div className='mx-auto text-center px-5'>
							<h2 className='font-semibold text-2xl md:font-bold'>
								Fast, free delivery
							</h2>
							<p className=' text-sm md:text-base font-medium'>
								Or pick up available items at an Apple Store.
							</p>
							<Link
								href={'/shipping'}
								className='font-semibold text-blue-600 text-base'
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className='w-full h-full flex flex-col items-center max-w-2xl'>
						<Image
							src={'/assets/images/svgs/money-icon.png'}
							width={50}
							height={50}
							alt=''
						/>
						<div className='mx-auto text-center px-5'>
							<h2 className='font-semibold text-2xl md:font-bold'>
								Pay monthly at 0% APR
							</h2>
							<p className=' text-sm md:text-base font-medium'>
								You can pay over time when you choose to check out with Apple
								Card Monthly Installments.*
							</p>
							<Link
								href={'/learn-more'}
								className='font-semibold text-blue-600 text-base'
							>
								Learn More
							</Link>
						</div>
					</div>
					<div className='w-full h-full flex flex-col items-center max-w-2xl'>
						<Image
							src={'/assets/images/svgs/engraving_icon.png'}
							width={50}
							height={50}
							alt='engraving icon'
						/>
						<div className='mx-auto text-center px-5'>
							<h2 className='font-semibold text-2xl md:font-bold'>
								Personalize it
							</h2>
							<p className=' text-sm md:text-base font-medium'>
								Engrave your iPad with your name or a personal note — free. Only
								at Apple.
							</p>
							<Link
								href={'/learn-more'}
								className='font-semibold text-blue-600 text-base'
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>

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
								<img
									src='/assets/images/apple/apple_pencil_large.jpg'
									alt='apple pencil'
									width={675}
									height={373}
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

			<section className='bg-white w-full'>
				<div className='text-center mx-auto text-black w-full p-5 max-w-xl'>
					<h2 className='font-bold text-2xl p-3 sm:text-3xl md:text-4xl'>
						Accessories
					</h2>
					<p className='text-sm font-medium md:text-base'>
						Explore cases, covers, keyboards, Apple Pencil, AirPods, and more.
					</p>
					<Link className='font-semibold text-blue-600 pt-5' href={'/shop'}>
						Shop iPad accessories
					</Link>
				</div>
				<picture className='mx-auto w-full grid place-content-center'>
					<source
						srcSet='/assets/images/ipad/ipad_accessories_medium.jpg'
						media='(max-width:734px)'
						width={532}
						height={259}
					/>
					<source
						srcSet='/assets/images/ipad/ipad_accessories_medium.jpg'
						media='(max-width:1068px)'
						width={738}
						height={339}
					/>
					<img
						src='/assets/images/ipad/ipad_accessories_large.jpg'
						alt='ipad accessoris'
						width={1057}
						height={432}
					/>
				</picture>
			</section>

			<section className='bg-white w-full text-black text-center'>
				<div>
					<h2 className='text-2xl font-bold p-5 sm:text-3xl md:text-4xl md:p-10 lg:text-5xl'>
						What makes an iPad an iPad?
					</h2>
				</div>
				<div className='w-full bg-white'>
					<div className='text-center text-black p-5  grid grid-cols-1 md:grid-cols-2 items-center bg-white w-full'>
						<div className='w-full p-5'>
							<h2 className='text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-6xl lg:p-3'>
								Why iPad
							</h2>
							<p className='text-sm sm:text-base md:text-xl lg:p-2'>
								Yes, it does that. And then some.
							</p>
							<Link
								href={'/learn-more'}
								className='text-sm py-5 sm:text-base md:text-xl font-semibold text-blue-600'
							>
								Learn More
							</Link>
						</div>
						<picture className='mx-auto w-full grid place-content-center'>
							<source
								srcSet='/assets/images/ipad/why_ipad_small.jpg'
								media='(max-width:734px)'
								width={387}
								height={260}
							/>
							<source
								srcSet='/assets/images/ipad/why_ipad_medium.jpg'
								media='(max-width:1068px)'
								width={414}
								height={287}
							/>
							<img
								src='/assets/images/ipad/why_ipad_large.jpg'
								alt='ipad accessoris'
								width={692}
								height={468}
							/>
						</picture>
					</div>
					<div className='text-center  text-black p-5 bg-white w-full'>
						<div className='w-full p-5'>
							<h2 className='text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-6xl lg:p-3'>
								iPadOS 17
							</h2>
							<p className='text-sm sm:text-base md:text-xl lg:p-2'>
								Even more capable. Even more you.
							</p>
							<Link
								className='text-sm py-5 sm:text-base md:text-xl font-semibold text-blue-600'
								href={'/learn-more'}
							>
								Explore the preview
							</Link>
						</div>
						<picture className='mx-auto w-full grid place-content-center'>
							<source
								srcSet='/assets/images/ipad/ipad_os_small.jpg'
								media='(max-width:734px)'
								width={734}
								height={300}
							/>
							<source
								srcSet='/assets/images/ipad/ipad_os_medium.jpg'
								media='(max-width:1068px)'
								width={736}
								height={445}
							/>
							<img
								src='/assets/images/ipad/ipad_os_large.jpg'
								alt='ipad accessoris'
								width={1380}
								height={638}
							/>
						</picture>
					</div>
				</div>
			</section>
			<section className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5 justify-center'>
				<div className='text-center mx-auto text-black p-5 max-w-2xl bg-white w-full'>
					<h2 className='text-2xl py-3 font-semibold sm:text-3xl sm:font-bold md:text-4xl lg:text-5xl'>
						iCloud
					</h2>
					<p className='text-sm sm:text-base md:text-xl lg:p-2'>
						The best place for all your photos, files, and more.
					</p>
					<Link
						className='text-sm pt-10 sm:text-base md:text-xl font-semibold text-blue-600'
						href={'/learn-more'}
					>
						Learn More
					</Link>
					<picture className='mx-auto w-full grid place-content-center lg:pt-5'>
						<source
							srcSet='/assets/images/ipad/icloud_small.jpg'
							media='(max-width:734px)'
							width={453}
							height={214}
						/>
						<source
							srcSet='/assets/images/ipad/icloud_medium.jpg'
							media='(max-width:1068px)'
							width={335}
							height={212}
						/>
						<img
							src='/assets/images/ipad/icloud_large.jpg'
							alt='icloud'
							width={594}
							height={280}
						/>
					</picture>
				</div>
				<div className='text-center mx-auto text-black p-5 max-w-2xl bg-white w-full'>
					<Image
						src={'/assets/images/ipad/apple_pay_logo.png'}
						width={100}
						height={100}
						className='object-cover mx-auto py-3'
						alt='Apple'
					/>
					<p className='text-sm sm:text-base md:text-xl lg:p-2'>
						The safer way to make secure, contactless purchases in stores and
						online.
					</p>
					<Link
						href={'/learn-more'}
						className='text-sm py-5 sm:text-base md:text-xl font-semibold text-blue-600'
					>
						Learn More
					</Link>
					<picture className='mx-auto w-full grid place-content-center'>
						<source
							srcSet='/assets/images/ipad/apple_pay.jpg'
							media='(max-width:734px)'
							width={331}
							height={241}
						/>
						<source
							srcSet='/assets/images/ipad/apple_pay_medium.jpg'
							media='(max-width:1068px)'
							width={275}
							height={200}
						/>
						<img
							src='/assets/images/ipad/apple_pay_large.jpg'
							alt='apple pay'
							width={388}
							height={281}
						/>
					</picture>
				</div>
			</section>
		</div>
	);
}
