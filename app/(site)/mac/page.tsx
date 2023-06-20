import MacBookPro from '@/components/hero/macbook/macBookPro';
import MacMini from '@/components/hero/macmini/macMini';
import Compares from '@/components/Compares/Compares';
import WhatMakesMac from '@/components/WhatMakesMac/WhatMakesMac';
import ProductTypes from '@/components/ProductTypes/ProductTypes';
import macbookTypes from '@/data/macTypes.json';
import AppCarousels from '@/components/carousel/Apps';

export default function Mac() {
	return (
		<div className='pt-10 bg-white w-full h-full overflow-y-auto'>
			<ProductTypes productTypes={macbookTypes} />
			<MacBookPro />
			<MacMini />
			<Compares />
			<WhatMakesMac />
			<AppCarousels />
		</div>
	);
}
