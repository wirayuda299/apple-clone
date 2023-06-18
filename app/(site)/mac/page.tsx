import MacBookPro from '@/components/hero/macbook/macBookPro';
import MacMini from '@/components/hero/macmini/macMini';
import Options from '@/components/options/Options';
import AppLists from '@/components/Apps/BuiltInApps/AppLists';
import AppCarouselMobile from '@/components/Apps/Carousels/AppsCarousel';
import WhatMakesMac from '@/components/WhatMakesMac/WhatMakesMac';
import Pro from '@/components/Apps/Pro/ProApps';
import applists from '@/data/builtInApps.json';
import proApps from '@/data/proApps.json';
import ProductTypes from '@/components/ProductTypes/ProductTypes';
import macbookTypes from '@/data/macTypes.json';

export default function Mac() {
	return (
		<div className='pt-10 bg-white w-full h-full overflow-y-auto'>
			<ProductTypes productTypes={macbookTypes} />
			<MacBookPro />
			<MacMini />
			<Options />
			<WhatMakesMac />
			<section className='mt-5'>
				<AppLists />
				<AppCarouselMobile applists={applists} />
			</section>
			<section className='mt-5'>
				<Pro />
				<AppCarouselMobile applists={proApps} />
			</section>
		</div>
	);
}
