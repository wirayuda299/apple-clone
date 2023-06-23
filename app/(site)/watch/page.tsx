import AppleWatch from '@/components/Banners/AppleWatch';
import { Suspense } from 'react';
import OrderUpdate from '@/components/Banners/OrderUpdate';
import AppleWatchS8 from '@/components/Banners/AppleWatchS8';
import AppleWatchSe from '@/components/Banners/AppleWatchSe';
import FitnessPlus from '@/components/Banners/FitnessPlus';
import WatchOs from '@/components/Banners/WatchOs';
import AirPods from '@/components/Banners/AirPods';
import ProductTypes from '@/components/ProductTypes/ProductTypes';
import watchTypes from '@/data/applewatchTypes.json';
export default function Watchpage() {
	return (
		<div className='w-full h-full bg-[#f5f5f7]'>
			<section className='pt-10 w-full bg-white'>
				<ProductTypes productTypes={watchTypes} />
			</section>
			<Suspense>
				<AppleWatch />
			</Suspense>
			<OrderUpdate />
			<AppleWatchS8 />
			<AppleWatchSe />
			<FitnessPlus />
			<WatchOs />
			<section className='pt-16 h-full bg-white w-full'>
				<AirPods />
			</section>
		</div>
	);
}
