import MovieCarousel from '@/components/carousel/Movies/movies';
import Heros from '@/components/hero/index';
import Promo from '@/components/promo';
import { sanityClient } from '@/config/sanity';
import { Suspense } from 'react';

export default async function Home() {
	const response = (await sanityClient.fetch(
		`*[_type == "carousels" ]`
	)) as MoviesCarousels[];
	return (
		<section className='w-full h-full overflow-y-auto'>
			<Suspense>
				<Heros />
			</Suspense>
			<Suspense>
				<Promo />
			</Suspense>
			<Suspense>
				<MovieCarousel movies={response} />
			</Suspense>
		</section>
	);
}
