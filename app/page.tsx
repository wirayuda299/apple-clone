import Carousel from '@/components/carousel';
import HomeHero from '@/components/hero/homeHero';
import Ipad from '@/components/hero/Ipad';
import Iphone from '@/components/hero/Iphone';
import Promo from '@/components/promo';

export default function Home() {
	return (
		<>
			<HomeHero />
			<Iphone />
			<Ipad />
			<Promo />
			<Carousel />
		</>
	);
}
