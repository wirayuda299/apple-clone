'use client';
import { useState } from 'react';
import Laptop from './Laptops/Laptop';
import Desktop from './Desktop';
import data from '@/data/laptopData.json';
import desktopData from '@/data/desktopData.json';

const Compares = () => {
	const [selectedOptions, setSelectedOptions] = useState<string>('laptop');
	return (
		<section className='bg-white text-black w-full h-full grid place-content-center'>
			<div className='flex justify-center items-center'>
				<h2 className='py-10 text-2xl text-center sm:text-3xl md:text-5xl font-bold'>
					Mac mana yang tepat untuk Anda?
				</h2>
			</div>
			<div className='flex justify-center gap-10 text-xl text-slate-500'>
				<button
					onClick={() => setSelectedOptions('laptop')}
					type='button'
					name='laptop'
					title='laptop'
					className={`${selectedOptions === 'laptop' ? 'underline' : ''}`}
				>
					Laptop
				</button>
				<button
					onClick={() => setSelectedOptions('desktop')}
					type='button'
					className={`${selectedOptions === 'desktop' ? 'underline' : ''}`}
					name='desktop'
					title='desktop'
				>
					Desktop
				</button>
			</div>
			{selectedOptions === 'laptop' && <Laptop data={data} />}
			{selectedOptions === 'desktop' && (
				<Desktop desktopData={desktopData as DesktopCompares[]} />
			)}
		</section>
	);
};
export default Compares;
