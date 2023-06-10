'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AiFillPlayCircle } from 'react-icons/ai';
import carouselData from '@/data/carousel.json';

export default function Carousel() {
	return (
		<div className='w-full h-full transition-all ease duration-500'>
			<div className='w-full h-full'>
				<Swiper
					spaceBetween={50}
					centeredSlides={true}
					slidesPerView={1}
					autoplay={{
						delay: 8000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Navigation]}
				>
					{carouselData.map((data) => (
						<SwiperSlide>
							<div className='relative' key={data.id}>
								<Image
									src={data.image}
									width={1000}
									height={1000}
									alt=''
									className='object-cover w-full'
								/>
								<div className='absolute bottom-3  left-3 flex flex-col-reverse md:flex-row items-center w-full  gap-10 '>
									<button
										type='button'
										name='streaming'
										title='streaming'
										className='flex space-x-2 items-center p-2 lg:p-4 bg-white font-semibold rounded-full text-black gap-3 '
									>
										<p className='text-xs'>Streaming sekarang</p>
										<AiFillPlayCircle className='text-2xl' />
									</button>
									<h2 className='font-bold text-2xl flex flex-col md:flex-row text-center'>
										<span>{data.title}</span> -
										<span className='text-xl md:text-2xl font-normal'>
											{' '}
											{data.subtext}
										</span>
									</h2>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
