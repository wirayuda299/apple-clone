import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import promos from '@/data/promo.json';

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
								loading='lazy'
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
												className=' object-contain '
												alt='apple'
												width={50}
												loading='lazy'
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
