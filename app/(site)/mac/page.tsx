import {
	MacMini,
	MacBookPro,
	WhatMakesMac,
	ProductTypes,
	AppCarousels,
} from '@/components/index';
import macbookTypes from '@/data/macTypes.json';

export default function Mac() {
	return (
		<div className='pt-10 bg-white w-full h-full overflow-y-auto'>
			<ProductTypes productTypes={macbookTypes} />
			<MacBookPro />
			<MacMini />
			<WhatMakesMac />
			<AppCarousels />
		</div>
	);
}
