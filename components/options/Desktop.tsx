import Image from 'next/image';
import imac24 from '@/assets/images/compares/imac24.png';
import colors from '@/assets/images/compares/multi_color.png';
import macMini from '@/assets/images/compares/macmini.png';
import macstudio from '@/assets/images/compares/macstudio.png';
import macpro from '@/assets/images/compares/macpro.png';
import m13 from '@/assets/images/compares/m2pro.png';
import m1 from '@/assets/images/compares/m1.png';
import memory from '@/assets/images/compares/memory.png';
import baterai from '@/assets/images/compares/baterai.png';
import camera from '@/assets/images/compares/camera.png';
import speaker from '@/assets/images/compares/speaker.png';
import Link from 'next/link';
import m1max_ultra from '@/assets/images/compares/m1max_ultra.png';
import intel from '@/assets/images/compares/intel.png';
import imacKeyboard from '@/assets/images/compares/imacKeyboard.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineMinusSm } from 'react-icons/hi';

const desktopData = [
	{
		id: 1,
		colors: ['#7d7e80', '#e3e4e5', '#f9d4c2'],
		image: imac24,
		title: 'iMac 24"',
		color: colors,
		path: '/selengkapnya',
		data: [
			{
				display: ' 14.5K',
				screen: 'Layar retina',
				ppi: '218ppi',
				chip: 'Chip Apple M1',
				chipImage: m1,
				cpu: 'CPU',
				cpu_size: '8-Core',
				gpu: 'CPU',
				gpu_size: '8-Core',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 16 GB',
				storage: '2 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 18 jam',
				faceTimeImage: camera,
				faceTimeDesc: 'Kamera FaceTime HD 1080p',
				facetimeSub:
					'Dengan prosesor sinyal gambar M1 untuk peningkatan performa yang drastis',
				speakerImage: speaker,
				speakerDesc: 'Deretan tiga mikrofon Speaker stereo',
				weight: '1.29kg',
			},
		],
	},
	{
		id: 2,
		colors: ['#444b56', '#f0e4d3', '#7d7e80', '#e3e4e5'],
		image: macMini,
		title: 'Mac Mini',
		sub: 'new',
		path: '/selengkapnya',
		data: [
			{
				display: '',
				screen: '',
				ppi: '',
				chip: 'Chip Apple M2 atau Apple M2 Pro',
				chipImage: m13,
				cpu: 'CPU',
				cpu_size: '12-Core',
				gpu: 'CPU',
				gpu_size: '19-Core',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 32 GB',
				storage: '8 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 18 jam',
				faceTimeImage: '',
				faceTimeDesc: '',
				facetimeSub: '',
				speakerImage: speaker,
				speakerDesc:
					'Deretan tiga mikrofon Sistem suara empat speaker dengan Audio Spasial',
				weight: '1.24kg',
			},
		],
	},
	{
		id: 3,
		colors: ['#444b56', '#f0e4d3'],
		image: macstudio,
		title: 'Mac Studio',
		sub: 'new',
		path: '/selengkapnya',
		data: [
			{
				display: '',
				screen: '',
				ppi: '',
				chip: 'Chip Apple M1 Max atau Chip Apple M1 Ultra',
				chipImage: m1max_ultra,
				cpu: 'CPU',
				cpu_size: '20-Core',
				gpu: 'CPU',
				gpu_size: '64-Core',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 128 GB',
				storage: '8 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 20 jam',
				faceTimeImage: '',
				faceTimeDesc: '',
				facetimeSub: '',
				touchId: imacKeyboard,
				touchIdDesc:
					'Dapat dikonfigurasi dengan Magic Keyboard yang dilengkapi Touch ID dan Tombol Numerik',
				speakerImage: speaker,
				speakerDesc:
					'Deretan tiga mikrofon Sistem suara empat speaker dengan Audio Spasial',
				weight: '1.38kg',
			},
		],
	},
	{
		id: 4,
		colors: ['#444b56', '#f0e4d3'],
		image: macpro,
		title: 'Mac Pro',
		sub: 'new',
		path: '/selengkapnya',
		data: [
			{
				display: '',
				screen: '',
				ppi: '',
				chip: 'Prosesor Intel Xeon W',
				chipImage: intel,
				cpu: 'CPU',
				cpu_size: '28-Core',
				gpu: 'CPU',
				gpu_size: 'AMD Radeon Pro W6800X Duo',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 1.5 TB',
				storage: '8 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 22 jam',
				faceTimeImage: '',
				faceTimeDesc: '',
				facetimeSub: '',
				speakerImage: speaker,
				speakerDesc:
					'Deretan tiga mikrofon berkualitas studio Sistem suara enam speaker dengan Audio Spasial',
				weight: '1,6 kg atau 2,15 kg',
			},
		],
	},
];

const Desktop = () => {
	return (
		<div className='container mx-auto h-fit w-full'>
			<div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 justify-center items-center'>
				{desktopData.map((mac) => (
					<div
						key={mac.id}
						className='border-b pb-2 w-full h-full animate-fadeIn transition-all ease duration-300'
					>
						<header className='relative w-56 h-56 aspect-square mx-auto'>
							<Image src={mac.image} alt={mac.title} fill />
						</header>
						<div className='inline-flex w-full gap-2 justify-center items-center'>
							<>
								<div className={`w-3 h-3 rounded-full bg-gray-500`}></div>
								<div className={`w-3 h-3 rounded-full bg-gray-400`}></div>
								<div className={`w-3 h-3 rounded-full bg-pink-400`}></div>
							</>
						</div>
						<div className='flex flex-col justify-center items-center space-y-3'>
							<h2 className='text-center font-semibold text-xl'>{mac.title}</h2>
							<button
								className='bg-blue-700 w-20 text-white font-semibold text-center py-1 mt-1 rounded-full mx-auto'
								type='button'
								name='buy'
								title='buy'
							>
								Beli
							</button>
							<Link
								href={'/selengkapnya'}
								as={'/selengkapnya'}
								className='flex space-x-2 items-center text-blue-500'
							>
								Selengkapnya
								<MdOutlineKeyboardArrowRight size={35} />
							</Link>
						</div>
						<div>
							{mac.data.map((data, i) => (
								<div
									key={i}
									className='flex flex-col justify-center w-full h-full min-h-[30rem] space-y-5 items-center'
								>
									<div className='relative w-14 h-12 '>
										<Image fill src={data.chipImage} alt='' />
									</div>
									<p className='font-light text-sm truncate'>{data.chip}</p>
									<div className=''>
										<h3 className='text-center text-xl'>CPU</h3>
										<p className='text-base font-light'>{data.cpu_size}</p>
									</div>
									<div className=''>
										<h3 className='text-center text-xl'>GPU</h3>
										<p className='text-base font-light'>{data.gpu_size}</p>
									</div>
									<div className='relative w-16 h-16 !aspect-square '>
										<Image fill src={data.memoryImage} alt='' />
									</div>
									<p className='text-sm'>{data.memorySize}</p>
									<h3 className=' font-bold text-xl'>{data.storage}</h3>
									<p className='text-center text-base break-words'>
										{data.storageDesc}
									</p>
									<div>
										{data.display ? (
											<div className='text-center'>
												<p className='text-2xl font-semibold'>{data.display}</p>{' '}
												<p className='text-lg'>{data.screen}</p>{' '}
												<p className='text-xs text-gray-500'>{data.ppi}</p>
											</div>
										) : (
											<div className=''>
												<HiOutlineMinusSm size={30} />
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Desktop;
