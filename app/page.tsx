import Carousel from '@/components/carousel';
import Heros from '@/components/hero';
import Promo from '@/components/promo';

export default function Home() {
	return (
		<section className='w-full h-full overflow-y-auto'>
			<Heros />
			<Promo />
			<Carousel />
		</section>
	);
}
