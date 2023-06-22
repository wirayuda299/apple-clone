import MagSafe from '@/components/Banners/MagSafe';
import Iphone14 from '@/components/Banners/Iphone14';
import IphoneSe from '@/components/Banners/IphoneSe';
import HeroIphone14 from '@/components/hero/Iphone14Pro';
import Airtag from '@/components/Banners/Airtag';
import AirPods from '@/components/Banners/AirPods';
import Ios16 from '@/components/Banners/Ios16';
import SwitchToIphone from '@/components/Banners/SwitchToIphone';
import IphoneGuideTour from '@/components/Banners/IphoneGuideTour';

export default async function IphonePage() {
	return (
		<section className='bg-[#f2f2f2] '>
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
		</section>
	);
}
