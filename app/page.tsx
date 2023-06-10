import Carousel from '@/components/carousel';
import Hero from '@/components/hero';
import Ipad from '@/components/hero/Ipad';
import Iphone from '@/components/hero/Iphone';
import Promo from '@/components/promo';

export default function Home() {
	return (
		<>
			<Hero />
			<Iphone />
			<Ipad />
			<Promo />
			<Carousel />
		</>
	);
}
