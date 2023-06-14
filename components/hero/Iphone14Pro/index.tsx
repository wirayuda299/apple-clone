import HeroLinks from '../Links';
import HeroImage from './image';

export default function HeroIphone14() {
	return (
		<section className='text-black text-center'>
			<article className='w-full h-[calc(100%-200px)] md:h-[calc(100% - 500px)] mt-14 text-white'>
				<div className='w-full grid place-content-center'>
					<div>
						<h2 className='font-semibold text-4xl sm:text-5xl md:text-6xl pt-10'>
							iPhone 14 Pro
						</h2>
						<p className='text-center text-lg sm:text-2xl md:text-3xl '>
							Semakin Pro.
						</p>
					</div>
					<div className='mt-2'>
						<HeroLinks />
					</div>
					<HeroImage />
				</div>
			</article>
		</section>
	);
}
