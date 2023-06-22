import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function HeroLinks() {
	return (
		<div className='flex  justify-center items-center text-xl md:mt-5 gap-10 md:gap-16'>
			<Link
				href={'/'}
				as={'/'}
				prefetch={false}
				className='flex text-sm lg:text-base space-x-2 items-center text-blue-500'
			>
				Selengkapnya
				<MdOutlineKeyboardArrowRight size={30} />
			</Link>
			<Link
				href={'/'}
				as={'/'}
				prefetch={false}
				className='flex text-sm lg:text-base space-x-2 items-center text-blue-500'
			>
				Beli
				<MdOutlineKeyboardArrowRight size={30} />
			</Link>
		</div>
	);
}
