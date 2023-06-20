import Image from 'next/image';
import Link from 'next/link';
type AirPodsSrcTypes = {
	imageSmall: {
		src: string;
		width: number;
		height: number;
	};
	imageMedium: {
		src: string;
		width: number;
		height: number;
	};
	imageLarge: {
		src: string;
		width: number;
		height: number;
	};
	title: string;
	subTitle: string;
};
export default function AirPods3rdGen({
	imageLarge,
	imageMedium,
	imageSmall,
	title,
	subTitle,
}: AirPodsSrcTypes) {
	return (
		<div className='w-full bg-[#f5f5f7] '>
			<figure className='relative'>
				<picture className='flex justify-center flex-col w-full'>
					<source
						srcSet={imageSmall.src}
						width={imageSmall.width}
						height={imageSmall.height}
						type='image/jpg'
						media='(max-width:734px)'
					/>
					<source
						srcSet={imageMedium.src}
						width={imageMedium.width}
						height={imageMedium.height}
						type='image/jpg'
						media='(max-width:1068px)'
					/>
					<Image
						src={imageLarge.src}
						width={imageLarge.width}
						height={imageLarge.height}
						loading='lazy'
						className=' object-cover w-full'
						alt='airpods 3rd generations image'
					/>
				</picture>
				<figcaption className='text-center text-black md:flex flex-col w-full justify-center items-center  absolute bottom-20 sm:bottom-32 lg:top-0 lg:bottom-0'>
					<h2 className='font-bold text-3xl sm:text-6xl lg:text-9xl'>
						{title}
					</h2>
					<p className='text-sm font-semibold sm:text-xl lg:text-2xl'>
						{subTitle}
					</p>
					<div className='pt-5 inline-flex justify-center gap-5'>
						<Link
							href={'/'}
							className='bg-blue-600 text-white py-1 px-5 rounded-full'
						>
							Beli
						</Link>
						<Link href={'/'} className=' text-black font-semibold'>
							Selengkapnya
						</Link>
					</div>
				</figcaption>
			</figure>
		</div>
	);
}
