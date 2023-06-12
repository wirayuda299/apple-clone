'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AiFillPlayCircle } from 'react-icons/ai';
import cityOnFire from '@/assets/images/carousel/images/large/city-on-fire.jpg';
import cityOnFireSmall from '@/assets/images/carousel/images/small/city-on-fire_small.jpg';
import silolarge from '@/assets/images/carousel/images/large/silo.jpg';
import siloSmall from '@/assets/images/carousel/images/small/silo_small.jpg';
import prehistoricLarge from '@/assets/images/carousel/images/large/prehistoric.jpg';
import prehistoricSmall from '@/assets/images/carousel/images/small/prehistoric_small.jpg';
import tedLassoLarge from '@/assets/images/carousel/images/large/ted-lasso.jpg';
import tedLassoSmall from '@/assets/images/carousel/images/small/ted-lasso_small.jpg';
import platonic from '@/assets/images/carousel/images/large/platonic.jpg';
import platonicSmall from '@/assets/images/carousel/images/small/platonic_small.jpg';
import crowded from '@/assets/images/carousel/images/large/crowded.jpg';
import crowdedSmall from '@/assets/images/carousel/images/small/crowded_small.jpg';
import pachinkoSmall from '@/assets/images/carousel/images/small/pachinko_small.jpg';
import pachinko from '@/assets/images/carousel/images/large/pachinko.jpg';

export default function Carousel() {
	const data = [
		{
			id: '1',
			title: 'Prehistoric',
			category: 'Dokumenter',
			subtext: 'Masa penuh tanda tanya. Kini hadir di depan mata.',
			image_large: prehistoricLarge,
			image_small: prehistoricSmall,
		},
		{
			id: '2',
			title: 'Silo',
			category: 'Fiksi ilmiah',
			subtext: 'Kebenaran akan muncul kepermukaan.',
			image_large: silolarge,
			image_small: siloSmall,
		},
		{
			id: '3',
			title: 'Ted Lasso',
			category: 'Komedi',
			subtext: 'Kebaikan hadir kembali.',
			image_large: tedLassoLarge,
			image_small: tedLassoSmall,
		},
		{
			id: '4',
			title: 'Platonic',
			category: 'Komedi',
			subtext:
				'Upaya kocak dua teman lama (Seth Rogen & Rose Byrne) kembali jalin persahabatan.',
			image_large: platonic,
			image_small: platonicSmall,
		},
		{
			id: '5',
			title: 'Crowded',
			category: 'Thirller',
			subtext: 'Fakta bukanlah keseluruhan dari kisah.',
			image_large: crowded,
			image_small: crowdedSmall,
		},
		{
			id: '6',
			title: 'City on Fire',
			category: 'Drama',
			subtext: 'Dari produser eksekutif Gossip Girl dan The O.C',
			image_large: cityOnFire,
			image_small: cityOnFireSmall,
		},
		{
			id: '7',
			title: 'Pachinko',
			category: 'Drama',
			subtext: 'Empat generasi. Satu takdir.',
			image_large: pachinko,
			image_small: pachinkoSmall,
		},
	];

	return (
		<div>
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
				{data.map((data) => (
					<SwiperSlide key={data.id}>
						<div className='relative' key={data.id}>
							<Image
								src={data.image_large}
								width={1000}
								height={1000}
								fetchPriority='auto'
								alt={data.title}
								className='object-cover w-full object-center hidden md:block'
							/>
							<Image
								src={data.image_small}
								width={500}
								height={500}
								fetchPriority='auto'
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
	);
}
