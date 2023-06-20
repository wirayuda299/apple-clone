import AppleWatch from '@/components/Banners/AppleWatch';
import { Suspense } from 'react';
import OrderUpdate from '@/components/Banners/OrderUpdate';
import AppleWatchS8 from '@/components/Banners/AppleWatchS8';
import AppleWatchSe from '@/components/Banners/AppleWatchSe';
import FitnessPlus from '@/components/Banners/FitnessPlus';

export default function Watchpage() {
	return (
		<div className='w-full h-full bg-[#f5f5f7]'>
			<Suspense>
				<AppleWatch />
			</Suspense>
			<OrderUpdate />
			<AppleWatchS8 />
			<AppleWatchSe />
			<FitnessPlus />
		</div>
	);
}
