import AirPods2ndGen from '@/components/Banners/AirPods2ndGen';
import AirPods3rdGen from '@/components/Banners/AirPods3rdGen';
import AirPodsMax from '@/components/Banners/AirPodsMax';
import AirPodsPro from '@/components/hero/AirPodsPro/AirPodsPro';

export default function AirPodsPage() {
	return (
		<section className='bg-white w-full h-full'>
			<AirPodsPro />
			<AirPods3rdGen
				title='AirPods'
				subTitle='generasi ke-3'
				imageLarge={{
					src: '/assets/images/banner/airpods_3rd_gen_large.jpg',
					width: 1381,
					height: 830,
				}}
				imageMedium={{
					src: '/assets/images/banner/airpods_3rd_gen_medium.jpg',
					width: 1008,
					height: 717,
				}}
				imageSmall={{
					src: '/assets/images/banner/airpods_3rd_gen_small.jpg',
					width: 324,
					height: 464,
				}}
			/>
			<AirPods2ndGen />
			<AirPodsMax />
		</section>
	);
}
