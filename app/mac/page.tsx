import Macbook_header from '@/components/header/macbook_header';
import MacBookPro from '@/components/hero/macbook/macBookPro';
import MacMini from '@/components/hero/macmini/macMini';
import Options from '@/components/options/Options';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import macs from '@/assets/images/mac/mdt_family__gkejyxsh4p26_large.jpg';
import continuity from '@/assets/images/mac/continuity__f7o5n4kqigeq_large.jpg';
import macos from '@/assets/images/mac/macos_ventura__muyk5ifz9wqm_large.jpg';
import Image from 'next/image';
import AppLists from '@/components/default_apps';

const data = [
	{
		id: 1,
		topText: '',
		topTextStyle: '',
		title: 'Mac bisa',
		textTitle: 'melakukannya',
		subTitle: 'Temukan apa yang bisa Mac lakukan untuk Anda.',
		image: macs,
		imageStyle: 'relative w-[30rem] h-[20rem] aspect-square',
		imagealt: 'Mac',
		path: '/selengkapnya',
		pathTitle: 'Selengkapnya',
	},
	{
		id: 2,
		toptext: 'Kontinuitas',
		topTextStyle: 'text-center text-black text-2xl font-semibold',
		title: 'Semua perangkat Anda. Satu pengalaman tanpa cela.',
		textTitle: '',
		subTitle: 'Temukan apa yang bisa Mac lakukan untuk Anda.',
		image: continuity,
		imageStyle: 'relative w-[30rem] h-[20rem] aspect-square',
		imagealt: 'contiunity',
		path: '/selengkapnya',
		pathTitle: 'Selengkapnya',
	},
	{
		id: 3,
		toptext: 'macOS Ventura',
		topTextStyle: 'text-center text-black text-2xl font-semibold',
		title: 'Bekerja lebih cerdas. Bermain lebih seru. Dan masih banyak lagi.',
		textTitle: '',
		subTitle: '',
		image: '',
		imageStyle: '',
		imagealt: '',
		path: '/selengkapnya',
		pathTitle: 'Selengkapnya',
	},
	{
		id: 4,
		toptext: '',
		title: '',
		topTextStyle: '',
		textTitle: '',
		subTitle: '',
		image: macos,
		imageStyle:
			'relative w-[30rem] h-[20rem] md:w-[40rem] md:h-[30rem] aspect-square',
		imagealt: 'mac os ventura',
		path: '',
		pathTitle: '',
	},
];

export default function Mac() {
	return (
		<div className='pt-10 bg-white w-full h-full'>
			<Macbook_header />
			<MacBookPro />
			<MacMini />
			<Options />
			<section>
				<div className='max-w-4xl mx-auto text-black'>
					<h2 className='text-4xl lg:text-6xl xl:text-7xl font-semibold pt-20 text-[#1d1d1f] text-center'>
						Apa yang menjadikannya sebuah Mac?
					</h2>
				</div>
				<section className='w-full pt-28 h-full'>
					<div className='w-full h-full flex flex-col justify-center items-center'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full place-items-center p-5'>
							{data.map((val) => (
								<div
									className='flex flex-col min-h-[30rem] max-w-lg h-full relative w-full justify-center items-center'
									key={val.id}
								>
									<div>
										{val.topText !== '' && (
											<p className={val.topTextStyle}>{val?.toptext}</p>
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
			<section className='grid place-content-center'>
				<AppLists />
			</section>
		</div>
	);
}
