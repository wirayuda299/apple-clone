'use client';
import { useState } from 'react';
import Laptop from './Laptop';
import Desktop from './Desktop';

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
			{selectedOptions === 'laptop' && <Laptop />}
			{selectedOptions === 'desktop' && <Desktop />}
		</section>
	);
};
export default Compares;
