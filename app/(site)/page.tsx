import { getMovies } from '@/lib/sanity/actions/index';
import { Hero, MovieCarousel, Promo } from '@/components/index';

export default async function Home() {
	const movies = await getMovies();

	return (
		<section className='w-full h-full overflow-y-auto'>
			<Hero />
			<Promo />
			<MovieCarousel movies={movies} />
		</section>
	);
}
