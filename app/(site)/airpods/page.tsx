import AirPods2ndGen from '@/components/Banners/AirPods2ndGen';
import AirPods3rdGen from '@/components/Banners/AirPods3rdGen';
import AirPodsMax from '@/components/Banners/AirPodsMax';
import ProductTypes from '@/components/ProductTypes/ProductTypes';
import AirPodsPro from '@/components/hero/AirPodsPro/AirPodsPro';
import airdpodsTypes from '@/data/airpodsTypes.json';
export default function AirPodsPage() {
	return (
		<section className='bg-white w-full h-full'>
			<section className='pt-10 w-full bg-white'>
				<ProductTypes productTypes={airdpodsTypes} />
			</section>
			<AirPodsPro />
			<AirPods3rdGen />
			<AirPods2ndGen />
			<AirPodsMax />
		</section>
	);
}
