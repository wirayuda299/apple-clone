import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { sanityClient } from '@/config/sanity';
import { urlFor } from '@/lib/sanity/utils/sanityImage';
import PromoImages from './Images';

export default async function Promo() {
	const promos = (await sanityClient.fetch(`*[_type == "promos"]`)) as Readonly<
		PromoResponseTypes[]
	>;

	return (
		<section className='w-full bg-white p-3'>
			<div className='container mx-auto'>
				<article className='grid grid-cols-1 md:grid-cols-2 w-full gap-5 h-full'>
					{promos.map(
						({ promosImage, _id, title, styles, logo, subTitle, pathLeft }) => (
							<div className='relative w-full' key={_id}>
								<PromoImages
									imageLarge={promosImage.imageLarge}
									imageMedium={promosImage.imageMedium}
									imageSmall={promosImage.imageSmall}
									title={title}
								/>
								<div
									className={`${styles ? styles : 'absolute bottom-0 w-full'}`}
								>
									<div className='p-5'>
										<div className='flex justify-center items-center w-full'>
											{logo && (
												<Image
													src={urlFor(logo).url()}
													alt='apple'
													width={40}
													height={40}
												/>
											)}
											<h2 className='text-center font-bold text-4xl'>
												{title}
											</h2>
										</div>
										<p className='text-center text-sm sm:text-lg md:text-xl p-2 font-semibold'>
											{subTitle}
										</p>
										<Link
											href={`/${pathLeft}`}
											as={`/${pathLeft}`}
											prefetch={false}
											className='flex space-x-2 items-center text-sm md:text-base text-center font-semibold capitalize justify-center pt-2 text-blue-500'
										>
											{pathLeft}
											<MdOutlineKeyboardArrowRight size={30} />
										</Link>
									</div>
								</div>
							</div>
						)
					)}
				</article>
			</div>
		</section>
	);
}
