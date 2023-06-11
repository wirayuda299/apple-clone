import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<div>
			<Link href={'/'}>
				<Image
					className='w-5 h-5 object-contain'
					src={'/apple.svg'}
					width={40}
					height={40}
					alt='apple logo'
				/>
			</Link>
		</div>
	);
};
export default Logo;
