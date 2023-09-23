import watchTypes from '@/data/applewatchTypes.json';
import {
	WatchOs,
	AirPods,
	AppleWatch,
	AppleWatchS8,
	AppleWatchSe,
	FitnessPlus,
	OrderUpdate,
	ProductTypes,
} from '@/components/index';

export default function Watchpage() {
	return (
		<div className='w-full h-full bg-[#f5f5f7]'>
			<section className='pt-10 w-full bg-white'>
				<ProductTypes productTypes={watchTypes} />
			</section>
			<AppleWatch />
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
