import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
export default function MacMini() {
	return (
		<section
			className='w-full h-[50rem] mt-4 bg-black bg-center bg-no-repeat'
			style={{
				backgroundImage: `url(/assets/images/promo/macmini.jpg)`,
			}}
		>
			<div className='flex justify-center flex-col items-center p-10'>
				<span className='text-orange-500 font-bold'>Baru</span>
				<h2 className='text-4xl sm:text-5xl md:text-7xl font-bold capitalize'>
					MacBook Mini
				</h2>
				<p className='font-semibold text-lg md:text-xl'>
					Lebih bertenaga. Lebih melesat.
				</p>
				<div className='flex items-center gap-3 mt-5'>
					<button
						type='button'
						name='buy'
						title='buy'
						className='bg-blue-600 px-5 py-1 font-semibold rounded-full'
					>
						Beli
					</button>
					<Link
						href={'/mac-mini'}
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
