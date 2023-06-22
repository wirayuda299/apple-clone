import AirPods2ndGen from '@/components/Banners/AirPods2ndGen';
import AirPods3rdGen from '@/components/Banners/AirPods3rdGen';
import AirPodsMax from '@/components/Banners/AirPodsMax';
import AirPodsPro from '@/components/hero/AirPodsPro/AirPodsPro';

export default function AirPodsPage() {
	return (
		<section className='bg-white w-full h-full'>
			<AirPodsPro />
			<AirPods3rdGen />
			<AirPods2ndGen />
			<AirPodsMax />
		</section>
	);
}
