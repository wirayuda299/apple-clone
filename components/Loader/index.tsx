import Image from 'next/image';

export default function Loader() {
	return (
		<div className='w-full h-screen bg-black grid place-content-center fixed top-0 z-50'>
			<div>
				<Image
					src={'/assets/images/logo/apple.png'}
					width={100}
					height={100}
					priority
					sizes='100px'
					alt='apple'
					fetchPriority='high'
				/>
			</div>
		</div>
	);
}
