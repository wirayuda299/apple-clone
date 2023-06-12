'use client';
import Image from 'next/image';
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
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function AppLists() {
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
	const [selectedItem, setselectedItem] = useState<(typeof applists)[0]>(
		applists[0]
	);

	const handleClick = useCallback((id: number) => {
		const founded = applists.find((item) => item.listId === id);
		if (!founded) return;
		return setselectedItem(founded);
	}, []);

	return (
		<div className='flex justify-center flex-col w-full items-center p-5  max-w-3xl text-black'>
			<ul className='flex justify-center items-center gap-10'>
				{applists?.map((app) => (
					<button
						name={app.name}
						title={app.name}
						key={app.listId}
						onClick={() => handleClick(app?.listId)}
						className='flex justify-center items-center flex-col '
					>
						<Image src={app.icon} width={50} height={50} alt={app.name} />
						<p className='text-[#6e6e73] font-semibold text-center'>
							{app.name}
						</p>
					</button>
				))}
			</ul>
			<div className='w-full py-[.1px] my-3 rounded-full bg-black'></div>
			<div className='flex flex-col items-center my-4'>
				<p className='text-center font-medium'>{selectedItem?.desc}</p>
				<Link
					href={selectedItem?.path}
					className='text-center text-xl text-blue-500 py-5 font-semibold flex items-center space-x-3 '
				>
					{selectedItem?.title}
					<MdOutlineKeyboardArrowRight size={35} />
				</Link>
				<div>
					<Image
						src={selectedItem.mainImage}
						width={500}
						height={500}
						alt={selectedItem.name}
					/>
				</div>
			</div>
		</div>
	);
}
