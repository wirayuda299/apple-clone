import HeroIphone14 from './Iphone14Pro';
import Ipad from './ipad';
import Iphone from '../Banners/IphonePro';
import { Suspense } from 'react';

export default function Heros() {
	return (
		<div className='overflow-hidden'>
			<Suspense
				fallback={
					<h1 className='text-center text-white text-5xl'>
						Loading hero images
					</h1>
				}
			>
				<HeroIphone14 />
			</Suspense>
			<Iphone />
			<Ipad />
		</div>
	);
}
