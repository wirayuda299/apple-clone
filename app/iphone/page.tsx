import Iphone from '@/components/Banners/iphonePro';
import HeroIphone14 from '@/components/hero/Iphone14Pro';
import HeroLinks from '@/components/hero/Links';
import Image from 'next/image';

export default function IphonePage() {
	return (
		<section className='bg-white w-full h-full'>
			<Iphone />
			<div className='bg-black w-full h-full'>
				<HeroIphone14 />
			</div>
			<section className='w-full grid grid-cols-1 mx-auto md:grid-cols-2 items-center justify-center h-full'>
				<div className='text-center p-5'>
					<Image
						src='/assets/images/logo/iphone_se_logo.jpg'
						width={100}
						height={100}
						alt='iphone se logo'
						className='object-contain mx-auto'
					/>
					<h2 className='text-[#365cd5] font-bold text-3xl md:text-4xl lg:text-6xl p-5'>
						Kemampuan hebat yang bersahabat.
					</h2>
					<div>
						<HeroLinks />
					</div>
				</div>
				<picture>
					<source
						media='(max-width:800px )'
						srcSet='/assets/images/banner/iphone_se_small.jpg'
					/>
					<Image
						src='/assets/images/banner/iphone_se_large.jpg'
						width={494}
						height={839}
						className='object-contain'
						alt='iphone se'
					/>
				</picture>
			</section>
		</section>
	);
}
