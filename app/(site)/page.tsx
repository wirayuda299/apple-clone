import MovieCarousel from '@/components/carousel/Movies/movies';
import Heros from '@/components/hero/index';
import Promo from '@/components/promo';
import { Suspense } from 'react';

export default function Home() {
	return (
		<section className='w-full h-full overflow-y-auto'>
			<Suspense>
				<Heros />
			</Suspense>
			<Suspense>
				<Promo />
			</Suspense>
			<MovieCarousel />
		</section>
	);
}
