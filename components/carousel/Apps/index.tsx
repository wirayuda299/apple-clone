import applists from '@/data/builtInApps.json';
import proApps from '@/data/proApps.json';

import AppCarouselMobile from './AppsCarousel';
import { Lists, ProApps, Title } from '@/components/index';

export default function AppCarousels() {
	return (
		<>
			<section className='mt-5 mx-auto text-center'>
				<Title
					title='Aplikasi bawaan'
					subtext='Alat kreativitas dan produktivitas yang andal ada di setiap Mac — aplikasi yang membantu Anda menjelajah, terhubung, dan bekerja dengan lebih efisien.'
				/>
				<Lists applists={applists} />
				<AppCarouselMobile applists={applists} />T
			</section>
			<section className='mt-5 mx-auto'>
				<ProApps proApps={proApps} />
				<AppCarouselMobile applists={proApps} />
			</section>
		</>
	);
}
