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
						<SwiperSlide key={data.id}>
							<div className='relative' key={data.id}>
								<Image
									src={data.image_large}
									width={1000}
									height={1000}
									alt={data.title}
									className='object-cover w-full h-full hidden md:block'
								/>
								<Image
									src={data['image-small']}
									width={500}
									height={500}
									alt={data.title}
									className=' w-full  object-cover object-center block md:hidden'
								/>
								<div className='absolute md:p-5 md:bottom-0 top-0 h-full left-3 flex flex-col-reverse md:flex-row justify-start items-center md:items-end w-full  gap-10 '>
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
									<h2 className='font-bold text-2xl  flex-col md:items-center md:gap-2 md:flex-row text-center flex '>
										<p className='text-3xl uppercase md:capitalize md:text-xl lg:text-2xl'>
											{data.category}
										</p>
										<span className='hidden md:block'>-</span>
										<span className='text-xl font-normal md:text-base lg:text-xl'>
											{data.subtext}
										</span>
									</h2>
									<div className='absolute top-0 block md:hidden'>
										<div className='flex items-center justify-center space-x-2 p-3'>
											<Image
												src={'/apple.svg'}
												width={50}
												height={50}
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
