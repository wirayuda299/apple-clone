'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import safariicon from '@/assets/images/apps/safari.jpg';
import fotoIcon from '@/assets/images/apps/photos.jpg';
import fotoImages from '@/assets/images/apps/photos-example.jpg';
import iMovieIcon from '@/assets/images/apps/imovie.jpg';
import iMovieImages from '@/assets/images/apps/imovie-images.jpg';
import safaribrowser from '@/assets/images/apps/safari_browser.jpg';
import garagebandIcon from '@/assets/images/apps/garageband.jpg';
import garagebandImages from '@/assets/images/apps/garage-band-images.jpg';
import pages from '@/assets/images/apps/notes.jpg';
import pagesImages from '@/assets/images/apps/pages-images.jpg';
import chartIcon from '@/assets/images/apps/charts.jpg';
import chartImages from '@/assets/images/apps/charImages.jpg';
import keynoteIcon from '@/assets/images/apps/keynote.jpg';
import keynoteImages from '@/assets/images/apps/keynoteImage.jpg';
import macframe from '@/assets/images/mac/mac-frame.jpg';

export default function BuiltInAppsMobile() {
	const applists = [
		{
			listId: 1,
			name: 'Safari',
			icon: safariicon,
			desc: 'Safari memiliki fitur inovatif yang membuat berselancar di web menjadi lebih menyenangkan. Dengan lebih banyak cara. Fitur privasi bawaan membantu melindungi informasi dan menjaga Mac Anda tetap aman. Halaman awal yang diperbarui membantu Anda menyimpan, menemukan, dan berbagi situs favorit dengan cepat dan mudah. Dan saran Siri meliputi penanda, tautan dari daftar bacaan Anda, Tab iCloud, tautan yang Anda terima melalui Pesan, dan lainnya.',
			path: '/selengkapnya',
			title: 'Selengkapnya tentang safari',
			mainImage: safaribrowser,
		},
		{
			listId: 2,
			name: 'Foto',
			icon: fotoIcon,
			desc: 'Jadikan perpustakaan Anda yang terus bertambah tetap tertata dan mudah diakses. Sempurnakan gambar Anda dan buat hadiah yang menawan untuk dibagikan. Dan dengan Foto iCloud, Anda bisa menyimpan seluruh koleksi foto dan video di cloud.',
			path: '/selengkapnya',
			title: 'Selengkapnya tentang foto',
			mainImage: fotoImages,
		},
		{
			listId: 3,
			name: 'iMovie',
			icon: iMovieIcon,
			desc: 'Bercerita dengan cara baru. Desain sederhana dan fitur pengeditan yang intuitif memudahkan Anda membuat film 4K yang memukau dan trailer bergaya Hollywood.',
			path: '/selengkapnya',
			title: 'Selengkapnya tentang iMovie',
			mainImage: iMovieImages,
		},
		{
			listId: 4,
			name: 'Garage band',
			icon: garagebandIcon,
			desc: 'Cara termudah membuat lagu bersuara indah di Mac Anda. Dengan antarmuka yang intuitif dan akses ke perpustakaan suara yang lengkap, Anda bisa dengan mudah belajar, bermain, merekam, dan membagikan musik layaknya seorang profesional.',
			path: '/selengkapnya',
			title: 'Selengkapnya tentang GarageBand',
			mainImage: garagebandImages,
		},
		{
			listId: 5,
			name: 'Pages',
			icon: pages,
			desc: 'Pengolah kata yang menawan ini memberikan semua yang Anda butuhkan untuk membuat dokumen terlihat indah. Dan terbaca indah. Pages memungkinkan Anda bekerja dengan mulus antar perangkat Mac, iOS, dan iPadOS. Dan bekerja dengan mudah bersama pengguna Microsoft Word. ',
			path: '/selengkapnya',
			title: 'Selengkapnya tentang Pages',
			mainImage: pagesImages,
		},
		{
			listId: 6,
			name: 'Numbers',
			icon: chartIcon,
			desc: 'Buat spreadsheet yang canggih dengan bagan, tabel, dan gambar yang begitu interaktif, yang memudahkan Anda menampilkan data yang mudah dilihat dan dipahami. Bekerja dengan mulus antar perangkat Mac, iOS, dan iPadOS. Dan bekerja dengan mudah bersama pengguna Microsoft Excel. ',
			path: '/selengkapnya',
			title: 'Selengkapnya tentang Numbers',
			mainImage: chartImages,
		},
		{
			listId: 7,
			name: 'Keynote',
			icon: keynoteIcon,
			desc: 'Sampaikan ide Anda dengan presentasi yang indah. Gunakan alat yang andal dan efek yang memukau agar peserta tetap memperhatikan presentasi. Bekerja dengan mulus antar perangkat Mac, iOS, dan iPadOS. Dan bekerja dengan mudah bersama pengguna Microsoft PowerPoint.',
			path: '/selengkapnya',
			title: 'Selengkapnya tentang Keynote',
			mainImage: keynoteImages,
		},
	];
	return (
		<div className='w-full md:hidden flex justify-center'>
			<Swiper
				loop={true}
				effect={'fade'}
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, EffectFade]}
			>
				{applists.map((app) => (
					<SwiperSlide
						key={app.listId}
						className='grid place-content-center w-full'
					>
						<div className='relative flex justify-center mx-auto w-full h-full'>
							<Image
								src={macframe}
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
								alt={app.name}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
