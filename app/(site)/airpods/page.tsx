import {
	AirPodsPro,
	AirPodsMax,
	ProductTypes,
	AirPods2ndGen,
	AirPods3rdGen,
} from '@/components/index';

import airdpodsTypes from '@/data/airpodsTypes.json';

export default function AirPodsPage() {
	return (
		<div className='bg-white w-full h-full'>
			<section className='pt-10 w-full bg-white'>
				<ProductTypes productTypes={airdpodsTypes} />
			</section>
			<AirPodsPro />
			<AirPods3rdGen />
			<AirPods2ndGen />
			<AirPodsMax />
		</div>
	);
}
