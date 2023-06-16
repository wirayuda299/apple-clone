import Image from 'next/image';
import desktopData from '@/data/desktopData.json';
import Link from 'next/link';
import { HiOutlineMinusSm } from 'react-icons/hi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
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
