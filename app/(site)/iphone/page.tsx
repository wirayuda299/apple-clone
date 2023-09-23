import iphoneTypes from '@/data/iphoneTypes.json';
import {
	Ios16,
	Airtag,
	AirPods,
	MagSafe,
	IphoneSe,
	Iphone14,
	ProductTypes,
	HeroIphone14,
	SwitchToIphone,
	IphoneGuideTour,
} from '@/components/index';

export default async function IphonePage() {
	return (
		<div className='bg-[#f2f2f2] '>
			<section className='pt-10 w-full bg-white'>
				<ProductTypes productTypes={iphoneTypes} />
			</section>
			<Iphone14 priority={true} />
			<section className='bg-black '>
				<HeroIphone14 />
			</section>
			<IphoneSe />
			<IphoneGuideTour />
			<MagSafe />
			<Airtag />
			<AirPods />
			<Ios16 />
			<SwitchToIphone />
		</div>
	);
}
