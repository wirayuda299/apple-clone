import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import wwdc from '@/assets/images/promo/wwdc.jpg';
import apple from '@/assets/images/svgs/apple.svg';
import promo_pride23 from '@/assets/images/promo/promo_pride23__cnpic94fthle_large.jpg';
import promo_ipad from '@/assets/images/promo/promo_ipad__fioegapg12qi_large.jpg';
import promo_apple_fitness from '@/assets/images/promo/promo-apple-fitness-plus-iphone__bzeal882mv7m_large.jpg';
import promo_mac from '@/assets/images/promo/promo_macmini__fg9smqdnyjmi_large.jpg';
import promo_airpods from '@/assets/images/promo/promo_airpods_pro_avail__gaxggskofx6y_large.jpg';

const promos = [
	{
		id: '1',
		title: 'WWDC23',
		logo: apple,
		subtext:
			'Apple world wide Developers Conference.Gabung bersama kami secara online 6-10 juni.',
		textLink: 'selengkapnya',
		path: '/selengkapnya',
		image: wwdc,
		style: '',
	},
	{
		id: '2',
		title: 'WATCH',
		logo: apple,
		subtext: 'Kegembiaraan ada dimana saja.',
		textLink: 'Beli tali jam sport edisi pelangi baru',
		path: '/buy',
		image: promo_pride23,
		style: 'absolute top-0 text-black w-full',
	},
	{
		id: '3',
		title: 'iPad',
		logo: '',
		subtext: 'Disukai semua. Siap berkarya. Luar biasa.',
		textLink: 'selengkapnya',
		path: '/selengkapnya',
		image: promo_ipad,
		style: 'absolute top-0 text-black w-full',
	},
	{
		id: '4',
		title: 'Fitness+',
		logo: apple,
		subtext: 'Dari HIT hingga yoga,selalu ada untuk pilihan anda.',
		textLink: 'selengkapnya',
		image: promo_apple_fitness,
		style: 'absolute top-0 text-black w-full',
	},
	{
		id: '5',
		title: 'Mac Mini',
		logo: '',
		subtext: 'Bertenaga super cepat berkat M2 dan m2 Pro',
		textLink: 'selengkapnya',
		image: promo_mac,
		style: 'absolute top-0 text-white w-full',
	},
	{
		id: '6',
		title: 'Airpods Pro',
		logo: '',
		subtext: 'Dibuat ulang dengan kemampuan baru',
		textLink: 'selengkapnya',
		image: promo_airpods,
		style: 'absolute top-0 text-white w-full',
	},
];

export default function Promo() {
	return (
		<section className='w-full bg-white p-3'>
			<div className='container mx-auto'>
				<article className='grid grid-cols-1 md:grid-cols-2 w-full gap-5 h-full'>
					{promos.map((promo) => (
						<div className='relative w-full' key={promo.id}>
							<Image
								src={promo.image}
								className=' aspect-square object-cover'
								alt={promo.title}
								width={800}
								height={800}
							/>
							<div
								className={`${
									promo.style ? promo.style : 'absolute bottom-0 w-full'
								}`}
							>
								<div className='p-5'>
									<div className='flex gap-5 justify-center items-center w-full'>
										{promo.logo && (
											<Image
												src={promo.logo}
												className=' aspect-square object-cover w-4 h-4'
												alt='apple'
												width={50}
												height={50}
											/>
										)}
										<h2 className='text-center font-bold text-4xl'>
											{promo.title}
										</h2>
									</div>
									<p className='text-center text-sm sm:text-lg md:text-xl font-semibold'>
										{promo.subtext}
									</p>
									<Link
										href={`/${promo.path}`}
										as={`/${promo.path}`}
										prefetch={false}
										className='flex space-x-2 items-center text-sm md:text-base text-center font-semibold capitalize justify-center pt-2 text-blue-500'
									>
										{promo.textLink}
										<MdOutlineKeyboardArrowRight size={30} />
									</Link>
								</div>
							</div>
						</div>
					))}
				</article>
			</div>
		</section>
	);
}
