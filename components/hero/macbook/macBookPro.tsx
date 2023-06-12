import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
import macbook_pro_large from '@/assets/images/hero/macbook_pro_large.jpg';
export default function MacBookPro() {
	return (
		<section
			className={`w-full h-[50rem] bg-black  bg-center bg-no-repeat`}
			style={{
				backgroundImage: `url(${macbook_pro_large.src})`,
			}}
		>
			<div className='flex justify-center flex-col items-center p-10'>
				<span className='text-orange-500 font-bold'>Baru</span>
				<h1 className='text-7xl font-bold capitalize'>MacBook Pro</h1>
				<p className='font-semibold text-xl'>
					Penggerak. Pendobrak. Penembus batas.
				</p>
				<div className='flex items-center gap-3 py-6'>
					<button
						type='button'
						name='buy'
						title='buy'
						className='bg-blue-600 px-5 py-2 font-semibold rounded-full'
					>
						Beli
					</button>
					<Link
						href={'/macbook-pro-14-and-16'}
						className='text-blue-500 font-semibold hover:underline inline-flex items-center gap-3'
					>
						Selengkapnya
						<SlArrowRight />
					</Link>
				</div>
			</div>
		</section>
	);
}
