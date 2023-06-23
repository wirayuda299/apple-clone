'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AiFillPlayCircle } from 'react-icons/ai';
import { urlFor } from '@/lib/sanity/utils/sanityImage';

export default function Movies<T extends MoviesCarousels[]>({
	movies,
}: {
	movies: T;
}) {
	return (
		<div>
			<Swiper
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay]}
			>
				{movies.map((data) => (
					<SwiperSlide key={data._id}>
						<picture className='relative'>
							<source
								srcSet={urlFor(data.carouselImage.imageSmall.source).url()}
								media='(max-width:734px)'
								width={data.carouselImage.imageSmall.width}
								height={data.carouselImage.imageSmall.height}
							/>
							<source
								srcSet={urlFor(data.carouselImage.imageMedium.source).url()}
								media='(max-width:1068px)'
								width={data.carouselImage.imageMedium.width}
								height={data.carouselImage.imageMedium.height}
							/>
							<Image
								src={urlFor(data.carouselImage.imageLarge.source).url()}
								alt={data.title}
								width={data.carouselImage.imageLarge.width}
								height={data.carouselImage.imageLarge.height}
								loading='lazy'
								fetchPriority='low'
								className='object-cover w-full'
							/>
							<div className='relative w-full h-full '>
								<div className='absolute p-5 z-10 md:bottom-0 -top-16 h-full left-3 flex flex-col-reverse sm:flex-row justify-start items-center md:items-end w-full  gap-10 '>
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
									<h2 className='font-bold text-2xl max-w-2xl text-center md:text-left flex-col md:items-center sm:gap-3 sm:flex-row flex '>
										<p className='text-3xl uppercase md:capitalize md:text-xl lg:text-2xl'>
											{data.genre}
										</p>
										<span className='hidden md:block'>-</span>
										<span className='text-sm font-normal md:text-base text-center sm:text-left lg:text-xl'>
											{data.subTitle}
										</span>
									</h2>
								</div>
							</div>
						</picture>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
