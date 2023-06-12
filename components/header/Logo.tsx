import Image from 'next/image';
import Link from 'next/link';
import apple from '@/assets/images/svgs/apple.svg';
const Logo = () => {
	return (
		<div>
			<Link href={'/'}>
				<Image
					className='w-5 h-5 object-contain'
					src={apple}
					width={40}
					height={40}
					alt='apple logo'
				/>
			</Link>
		</div>
	);
};
export default Logo;
