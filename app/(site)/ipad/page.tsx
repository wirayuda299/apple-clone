import Image from 'next/image';
import Link from 'next/link';

import ipadtypes from '@/data/ipadtypes.json';
import {
	Features,
	IpadHero,
	AppleCard,
	IpadBanners,
	Ipadfeatures,
	ProductTypes,
	WhatMakesIpad,
	IPadEssentials,
	IpadAccessoris,
} from '@/components/index';

export default function IpadPage() {
	return (
		<div className='pt-10 bg-[#f5f5f7] w-full h-full '>
			<section className='pt-2 w-full bg-white'>
				<ProductTypes productTypes={ipadtypes} />
			</section>
			<div className='bg-black w-full h-full'>
				<IpadHero />
			</div>
			<IpadBanners />
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
			<AppleCard />
			<Features />
			<IPadEssentials />
			<IpadAccessoris />
			<WhatMakesIpad />
			<Ipadfeatures />
		</div>
	);
}
