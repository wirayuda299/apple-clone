import Carousel from '@/components/carousel';
import Heros from '@/components/hero';
import Promo from '@/components/promo';

export default function Home() {
	return (
		<>
			<Heros />
			<Promo />
			<Carousel />
		</>
	);
}
