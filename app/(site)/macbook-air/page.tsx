import Image from 'next/image';
import laptop from '@/data/laptopData.json';
import HeroLinks from '@/components/hero/Links';
import Data from '@/components/Compares/Laptops/Data';
import Link from 'next/link';
const macbooks = laptop.filter((laptop) => laptop.title === 'MacBook Air');
export default async function MacbookAir() {
	return (
		<div className='text-black w-full h-full bg-white'>
			<div className='flex flex-col justify-center items-center h-full'>
				<div className='pt-10'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold p-10'>
						MacBook Air
					</h1>
				</div>
				<section>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full justify-center items-center'>
						<div>
							<picture>
								<source
									srcSet='/assets/images/macbook-air/chipm1/small.jpg'
									media='(max-width:734px)'
									width={284}
									height={166}
								/>
								<source
									srcSet='/assets/images/macbook-air/chipm1/medium.jpg'
									media='(max-width:1068px)'
									width={323}
									height={187}
								/>
								<Image
									src='/assets/images/macbook-air/chipm1/large.jpg'
									width={411}
									height={255}
									className='object-fill mx-auto'
									alt='macbook air chip m1'
								/>
							</picture>
							<div className='text-center'>
								<h2 className='font-semibold text-xl p-2'>Chip M1</h2>
								<h3 className='text-3xl font-semibold'>MacBook Air</h3>
								<div className='pt-3'>
									<HeroLinks />
								</div>
							</div>
						</div>
						<div>
							<picture>
								<source
									srcSet='/assets/images/macbook-air/chipm2/small.jpg'
									media='(max-width:734px)'
									width={284}
									height={166}
								/>
								<source
									srcSet='/assets/images/macbook-air/chipm2/medium.jpg'
									media='(max-width:1068px)'
									width={323}
									height={187}
								/>
								<Image
									src='/assets/images/macbook-air/chipm2/large.jpg'
									width={411}
									height={255}
									className='object-fill mx-auto'
									alt='macbook air chip m2'
								/>
							</picture>
							<div className='text-center'>
								<h2 className='font-semibold text-xl p-2'>Chip M2</h2>
								<h3 className='text-3xl font-semibold'>MacBook Air</h3>
								<div className='pt-3'>
									<HeroLinks />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<h2 className='py-10 text-2xl text-center sm:text-3xl md:text-5xl font-bold'>
						Mac mana yang tepat untuk Anda?
					</h2>
					<section className='w-full h-full grid grid-cols-1 md:grid-cols-2 justify-center pb-2'>
						{macbooks.map((data) => (
							<Data mac={data} key={data.id} />
						))}
					</section>
				</section>
				<section className='container mx-auto md:p-5'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
						<div className='relative w-full h-full'>
							<picture>
								<source
									srcSet='/assets/images/apple/atwork/small.jpg'
									media='(max-width:734px)'
									width={374}
									height={506}
								/>
								<source
									srcSet='/assets/images/apple/atwork/medium.jpg'
									media='(max-width:1068px)'
									width={504}
									height={540}
								/>
								<Image
									src='/assets/images/apple/atwork/large.jpg'
									width={680}
									height={680}
									className='object-cover object-center aspect-auto md:aspect-square w-full'
									alt=''
								/>
							</picture>
							<div className='flex max-w-2xl right-0 text-white text-center mx-auto flex-col items-center absolute top-0 justify-center w-full h-full'>
								<h3 className='font-semibold text-3xl sm:font-bold lg:text-4xl'>
									Apple at Work
								</h3>
								<p className='font-medium text-sm p-5 sm:text-base max-w-sm	mx-auto'>
									Dapatkan kemampuan lebih untuk meningkatkan bisnis Anda ke
									level selanjutnya.
								</p>
								<div>
									<div className='pt-5'>
										<Link href={'/'} className='font-medium text-sm sm:text-lg'>
											Selengkapnya tentang Apple at Work
										</Link>
									</div>
									<div>
										<Link href={'/'} className='font-medium text-sm sm:text-lg'>
											{' '}
											Lihat alasan Mac jadi andalan untuk bisnis{' '}
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='relative w-full h-full'>
							<picture>
								<source
									srcSet='/assets/images/apple/educations/small.jpg'
									media='(max-width:734px)'
									width={374}
									height={506}
								/>
								<source
									srcSet='/assets/images/apple/educations/medium.jpg'
									media='(max-width:1068px)'
									width={504}
									height={540}
								/>
								<Image
									src='/assets/images/apple/educations/large.jpg'
									width={680}
									height={680}
									className='object-cover object-center aspect-auto md:aspect-square w-full'
									alt=''
								/>
							</picture>
							<div className='flex max-w-2xl right-0 text-white text-center mx-auto flex-col items-center absolute top-0 justify-center w-full h-full'>
								<h3 className='font-semibold text-3xl sm:font-bold lg:text-4xl'>
									Apple dan Pendidikan
								</h3>
								<p className='font-medium text-sm p-5 sm:text-base max-w-sm	mx-auto'>
									Memberdayakan pendidik dan siswa untuk memajukan dunia.
								</p>
								<div>
									<div className='pt-5'>
										<Link href={'/'} className='font-medium text-sm sm:text-lg'>
											Selengkapnya tentang Apple dan Pendidikan
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
