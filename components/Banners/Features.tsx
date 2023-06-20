import Image from 'next/image';
import Link from 'next/link';
export default function Features() {
	return (
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
							You can pay over time when you choose to check out with Apple Card
							Monthly Installments.*
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
	);
}
