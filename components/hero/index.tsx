import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
export default function Hero() {
	return (
		<section className='text-black text-center  '>
			<article className='w-full h-[calc(100%-200px)] md:h-[calc(100% - 500px)] mt-14 text-white'>
				<div className='w-full flex flex-col justify-between h-full items-center'>
					<div>
						<h2 className='font-semibold text-4xl md:text-6xl pt-5'>
							iPhone 14 Pro
						</h2>
						<p className='text-center text-xl md:text-3xl'>Semakin Pro.</p>
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
					<div className='hidden lg:block'>
						<Image
							src={'/hero.jpg'}
							priority
							fetchPriority='high'
							width={800}
							alt='hero'
							height={500}
						/>
					</div>
					<div className='block lg:hidden   '>
						<Image
							src={'/apple_small.jpg'}
							width={1000}
							className='object-cover h-[25rem] w-[20rem]'
							alt='hero'
							priority
							fetchPriority='high'
							height={1000}
						/>
					</div>
				</div>
			</article>
		</section>
	);
}
