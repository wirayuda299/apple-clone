import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';

export default function MacMini() {
	return (
		<section className='w-full h-[50rem] mt-4 bg-black bg-[url(/promo_macmini__fg9smqdnyjmi_large.jpg)] bg-center bg-no-repeat'>
			<div className='flex justify-center flex-col items-center p-10'>
				<span className='text-orange-500 font-bold'>Baru</span>
				<h1 className='text-7xl font-bold capitalize'>MacBook Mini</h1>
				<p className='font-semibold text-xl'>Lebih bertenaga. Lebih melesat.</p>
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
