import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function HeroLinks() {
	return (
		<div className='flex  h-full justify-center items-center text-xl md:mt-5 gap-10 md:gap-16'>
			<Link
				href={'/selengkapnya'}
				as={'/selengkapnya'}
				className='flex space-x-2 items-center text-blue-500'
			>
				Selengkapnya
				<MdOutlineKeyboardArrowRight size={35} />
			</Link>
			<Link
				href={'/beli'}
				as={'/beli'}
				className='flex space-x-2 items-center text-blue-500'
			>
				Beli
				<MdOutlineKeyboardArrowRight size={35} />
			</Link>
		</div>
	);
}
