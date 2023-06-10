import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function Iphone() {
	return (
		<section className='w-full text-black bg-white bg-[url(/iphone_yellow.jpg)] h-[600px] bg-cover md:bg-contain bg-no-repeat bg-center p-5'>
			<div className='w-full flex flex-col justify-center items-center'>
				<div>
					<h2 className='font-semibold text-4xl md:text-6xl pt-10'>
						iPhone 14
					</h2>
					<p className='text-center text-xl md:text-3xl'>Penuh keajaiban.</p>
				</div>
				<div className='flex  h-full justify-center items-center text-base md:text-xl mt-5 gap-16'>
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
			</div>
		</section>
	);
}
