import Image from 'next/image';
import Link from 'next/link';
import mac from '@/assets/images/svgs/mac.svg';
import macbookPro from '@/assets/images/svgs/macbook-pro.svg';
import macPro from '@/assets/images/svgs/mac_pro.svg';
import imac from '@/assets/images/svgs/imac_24.svg';
import macmini from '@/assets/images/svgs/mac_mini.svg';
import macstudio from '@/assets/images/svgs/mac_studio.svg';
import macCompare from '@/assets/images/svgs/mac_compare.svg';
import display from '@/assets/images/svgs/displays.svg';
import ventura from '@/assets/images/svgs/mac_os.svg';

const macbookTypes = [
	{
		id: '1',
		name: 'Macbook Air',
		image: mac,
		path: '/macbook-air',
	},
	{
		id: '2',
		name: 'Macbook Pro',
		image: macbookPro,
		path: '/macbook-pro',
	},
	{
		id: '3',
		name: 'iMac 24',
		image: imac,
		path: '/imac-24',
	},
	{
		id: '4',
		name: 'Mac mini',
		image: macmini,
		path: '/mac-mini',
	},
	{
		id: '5',
		name: 'Mac Studio',
		image: macstudio,
		path: '/macbook-studio',
	},
	{
		id: '6',
		name: 'Mac Pro',
		image: macPro,
		path: '/mac-pro',
	},
	{
		id: '7',
		name: 'Compare',
		image: macCompare,
		path: '/compare',
	},
	{
		id: '8',
		name: 'Display',
		image: display,
		path: '/display',
	},
	{
		id: '9',
		name: 'Ventura',
		image: ventura,
		path: '/mac-os',
	},
];

export default function Macbook_header() {
	return (
		<header className='overflow-hidden'>
			<div className='max-w-3xl mx-auto grid place-content-center overflow-hidden'>
				<div className='bg-white flex justify-center gap-5 items-center w-full snap-mandatory overflow-x-scroll'>
					{macbookTypes.map((mac) => (
						<Link href={mac.path} key={mac.id}>
							<Image
								className='w-14 h-14 '
								src={mac.image}
								alt={mac.name}
								width={100}
								height={100}
							/>
							<p className='text-black md:text-center text-xs'>{mac.name}</p>
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
