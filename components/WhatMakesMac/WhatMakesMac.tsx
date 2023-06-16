import whatMakeMac from '@/data/whatMakesMac.json';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

export default function WhatMakesMac() {
	return (
		<section>
			<div className='max-w-4xl mx-auto text-black'>
				<h2 className='text-4xl lg:text-6xl xl:text-7xl font-semibold pt-20 text-[#1d1d1f] text-center'>
					Apa yang menjadikannya sebuah Mac?
				</h2>
			</div>
			<section className='w-full pt-28 h-full'>
				<div className='w-full h-full flex flex-col justify-center items-center'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full overflow-hidden place-items-center '>
						{whatMakeMac.map((val) => (
							<div
								className='flex flex-col md:lg-h-[30rem] lg:h-full max-w-lg relative w-full justify-center items-center'
								key={val.id}
							>
								<div>
									{val.topText !== '' && (
										<p className={val.topTextStyle}>{val?.topText}</p>
									)}
									<h3 className='text-black text-center text-4xl py-2 font-bold'>
										{val.title}{' '}
										{val.textTitle && (
											<span className='bg-[#00ff00]'>melakukannya.</span>
										)}
									</h3>
									{val.subTitle && (
										<h4 className='text-black text-xl font-medium text-center py-2'>
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
									<div className={val.imageStyle}>
										<Image src={val.image} fill alt='mac' />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
}
