'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

type Lists = {
	listId: number;
	name: string;
	icon: string;
	desc: string;
	path: string;
	title: string;
	mainImage: string;
};

type AppLists<T> = {
	applists: T[];
};

export default function AppCarouselMobile<T extends Lists>({
	applists,
}: AppLists<T>) {
	return (
		<div className='w-full flex justify-center  lg:hidden'>
			<Swiper
				loop={true}
				fadeEffect={{
					crossFade: true,
				}}
				effect={'fade'}
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 8000,
				}}
				modules={[Autoplay, EffectFade, Navigation]}
			>
				{applists.map((app) => (
					<SwiperSlide
						key={app.listId}
						className='grid place-content-center w-full'
					>
						<div className='relative flex justify-start flex-col items-center mx-auto w-full'>
							<Image
								src={'/assets/images/mac/mac-frame.jpg'}
								width={510}
								className='w-80 sm:w-96 h-auto '
								height={510}
								alt={'frame'}
							/>
							<Image
								src={app.mainImage}
								width={800}
								className='absolute p-3 w-80 sm:w-96 object-fill'
								height={500}
								loading='lazy'
								alt={app.name}
							/>
						</div>
						<div className='p-5 w-full max-w-2xl justify-center mx-auto flex flex-col items-center'>
							<div className='flex justify-center items-center gap-4 mt-5 text-black'>
								<Image alt={app.name} src={app.icon} width={50} height={50} />
								<h3 className='font-bold text-2xl md:text-3xl'>{app.name}</h3>
							</div>
							<p className='text-center text-sm font-medium text-black'>
								{app.desc}
							</p>
							<Link
								href={app.path}
								className='text-center text-sm md:text-base text-blue-500 py-5 font-semibold flex items-center space-x-3 '
							>
								{app.title}
								<MdOutlineKeyboardArrowRight size={35} />
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
