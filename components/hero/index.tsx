import HeroIphone14 from './Iphone14Pro';
import Ipad from './ipad';
import Iphone from './iphonePro';

export default function Heros() {
	return (
		<div className='overflow-hidden'>
			<HeroIphone14 />
			<Iphone />
			<Ipad />
		</div>
	);
}
