import HeroIphone14 from './Iphone14Pro/index';
import Ipad from './ipad/index';
import Iphone from '../Banners/Iphone14';

export default function Heros() {
	return (
		<div className='overflow-hidden'>
			<HeroIphone14 />
			<Iphone priority={false} />
			<Ipad />
		</div>
	);
}
