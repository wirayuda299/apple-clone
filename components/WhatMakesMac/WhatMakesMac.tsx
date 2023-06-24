import whatMakeMac from '@/data/whatMakesMac.json';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

export default function WhatMakesMac() {
	return (
		<section className='bg-[#fafafa] w-full h-full'>
			<div className='max-w-4xl mx-auto text-black'>
				<h2 className='text-4xl lg:text-6xl xl:text-7xl font-semibold pt-20 text-[#1d1d1f] text-center'>
					Apa yang menjadikannya sebuah Mac?
				</h2>
			</div>
			<section className='w-full pt-28 h-full'>
				<div className='w-full h-full flex flex-col justify-center items-center'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full overflow-hidden place-items-center '>
						{whatMakeMac.map((val) => (
							<div
								className='flex flex-col w-full h-fit lg:h-full relative justify-center items-center'
								key={val.id}
							>
								<div className={`p-3 ${!val.image ? 'flex flex-col items-center justify-center h-full' : ' '} lg:absolute top-0  w-full max-w-lg`}>
									{val.topText !== '' && (
										<p className={`${val.topTextStyle} text-md `}>{val?.topText}</p>
									)}
									<h3 className='text-black text-center text-2xl sm:text-3xl py-2 font-bold'>
										{val.title}{' '}
										{val.textTitle && (
											<span className='bg-[#00ff00]'>melakukannya.</span>
										)}
									</h3>
									{val.subTitle && (
										<h4 className='text-black text-lg font-medium text-center py-2'>
											{val.subTitle}
										</h4>
									)}
									{val.path && (
										<Link
											href={val.path}
											as={val.path}
											className='flex space-x-2 items-center justify-center text-blue-500 font-semibold'
										>
											{val.pathTitle}
											<MdOutlineKeyboardArrowRight size={35} />
										</Link>
									)}
								</div>
								{val.image && (
										<Image
											width={500}
											height={300}
											src={val.image}
											alt={val.imagealt}
											loading='lazy'
											className='object-contain w-full h-full lg:object-bottom '
										/>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
}
