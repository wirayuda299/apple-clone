import Image from 'next/image';
import HeroLinks from '../Links';

export default function Title() {
	return (
		<div className='w-full flex justify-center flex-col items-center lg:items-start  absolute lg:left-16 p-5'>
			<h2 className='text-4xl md:text-6xl text-center font-semibold whitespace-nowrap'>
				iPad Pro
			</h2>
			<div className=' items-center py-1 flex gap-5'>
				<p className='text-xl md:text-2xl text-center whitespace-nowrap'>
					Bertenaga super berkat
				</p>
				<div className='relative'>
					<div className='bg-gradient-to-br via-[#a42e39] from-[#b49130] blur-[3px] to-[#5c068b] w-12 h-12 rounded'></div>
					<Image
						className='w-14 h-14 object-cover absolute -top-1'
						width={100}
						height={100}
						quality={100}
						loading='lazy'
						src={'/assets/images/logo/m2.png'}
						alt='m2'
					/>
				</div>
			</div>
			<HeroLinks />
		</div>
	);
}
