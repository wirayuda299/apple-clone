import Macbook_header from '@/components/header/macbook_header';
import MacBookPro from '@/components/hero/macBookPro';
import MacMini from '@/components/hero/macMini';
import Options from '@/components/options/Options';

export default function Mac() {
	return (
		<div className='pt-10 bg-white'>
			<Macbook_header />
			<MacBookPro />
			<MacMini />
			<Options />
		</div>
	);
}
