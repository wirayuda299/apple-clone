import Image from 'next/image';
import ipadnobg from '../../public/ipad-nobg.png';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
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
									className=' shadow-yellow-600 drop-shadow-md w-8 h-8 aspect-square'
									width={100}
									height={100}
									quality={100}
									src='/m2.png'
									alt='m2'
								/>
							</p>
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
						</div>
						<div className='aspect-square w-[20rem] h-[20rem] relative lg:w-full lg:h-full'>
							<Image
								src={ipadnobg}
								quality={100}
								alt='ipad pro'
								placeholder='blur'
								loading='lazy'
								blurDataURL={ipadnobg.blurDataURL}
								fill
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
