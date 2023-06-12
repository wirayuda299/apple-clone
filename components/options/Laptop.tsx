import Image from 'next/image';
import macbookair from '@/assets/images/compares/macbook_air.png';
import m1 from '@/assets/images/compares/m1.png';
import m2 from '@/assets/images/compares/m2.png';
import m2pro from '@/assets/images/compares/m2pro.png';
import m13 from '@/assets/images/compares/m13.png';
import m14 from '@/assets/images/compares/m14.png';
import memory from '@/assets/images/compares/memory.png';
import baterai from '@/assets/images/compares/baterai.png';
import camera from '@/assets/images/compares/camera.png';
import speaker from '@/assets/images/compares/speaker.png';
import touchId from '@/assets/images/compares/touchId.png';
import touchId_touch_bar from '@/assets/images/compares/touchId_touch_bar.png';
import macbookPro from '@/assets/images/compares/macbook_pro.png';

const data = [
	{
		id: 1,
		colors: ['#7d7e80', '#e3e4e5', '#f9d4c2'],
		image: macbookair,
		title: 'MacBook Air',
		sub: 'Chip M1',
		path: '/selengkapnya',
		data: [
			{
				display: ' 13,3"',
				screen: 'Layar retina',
				chip: 'Chip Apple M1',
				chipImage: m1,
				cpu: 'CPU',
				cpu_size: '8-Core',
				gpu: 'CPU',
				gpu_size: '7-Core',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 16 GB',
				storage: '2 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 18 jam',
				faceTimeImage: camera,
				faceTimeDesc: 'Kamera FaceTime HD 720p',
				speakerImage: speaker,
				speakerDesc: 'Deretan tiga mikrofon Speaker stereo',
				weight: '1.29kg',
				touchId: touchId,
			},
		],
	},
	{
		id: 2,
		colors: ['#444b56', '#f0e4d3', '#7d7e80', '#e3e4e5'],
		image: macbookPro,
		title: 'MacBook Air',
		sub: 'Chip M2',
		path: '/selengkapnya',
		data: [
			{
				display: ' 13,6"',
				screen: 'Layar retina',
				chip: 'Chip Apple M2',
				chipImage: m2,
				cpu: 'CPU',
				cpu_size: '8-Core',
				gpu: 'CPU',
				gpu_size: '10-Core',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 24 GB',
				storage: '2 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 18 jam',
				faceTimeImage: camera,
				faceTimeDesc: 'Kamera FaceTime HD 1080p',
				speakerImage: speaker,
				speakerDesc:
					'Deretan tiga mikrofon Sistem suara empat speaker dengan Audio Spasial',
				weight: '1.24kg',
				touchId: touchId,
			},
		],
	},
	{
		id: 3,
		colors: ['#444b56', '#f0e4d3'],
		image: m13,
		title: 'MacBook Pro 13"',
		sub: 'new',
		path: '/selengkapnya',
		data: [
			{
				display: ' 13,3"',
				screen: 'Layar retina',
				chip: 'Chip Apple M2',
				chipImage: m2,
				cpu: 'CPU',
				cpu_size: '8-Core',
				gpu: 'CPU',
				gpu_size: '10-Core',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 24 GB',
				storage: '2 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 20 jam',
				faceTimeImage: camera,
				faceTimeDesc: 'Kamera FaceTime HD 720p',
				speakerImage: speaker,
				speakerDesc:
					'Deretan tiga mikrofon Sistem suara empat speaker dengan Audio Spasial',
				weight: '1.38kg',
				touchId: touchId_touch_bar,
			},
		],
	},
	{
		id: 4,
		colors: ['#444b56', '#f0e4d3'],
		image: m14,
		title: 'MacBook Pro 14" dan 16"',
		sub: 'new',
		path: '/selengkapnya',
		data: [
			{
				display: ' 13,3"',
				screen: 'Layar Liquid Retina XDR1',
				chip: 'Chip Apple M2 pro  atau Apple M2 Max',
				chipImage: m2pro,
				cpu: 'CPU',
				cpu_size: '12-Core',
				gpu: 'CPU',
				gpu_size: '38-Core',
				memoryImage: memory,
				memorySize: 'Memori terintegrasi hingga 96 GB',
				storage: '8 TB',
				storageDesc: 'Penyimpanan maksimum yang bisa dikonfigurasi',
				bateraiImage: baterai,
				bateraiDesc: 'Kekuatan baterai hingga 22 jam',
				faceTimeImage: camera,
				faceTimeDesc: 'Kamera FaceTime HD 1080p',
				speakerImage: speaker,
				speakerDesc:
					'Deretan tiga mikrofon berkualitas studio Sistem suara enam speaker dengan Audio Spasial',
				weight: '1,6 kg atau 2,15 kg',
				touchId: touchId,
			},
		],
	},
];

const Laptop = () => {
	return (
		<div className='container mx-auto h-fit w-full'>
			<div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 justify-center items-center'>
				{data.map((mac) => (
					<div
						key={mac.id}
						className='border-b pb-2 w-full h-full animate-fadeIn transition-all ease duration-300'
					>
						<div className='relative w-60 aspect-square mx-auto '>
							<Image src={mac.image} alt={mac.title} fill />
						</div>
						<div className='inline-flex w-full gap-2 justify-center items-center'>
							{mac.colors.map((color) => (
								<div
									className={`w-3 h-3 rounded-full `}
									style={{ backgroundColor: color }}
									key={color}
								></div>
							))}
						</div>
						<div className='flex flex-col justify-center items-center space-y-3 '>
							<h2 className='text-center font-semibold text-xl '>
								{mac.title}
							</h2>
							<p className='text-xs text-center text-orange-700'>{mac.sub}</p>
							<button
								className='bg-blue-700 w-20 text-white font-semibold text-center py-2 mt-1 rounded-full mx-auto'
								type='button'
								name='buy'
								title='buy'
							>
								Beli
							</button>
						</div>
						<div>
							{mac.data.map((data, i) => (
								<div
									key={i}
									className='flex flex-col justify-center w-full h-full space-y-5 items-center'
								>
									<h3 className='text-center font-semibold text-xl'>
										{data.display}
									</h3>
									<p className='text-center font-medium text-base'>
										{data.screen}
									</p>
									<div className='relative w-16 h-16 !aspect-square '>
										<Image fill src={data.chipImage} alt='' />
									</div>
									<p className='font-semibold text-base truncate'>
										{data.chip}
									</p>
									<div className=''>
										<h3 className='text-center text-xl'>CPU</h3>
										<p className='text-xl font-semibold'>{data.cpu_size}</p>
									</div>
									<div className=''>
										<h3 className='text-center text-xl'>GPU</h3>
										<p className='text-xl font-semibold'>{data.gpu_size}</p>
									</div>
									<div className='relative w-16 h-16 !aspect-square '>
										<Image fill src={data.memoryImage} alt='' />
									</div>
									<p className='text-sm'>{data.memorySize}</p>
									<h3 className=' font-semibold text-xl'>{data.storage}</h3>
									<p className='text-center text-sm break-words'>
										{data.storageDesc}
									</p>
									<div className='relative w-16 h-16 !aspect-square '>
										<Image fill src={data.bateraiImage} alt='' />
									</div>
									<p className='text-center text-sm break-words'>
										{data.bateraiDesc}
									</p>
									<div className='relative w-16 h-16 !aspect-square '>
										<Image fill src={data.faceTimeImage} alt='' />
									</div>
									<p className='text-center text-sm break-words'>
										{data.faceTimeDesc}
									</p>
									<div className='relative w-16 h-16 !aspect-square '>
										<Image fill src={data.speakerImage} alt='' />
									</div>
									<p
										className='text-center text-xs  px-5 md:truncate max-w-[300px]'
										title={data.speakerDesc}
									>
										{data.speakerDesc}
									</p>
									<div className='relative w-14 h-14 !aspect-square '>
										<Image fill src={data.touchId} alt='' />
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
export default Laptop;
