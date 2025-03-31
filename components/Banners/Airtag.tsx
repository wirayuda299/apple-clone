import Image from 'next/image';
import Link from 'next/link';

export default function Airtag() {
	return (
		<section className='w-full max-w-7xl mx-auto bg-white m-4 text-black h-full'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center'>
					<picture className='order-1 md:order-0'>
						<source
							srcSet='/assets/images/apple/aksesoris/airtag_small.jpg'
							media='(max-width:734px)'
							width={734}
							height={397}
						/>
						<source
							srcSet='/assets/images/apple/aksesoris/airtag_medium.jpg'
							media='(max-width:1068px)'
							width={427}
							height={378}
						/>

						<Image
							src={'/assets/images/apple/aksesoris/airtag_large.jpg'}
							width={806}
							height={531}
							className='object-contain'
							alt='airtag'
						/>
					</picture>
					<div className='text-center max-w-sm mx-auto p-3 '>
						<h2 className='text-2xl font-bold md:text-3xl lg:text-4xl p-3'>
							AirTag
						</h2>
						<p className='text-sm font-medium md:text-base p-3'>
							Tempel satu di kunci Anda. Satu lagi di tas Anda. Jika barang
							hilang, cukup gunakan aplikasi Lacak.
						</p>
						<Link
							href={'/'}
							className='font-semibold text-base text-blue-600 m-5'
						>
							Selengkapnya
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
