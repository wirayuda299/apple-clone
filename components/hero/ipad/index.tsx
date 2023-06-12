import Image from 'next/image';
import ipad from '@/assets/images/hero/ipad-nobg.png';
import HeroLinks from '../Links';

export default function Ipad() {
	return (
		<section className='w-full h-full'>
			<div className='w-full relative h-full'>
				<div className='w-[500px] h-[500px] rounded-full absolute top-0 z-[-1] right-1/2  translate-x-1/2 bg-[#0d022d] blur-3xl'></div>
				<div className='w-[500px] h-[500px] rounded-full absolute top-0 z-[-1] right-1/4  translate-x-1/2 bg-[#240227] blur-3xl'></div>
				<div className='max-w-5xl mx-auto h-[40rem] relative'>
					<div className='flex flex-col lg:flex-row justify-evenly lg:justify-between gap-10 items-center w-full h-full relative'>
						<div className='p-5'>
							<h2 className='text-4xl md:text-6xl text-center font-semibold whitespace-nowrap'>
								iPad Pro
							</h2>
							<p className='text-xl md:text-2xl text-center whitespace-nowrap items-center py-1 flex'>
								Bertenaga super berkat
								<Image
									className='w-10 h-10 aspect-auto'
									width={100}
									height={100}
									quality={100}
									src='/m2.png'
									alt='m2'
								/>
							</p>
							<HeroLinks />
						</div>
						<div className='aspect-square w-[20rem] h-[20rem] relative lg:w-full lg:h-full'>
							<Image
								src={ipad}
								quality={100}
								alt='ipad pro'
								placeholder='blur'
								loading='lazy'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								blurDataURL={ipad.blurDataURL}
								fill
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
