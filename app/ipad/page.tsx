import ProductTypes from '@/components/ProductTypes/ProductTypes';
import HeroLinks from '@/components/hero/Links';
import ipadtypes from '@/data/ipadtypes.json';
import Image from 'next/image';
export default function Ipad() {
	return (
		<div className='mt-12 bg-white w-full h-screen grid place-content-center '>
			<div className='w-full h-full my-6 pt-40'>
				<ProductTypes productTypes={ipadtypes} />
			</div>
			<div className='grid grid-cols-1 w-full place-content-center place-items-center  h-full p-5 relative'>
				<div className=' order-1 md:order-[0] w-full '>
					<Image
						src='/assets/images/hero/ipadPagehero.jpg'
						width={500}
						height={500}
						className='object-contain'
						alt='ipad'
					/>
				</div>
				<div className='mt-5 w-full mx-auto flex justify-center items-center'>
					<div className='static md:absolute  top-1/3 w-full px-10 max-w-[250px]  -right-10 '>
						<h1 className='text-5xl font-bold text-center text-black'>iPad</h1>
						<p className='text-center text-black text-xl font-bold'>
							Disukai semua. Siap berkarya. Luar biasa.
						</p>
						<div className='pt-5'>
							<HeroLinks />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
