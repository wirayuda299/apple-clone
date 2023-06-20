import Image from 'next/image';
import Link from 'next/link';
export default function IpadAccessoris() {
	return (
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
				<Image
					src='/assets/images/ipad/ipad_accessories_large.jpg'
					alt='ipad accessoris'
					width={1057}
					height={432}
					loading='lazy'
				/>
			</picture>
		</section>
	);
}
