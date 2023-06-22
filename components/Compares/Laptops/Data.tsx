import Image from 'next/image';
export default function Data({ mac }: { mac: LaptopCompares }) {
	return (
		<div className='border-b pb-2 w-full h-full animate-fadeIn transition-all ease duration-300'>
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
				<h2 className='text-center font-semibold text-xl '>{mac.title}</h2>
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
						<p className='text-center font-medium text-base'>{data.screen}</p>
						<div className='relative w-16 h-16 !aspect-square '>
							<Image fill src={data.chipImage} alt='' />
						</div>
						<p className='font-semibold text-base truncate'>{data.chip}</p>
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
	);
}
