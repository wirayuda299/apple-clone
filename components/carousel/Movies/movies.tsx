'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AiFillPlayCircle } from 'react-icons/ai';
import data from '@/data/movieCarousel.json';

export default function Movies() {
	return (
		<div>
			<Swiper
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 8000,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay]}
			>
				{data.map((data) => (
					<SwiperSlide key={data.id}>
						<picture className='relative' key={data.id}>
							<source srcSet={data.image_small} media='(max-width:1024px)' />
							<Image
								src={data.image_large}
								alt={data.title}
								width={980}
								loading='lazy'
								fetchPriority='low'
								height={551}
								className='object-cover w-full'
							/>
							<div className='relative w-full h-full '>
								<div className='absolute p-5 z-10 md:bottom-0 -top-16 h-full left-3 flex flex-col-reverse md:flex-row justify-start items-center md:items-end w-full  gap-10 '>
									<button
										type='button'
										name='streaming'
										title='streaming'
										className='flex space-x-2 items-center p-2 lg:p-4 bg-white font-semibold rounded-full text-black gap-3 '
									>
										<p className='text-xs md:font-semibold md:text-sm'>
											Streaming sekarang
										</p>
										<AiFillPlayCircle className='text-2xl' />
									</button>
									<h2 className='font-bold text-2xl max-w-2xl text-center md:text-left flex-col md:items-center md:gap-2 md:flex-row flex '>
										<p className='text-3xl uppercase md:capitalize md:text-xl lg:text-2xl'>
											{data.category}
										</p>
										<span className='hidden md:block'>-</span>
										<span className='text-sm font-normal md:text-base lg:text-xl'>
											{data.subtext}
										</span>
									</h2>
									<div className='absolute top-3 block md:hidden'>
										<div className='flex items-center justify-center space-x-2 p-3'>
											<Image
												src={'/assets/images/logo/apple.svg'}
												width={50}
												height={50}
												loading='lazy'
												className='w-9 h-9'
												alt={'apple'}
											/>
											<h3 className='font-bold uppercase text-2xl'>TV+</h3>
										</div>
										<h4 className='font-extrabold text-5xl text-center uppercase'>
											{data.title}
										</h4>
									</div>
								</div>
							</div>
						</picture>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
