import MovieCarousel from '@/components/carousel/movies';
import Heros from '@/components/hero/index';
import Promo from '@/components/promo';

export default function Home() {
	return (
		<section className='w-full h-full overflow-y-auto'>
			<Heros />
			<Promo />
			<MovieCarousel />
		</section>
	);
}
